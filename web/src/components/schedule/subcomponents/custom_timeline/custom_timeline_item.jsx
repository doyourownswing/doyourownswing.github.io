import { Box, Typography } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useTheme } from "@emotion/react";
import timelineStyles from "./custom_timeline.styles";

function CustomTimelineItem({ title, subtitle, oppositeText, isLastItem }) {
  const theme = useTheme();
  return (
    <TimelineItem>
      <TimelineContent sx={timelineStyles.leftContent}>
        <Box>
          <Typography>{title}</Typography>
          <Typography color={theme.palette.text.subtitle}>
            {subtitle}
          </Typography>
        </Box>
      </TimelineContent>
      <TimelineSeparator>
        <TimelineDot />
        {!isLastItem && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineOppositeContent sx={timelineStyles.oppositeContent}>
        {oppositeText}
      </TimelineOppositeContent>
    </TimelineItem>
  );
}

export default CustomTimelineItem;
