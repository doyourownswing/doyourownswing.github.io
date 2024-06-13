import SongOfTheWeek from "./subcomponents/song_of_the_week/song_of_the_week";
import UpcomingEvents from "./subcomponents/upcoming_events/upcoming_events";
import Welcome from "./subcomponents/welcome/welcome";
import WhatIsWcs from "./subcomponents/what_is_wcs/what_is_wcs";
import WhoWeAre from "./subcomponents/who_we_are/who_we_are";
import homeStyles from "./home.styles";

function Home() {
  return (
    <div style={homeStyles.home}>
      <Welcome />
      <UpcomingEvents />
      <WhoWeAre />
      <WhatIsWcs />
      <SongOfTheWeek />
    </div>
  );
}

export default Home;
