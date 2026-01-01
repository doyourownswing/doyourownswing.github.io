import { Box } from "@mui/material";
import Hero from "./subcomponents/hero/hero";
import SongOfTheWeek from "./subcomponents/song_of_the_week/song_of_the_week";
import WhatIsWcs from "./subcomponents/what_is_wcs/what_is_wcs";
import WhoWeAre from "./subcomponents/who_we_are/who_we_are";
import FeatureFlags from "@/infra/feature_flags";
import { useRef } from "react";
import Merch from "./subcomponents/merch/merch";
import WinterSchedule from "./subcomponents/winter_schedule_2025/winter_schedule";
import UpcomingEventsV2 from "@/components/home/subcomponents/upcoming_events_v2/upcoming_events_v2";

export default function Home() {
  const upcomingEventsRef = useRef(null);

  const onClickPrimaryHeroButton = () =>
    upcomingEventsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <Box>
      <Hero onClickPrimaryButton={onClickPrimaryHeroButton} />
      {!FeatureFlags.useUpcomingEventsV2 && (
        <WinterSchedule ref={upcomingEventsRef} />
      )}
      {FeatureFlags.useUpcomingEventsV2 && (
        <UpcomingEventsV2 ref={upcomingEventsRef} />
      )}
      <WhoWeAre />
      <WhatIsWcs />
      <SongOfTheWeek />
      {FeatureFlags.showMerchSection && <Merch />}
    </Box>
  );
}
