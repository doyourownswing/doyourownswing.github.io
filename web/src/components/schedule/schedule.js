import { Box } from "@mui/material";
import ClassesOverview from "./subcomponents/classes_overview/classes_overview";
import ThursdaySchedule from "./subcomponents/thursday_schedule/thursday_schedule";
import Classes from "./subcomponents/classes/classes";

const Schedule = () => (
  <Box>
    {/* <ClassesOverview />
    <ThursdaySchedule /> */}
    <Classes />
  </Box>
);
export default Schedule;
