import upcomingEventsV2Styles from "@/components/home/subcomponents/upcoming_events_v2/upcoming_events_v2.styles";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { forwardRef } from "react";
import ClassesPic from "@/assets/images/classes2.jpg";
import SocialPic from "@/assets/images/mikaela-will-social.jpg";
import { LocationPin, WatchLater } from "@mui/icons-material";
import theme from "@/common/theme";
import EventCard from "@/components/home/subcomponents/upcoming_events_v2/event_card";
import getThisMonthsEvents from "@/data/events_v2";
import { formatDate, getNextThursday } from "@/utils/date_utils";

// TODO put these details in a common location
const classDetails = {
  level1: {
    level: "Level 1",
    displayName: "West Coast Swing Foundations",
    location: "Sky Ballroom (second floor, use of stairs required)",
    time: "8:30pm - 9:15pm",
  },
  level2: {
    level: "Level 2",
    displayName: "Beyond the Basics",
    location: "Spotlight Ballroom",
    time: "7:30pm - 8:00pm",
  },
  level3: {
    level: "Level 3",
    displayName: "Skills and Drills",
    location: "Spotlight Ballroom",
    time: "8:05pm - 8:35pm",
  },
  level4: {
    level: "Level 4",
    displayName: "Artistic Application",
    location: "Spotlight Ballroom",
    time: "8:40pm - 9:10pm",
  },
  social: {
    displayName: "Social Dancing!",
    location: "Main Ballroom",
    time: "9:15pm - 11:30pm",
  },
};

function ScheduleEvent(props) {
  let details = props.details;

  return (
    <Box>
      <Box sx={upcomingEventsV2Styles.classScheduleLevelAndClassName}>
        {!!details.level && (
          <Typography sx={upcomingEventsV2Styles.classLevel}>
            {details.level}
          </Typography>
        )}
        <Typography sx={upcomingEventsV2Styles.className}>
          {details.displayName}
        </Typography>
      </Box>
      <Box>
        <Box>
          <Box sx={upcomingEventsV2Styles.classDetailContainer}>
            <WatchLater
              fontSize="x-small"
              sx={upcomingEventsV2Styles.classDetailIcon}
            />
            <Typography sx={upcomingEventsV2Styles.classDetail}>
              {details.time}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={upcomingEventsV2Styles.classDetailContainer}>
            <LocationPin
              fontSize="x-small"
              sx={upcomingEventsV2Styles.classDetailIcon}
            />
            <Typography sx={upcomingEventsV2Styles.classDetail}>
              {details.location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function ScheduleQuickView() {
  return (
    <Box sx={upcomingEventsV2Styles.scheduleQuickViewContainer}>
      <Typography variant="h4" sx={upcomingEventsV2Styles.quickScheduleTitle}>
        Join us on Thursday
      </Typography>
      <Typography sx={upcomingEventsV2Styles.locationText}>
        Studio M Ballroom Club in San Jose, CA
      </Typography>
      <Box sx={upcomingEventsV2Styles.classScheduleContainer}>
        <Typography
          variant="h6"
          sx={upcomingEventsV2Styles.quickScheduleHeader}
        >
          Schedule
        </Typography>
        <Box sx={upcomingEventsV2Styles.classScheduleEventsContainer}>
          <ScheduleEvent details={classDetails.level2} />
          <ScheduleEvent details={classDetails.level3} />
          <ScheduleEvent details={classDetails.level4} />
          <ScheduleEvent details={classDetails.level1} />
          <ScheduleEvent details={classDetails.social} />
        </Box>
      </Box>
      <Box sx={upcomingEventsV2Styles.buttonsContainer}>
        <Button
          sx={upcomingEventsV2Styles.classesLearnMoreButton}
          variant="contained"
          size="large"
          href="#/classes"
        >
          Learn more about our classes
        </Button>
        <Button
          sx={upcomingEventsV2Styles.knowBeforeYouGoButton}
          variant="outlined"
          size="large"
          href="#/start-here"
        >
          Read the know-before-you-go guide
        </Button>
      </Box>
    </Box>
  );
}

function ScheduleAndImage() {
  let isTwoColumn = useMediaQuery(theme.breakpoints.up("md"));

  let socialPic = (
    <Box sx={upcomingEventsV2Styles.imageContainer}>
      <Box component="img" src={SocialPic} sx={upcomingEventsV2Styles.image2} />
    </Box>
  );

  return (
    <Box>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={upcomingEventsV2Styles.imageAndQuickViewContainer}
      >
        <Box>
          <ScheduleQuickView />
        </Box>
        <Box sx={upcomingEventsV2Styles.imagesContainer}>
          <Box sx={upcomingEventsV2Styles.imageContainer}>
            <Box
              component="img"
              src={ClassesPic}
              sx={upcomingEventsV2Styles.image}
            />
          </Box>
          {isTwoColumn && socialPic}
        </Box>
      </Stack>
      {!isTwoColumn && socialPic}
    </Box>
  );
}

function CurrentMonthEvents() {
  let events = getThisMonthsEvents();
  let nextThursday = getNextThursday();

  return (
    <Box sx={upcomingEventsV2Styles.monthEventsContainer}>
      <Box>
        <Box>
          {/* TODO support paging through multiple months */}
          <Typography
            variant="h4"
            sx={upcomingEventsV2Styles.monthScheduleTitle}
          >
            {`${formatDate(nextThursday, "MMMM")} Schedule`}
          </Typography>
        </Box>
        <Box sx={upcomingEventsV2Styles.eventCardsContainer}>
          {events.map((e, i) => (
            <EventCard event={e} key={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const UpcomingEventsV2 = forwardRef(function UpcomingEventsV2(_, ref) {
  return (
    <Box ref={ref} sx={upcomingEventsV2Styles.container}>
      <Container>
        <Typography variant="h3" sx={upcomingEventsV2Styles.title}>
          Upcoming Events
        </Typography>
        <ScheduleAndImage />
        <CurrentMonthEvents />
      </Container>
    </Box>
  );
});

export default UpcomingEventsV2;
