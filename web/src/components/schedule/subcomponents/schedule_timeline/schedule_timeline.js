import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import scheduleTimelineStyles from "./schedule_timeline.styles.js";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";

function ScheduleTimeline() {
  const theme = useTheme();
  return (
    <Box sx={scheduleTimelineStyles.sectionContainer}>
      <Box sx={scheduleTimelineStyles.section}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Box>
                <Typography>{messages.connectionClassName}</Typography>
                <Typography color={theme.palette.text.subtitle}>
                  7:30
                </Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{messages.spotlightBallroom}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              {messages.spotlightBallroom}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography>{messages.youMeClassName}</Typography>
                <Typography color={theme.palette.text.subtitle}>
                  8:15
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Box>
                <Typography>{messages.foundationsClassName}</Typography>
                <Typography color={theme.palette.text.subtitle}>
                  9:00
                </Typography>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{messages.skylightBallroom}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              {messages.royalBallroom}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography>{messages.socialDancing}</Typography>
                <Typography color={theme.palette.text.subtitle}>
                  9:00
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography>
                <Box>
                  <Typography>{messages.endOfNight}</Typography>
                  <Typography color={theme.palette.text.subtitle}>
                    11:30
                  </Typography>
                </Box>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
}

export default ScheduleTimeline;
