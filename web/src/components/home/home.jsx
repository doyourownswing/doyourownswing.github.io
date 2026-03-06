import { Box } from "@mui/material";
import Hero from "./subcomponents/hero/hero";
import SongOfTheWeek from "./subcomponents/song_of_the_week/song_of_the_week";
import WhatIsWcs from "./subcomponents/what_is_wcs/what_is_wcs";
import WhoWeAre from "./subcomponents/who_we_are/who_we_are";
import FeatureFlags from "@/infra/feature_flags";
import Merch from "./subcomponents/merch/merch";
import UpcomingEventsV2 from "@/components/home/subcomponents/upcoming_events_v2/upcoming_events_v2";

export default function Home() {
  return (
    <Box>
      <Hero />
      <UpcomingEventsV2 />
      <WhoWeAre />
      <WhatIsWcs />
      <SongOfTheWeek />
      {FeatureFlags.showMerchSection && <Merch />}
    </Box>
  );
}
