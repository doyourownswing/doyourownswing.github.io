import { Box, Button, Stack, Typography } from "@mui/material";
import ScheduleTImeline from "../schedule_timeline/schedule_timeline.js";
import scheduleTimelineStyles from "./schedule_timeline.styles.js";
import FeatureFlags from "infra/feature_flags";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";

function ScheduleTimeline() {
  const theme = useTheme();
  return (
    <Box sx={scheduleTimelineStyles.section}>
      <Stack>{"Timeline goes here"}</Stack>
    </Box>
  );
}

export default ScheduleTimeline;
