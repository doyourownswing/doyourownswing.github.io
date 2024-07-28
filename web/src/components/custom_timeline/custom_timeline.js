import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import CustomTimelineItem from "./custom_timeline_item.js";
import timelineStyles from "./custom_timeline.styles.js";

function CustomTimeline({ events }) {
  return (
    <Box sx={timelineStyles.sectionContainer}>
      <Box sx={timelineStyles.section}>
        <Timeline>
          {events.map((x, i) => (
            <CustomTimelineItem
              title={x.classTitle}
              subtitle={x.time}
              oppositeText={x.location}
              isLastItem={i === events.length - 1}
            />
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}

export default CustomTimeline;
