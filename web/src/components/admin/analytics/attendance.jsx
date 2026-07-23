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

const MAX_HISTOGRAM_SECTIONS = 10;

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
    if (i !== Math.floor(i)) {
      return arr[Math.floor(i)];
    } else {
      return (arr[i - 1] + arr[i]) / 2;
    }
  };

  const summaries = dataArrays.map((arr) => {
    /* Summary stats */
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const mean = Math.round(sum / arr.length);

    const sortedData = arr.toSorted((a, b) => Number(a) - Number(b));
    const median = getElemAroundIndex(sortedData, arr.length / 2);

    // these arrays should be small enough to safely spread them into function calls
    const max = Math.max(...arr);
    const maxIdx = arr.indexOf(max);
    const min = Math.min(...arr);
    const minIdx = arr.indexOf(min);

    /* Data for the histogram - determine histogram thresholds based on range */
    const range = max + 1 - min;
    const thresholdDiff = Math.ceil(range / MAX_HISTOGRAM_SECTIONS);
    const nSections = Math.ceil(range / thresholdDiff);

    const thresholds = [...new Array(nSections)].map(
      (_, i) => min + i * thresholdDiff,
    );

    const thresholdLabels =
      thresholdDiff > 1
        ? thresholds.map((n) => `${n}-${n + thresholdDiff - 1}`)
        : thresholds;

    const counts = thresholds.map(() => 0);
    arr.forEach((n) => {
      const bin = Math.floor((n - min) / thresholdDiff);
      counts[bin] += 1;
    });

    return {
      mean,
      median,
      max,
      min,
      maxIdx,
      minIdx,
      histogram: { thresholdLabels, counts },
    };
  });

  return (
    <details>
      <summary>Show/hide summary stats</summary>
      {summaries.map(({ histogram: { thresholdLabels, counts } }, i) => {
        return (
          <BarChart
            key={labels[i]}
            height={200}
            xAxis={[
              {
                data: thresholdLabels,
                label: `${labels[i]} histogram`,
                scaleType: "band",
                categoryGapRatio: 0,
              },
            ]}
            series={[
              {
                data: counts,
                type: "bar",
              },
            ]}
          />
        );
      })}

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
            <TableRow key={labels[i]}>
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
          <Typography variant="subtitle" sx={analyticsStyles.chartSubtitle}>
            Click a legend item to show/hide that class
          </Typography>
        </Box>
        <LineChart
          height={300}
          series={[
            { data: l1, label: "L1", showMark: false },
            { data: l2, label: "L2", showMark: false },
            { data: l3, label: "L3", showMark: false },
            { data: l4, label: "L4", showMark: false },
            {
              data: socialOnly,
              label: "Social Only",
              showMark: false,
            },
          ]}
          colors={colors}
          xAxis={[{ scaleType: "point", data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
          slotProps={{
            legend: {
              toggleVisibilityOnClick: true,
            },
          }}
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
