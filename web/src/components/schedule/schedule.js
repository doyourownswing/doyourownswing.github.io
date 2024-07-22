import { Box } from "@mui/material";
import ClassesOverview from "./subcomponents/classes_overview/classes_overview";
import ThursdaySchedule from "./subcomponents/thursday_schedule/thursday_schedule";

const Schedule = () => (
  <Box>
    <ClassesOverview />
    <ThursdaySchedule />
  </Box>
);
export default Schedule;
