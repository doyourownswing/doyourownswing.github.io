import { Box } from "@mui/material";
import Hero from "./subcomponents/hero/hero";
import SongOfTheWeek from "./subcomponents/song_of_the_week/song_of_the_week";
import UpcomingEvents from "./subcomponents/upcoming_events/upcoming_events";
import Welcome from "./subcomponents/welcome/welcome";
import WhatIsWcs from "./subcomponents/what_is_wcs/what_is_wcs";
import WhoWeAre from "./subcomponents/who_we_are/who_we_are";
import FeatureFlags from "infra/feature_flags";

const Home = () => (
  <Box>
    {!FeatureFlags.useHeroV2 && <Welcome />}
    {FeatureFlags.useHeroV2 && <Hero />}
    <UpcomingEvents />
    <WhoWeAre />
    <WhatIsWcs />
    <SongOfTheWeek />
  </Box>
);

export default Home;
