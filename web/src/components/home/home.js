import { Box } from "@mui/material";
import Hero from "./subcomponents/hero/hero";
import SongOfTheWeek from "./subcomponents/song_of_the_week/song_of_the_week";
import UpcomingEvents from "./subcomponents/upcoming_events/upcoming_events";
import Welcome from "./subcomponents/welcome/welcome";
import WhatIsWcs from "./subcomponents/what_is_wcs/what_is_wcs";
import WhoWeAre from "./subcomponents/who_we_are/who_we_are";
import FeatureFlags from "infra/feature_flags";
import { useRef } from "react";
import Merch from "./subcomponents/merch/merch";

export default function Home() {
  const upcomingEventsRef = useRef(null);

  const onClickPrimaryHeroButton = () =>
    upcomingEventsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <Box>
      {!FeatureFlags.useHeroV2 && <Welcome />}
      {FeatureFlags.useHeroV2 && (
        <Hero onClickPrimaryButton={onClickPrimaryHeroButton} />
      )}
      <UpcomingEvents ref={upcomingEventsRef} />
      <WhoWeAre />
      <WhatIsWcs />
      <SongOfTheWeek />
      {FeatureFlags.showMerchSection && <Merch />}
    </Box>
  );
}
