import { Box, Grid, Stack, Typography } from "@mui/material";
import ScheduleTimeline from "../schedule_timeline/schedule_timeline.js";
import thursdayScheduleStyles from "./thursday_schedule.styles.js";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";

function ThursdaySchedule() {
  const theme = useTheme();
  return (
    <Box sx={thursdayScheduleStyles.section}>
      <Stack>
        <Typography variant="h3">{messages.title}</Typography>
        <Typography variant="h5" color={theme.palette.text.subtitle}>
          {messages.subtitle}
        </Typography>
        <ScheduleTimeline />

        {/* Headers */}
        <Grid container spacing={2} columns={{ sm: 4, md: 12 }}>
          <Grid item xs={3} display={{ xs: "none", md: "block" }}>
            <Typography variant="h5">{messages.classHeader}</Typography>
          </Grid>
          <Grid item xs={4} display={{ xs: "none", md: "block" }}>
            <Typography variant="h5">{messages.descriptionHeader}</Typography>
          </Grid>
          <Grid item xs={4} display={{ xs: "none", md: "block" }}>
            <Typography variant="h5">{messages.prerequisitesHeader}</Typography>
          </Grid>

          {/* WCS Foundations */}
          <Grid item xs={3}>
            <Box display={{ xs: "none", md: "block" }}>
              {messages.foundationsTitle}
            </Box>
            <Typography variant="h5" display={{ xs: "block", md: "none" }}>
              {messages.foundationsTitle}
            </Typography>
            <Box color={theme.palette.text.subtitle}>
              {messages.foundationsSubtitle}{" "}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={thursdayScheduleStyles.gridItemTopOfSection}>
              {messages.foundationsDescription1}
            </Box>
            <Box>{messages.foundationsDescription2}</Box>
          </Grid>
          <Grid item xs={4}>
            <Box>{messages.foundationsPrereq}</Box>
          </Grid>

          {/* Connection, Rhythm, and Flow */}
          <Grid item xs={3}>
            <Box display={{ xs: "none", md: "block" }}>
              {messages.connectionTitle}
            </Box>
            <Typography variant="h5" display={{ xs: "block", md: "none" }}>
              {messages.connectionTitle}
            </Typography>
            <Box color={theme.palette.text.subtitle}>
              {messages.connectionSubtitle}{" "}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={thursdayScheduleStyles.gridItemTopOfSection}>
              {messages.connectionDescription1}
            </Box>
            <Box>{messages.connectionDescription2} </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={thursdayScheduleStyles.gridItemTopOfSection}>
              {messages.connectionPrereq1}
            </Box>
            <Box>{messages.connectionPrereq2}</Box>
          </Grid>

          {/* You, Me, and the Music */}
          <Grid item xs={3}>
            <Box display={{ xs: "none", md: "block" }}>
              {messages.youMeTitle}
            </Box>
            <Typography variant="h5" display={{ xs: "block", md: "none" }}>
              {messages.youMeTitle}
            </Typography>
            <Box color={theme.palette.text.subtitle}>
              {messages.youMeSubtitle}{" "}
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={thursdayScheduleStyles.gridItemTopOfSection}>
              {messages.youMeDescription1}
            </Box>
            <Box>{messages.youMeDescription2} </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>{messages.youMePrereq}</Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ThursdaySchedule;
