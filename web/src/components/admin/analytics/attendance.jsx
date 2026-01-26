import theme from "@/common/theme";
import analyticsStyles from "@/components/admin/analytics/analytics.styles";
import { prettyPrintDate } from "@/components/admin/analytics/utils";
import DyosCard from "@/components/common/card";
import { Box, Grid, Typography } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";

function TotalWeeklyAttendance(props) {
  let data = props.data;

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
      </DyosCard>
    </Grid>
  );
}

function ClassAttendance(props) {
  let data = props.data;

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
