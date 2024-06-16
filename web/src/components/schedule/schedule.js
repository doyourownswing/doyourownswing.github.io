import { Box } from "@mui/material";
import ClassesOverview from "./subcomponents/classes_overview/classes_overview";
import indexStyles from "index.styles";

const Schedule = () => (
  <Box sx={indexStyles.mainContent}>
    <ClassesOverview />
  </Box>
);
export default Schedule;
