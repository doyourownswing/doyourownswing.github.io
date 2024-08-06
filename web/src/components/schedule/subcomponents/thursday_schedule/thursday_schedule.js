import { Box, Stack, Typography } from "@mui/material";
import ClassGrid from "./class_grid/class_grid.js";
import thursdayScheduleStyles from "./thursday_schedule.styles.js";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";
import CustomTimeline from "components/custom_timeline/custom_timeline.js";
import schedule from "./data.js";

function ThursdaySchedule() {
  const theme = useTheme();

  return (
    <Box sx={thursdayScheduleStyles.section}>
      <Stack>
        <Typography variant="h2">{messages.title}</Typography>
        <Typography variant="h4" color={theme.palette.text.subtitle}>
          {messages.subtitle}
        </Typography>
        <CustomTimeline events={schedule} />
        <ClassGrid />
      </Stack>
    </Box>
  );
}

export default ThursdaySchedule;
