import theme from "@/common/theme";
import analyticsStyles from "@/components/admin/analytics/analytics.styles";
import { prettyPrintDate, shortDate } from "@/components/admin/analytics/utils";
import DyosCard from "@/components/common/card";
import { Box, Grid, Typography } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

/**
 * Given dataArrays (an array of numeric arrays),
 * dates (an array of strings with the same length as an array in data),
 * labels (one for each array in data),
 * and colors (optional)
 * displays summary statistics for each array in the data.
 */
function SummaryStats({ dataArrays, dates, labels }) {
  // helper for calculating median (can also be used for quartiles)
  const getElemAroundIndex = (arr, i) => {
    if (i === Math.trunc(i)) {
      return arr[i];
    } else {
      return (arr[Math.floor(i) - 1] + arr[Math.floor(i)]) / 2;
    }
  };

  const summaries = dataArrays.map((arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const mean = Math.round(sum / arr.length);

    const sortedData = arr.toSorted((a, b) => Number(a) - Number(b));
    const median = getElemAroundIndex(sortedData, arr.length / 2);

    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    const maxIdx = arr.indexOf(max);
    const min = arr.reduce((a, b) => Math.min(a, b), Infinity);
    const minIdx = arr.indexOf(min);

    return { mean, median, max, min, maxIdx, minIdx, sortedData };
  });

  return (
    <details>
      <summary>Show/hide summary stats</summary>
      <LineChart
        height={300}
        series={summaries.map(({ sortedData }, i) => {
          return { data: sortedData, label: `${labels[i]} (sorted)` };
        })}
        yAxis={[{ min: 0 }]}
        margin={{ right: 64 }}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Avg</TableCell>
            <TableCell>Median</TableCell>
            <TableCell>Max</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summaries.map(({ mean, median, max, min, maxIdx, minIdx }, i) => (
            <TableRow>
              <TableCell>{labels[i]}</TableCell>
              <TableCell>
                {min}
                <br />({shortDate(dates[minIdx])})
              </TableCell>
              <TableCell>{mean}</TableCell>
              <TableCell>{median}</TableCell>
              <TableCell>
                {max}
                <br />({shortDate(dates[maxIdx])})
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </details>
  );
}

function TotalWeeklyAttendance(props) {
  let data = props.data.weeklyStats;

  const xLabels = data.map((d) => prettyPrintDate(d.date));
  const weeklyAttendance = data.map((d) => d.attendance.totalAttendees);

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Total attendees
          </Typography>
        </Box>
        <LineChart
          height={300}
          series={[{ data: weeklyAttendance, label: "Total attendees" }]}
          xAxis={[{ scaleType: "point", data: xLabels, height: 28 }]}
          yAxis={[{ min: 0 }]}
          margin={{ right: 64 }}
        />
        <SummaryStats
          dataArrays={[weeklyAttendance]}
          dates={data.map((d) => d.date)}
          labels={["Total attendees"]}
        />
      </DyosCard>
    </Grid>
  );
}

function ClassAttendance(props) {
  let data = props.data.weeklyStats;

  const xLabels = data.map((d) => prettyPrintDate(d.date));
  const l1 = data.map((d) => d.attendance.numL1Attendees);
  const l2 = data.map((d) => d.attendance.numL2Attendees);
  const l3 = data.map((d) => d.attendance.numL3Attendees);
  const l4 = data.map((d) => d.attendance.numL4Attendees);
  const socialOnly = data.map((d) => d.attendance.numSocialOnlyAttendees);

  const colors = [
    theme.palette.charts.l1,
    theme.palette.charts.l2,
    theme.palette.charts.l3,
    theme.palette.charts.l4,
    theme.palette.charts.socialOnly,
  ];

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Class attendance
          </Typography>
        </Box>
        <BarChart
          height={300}
          series={[
            { data: l1, label: "L1", id: "l1" },
            { data: l2, label: "L2", id: "l2" },
            { data: l3, label: "L3", id: "l3" },
            { data: l4, label: "L4", id: "l4" },
            { data: socialOnly, label: "Social Only", id: "so" },
          ]}
          colors={colors}
          xAxis={[{ data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
        />
        <SummaryStats
          dataArrays={[l1, l2, l3, l4, socialOnly]}
          dates={data.map((d) => d.date)}
          labels={["L1", "L2", "L3", "L4", "Social"]}
        />
      </DyosCard>
    </Grid>
  );
}

function Attendance(props) {
  let data = props.data;

  return (
    <Box>
      <Typography sx={analyticsStyles.sectionSubtitle}>
        Who is coming to DYOS
      </Typography>
      <Typography variant="h4" sx={analyticsStyles.sectionTitle}>
        Attendance
      </Typography>
      <Grid
        container
        columns={{ xs: 1, lg: 2 }}
        spacing={4}
        sx={analyticsStyles.sectionContentContainer}
      >
        <TotalWeeklyAttendance data={data} />
        <ClassAttendance data={data} />
      </Grid>
    </Box>
  );
}

export default Attendance;
