import { Box } from "@mui/material";
import ClassesOverview from "./subcomponents/classes_overview/classes_overview";
import scheduleStyles from "./schedule.styles";

const Schedule = () => (
  <Box sx={scheduleStyles.schedule}>
    <ClassesOverview />
  </Box>
);
export default Schedule;
