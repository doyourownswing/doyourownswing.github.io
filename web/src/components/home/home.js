import { Box } from "@mui/material";
import SongOfTheWeek from "./subcomponents/song_of_the_week/song_of_the_week";
import UpcomingEvents from "./subcomponents/upcoming_events/upcoming_events";
import Welcome from "./subcomponents/welcome/welcome";
import WhatIsWcs from "./subcomponents/what_is_wcs/what_is_wcs";
import WhoWeAre from "./subcomponents/who_we_are/who_we_are";
import indexStyles from "index.styles";

const Home = () => (
  <Box sx={indexStyles.mainContent}>
    <Welcome />
    <UpcomingEvents />
    <WhoWeAre />
    <WhatIsWcs />
    <SongOfTheWeek />
  </Box>
);

export default Home;
