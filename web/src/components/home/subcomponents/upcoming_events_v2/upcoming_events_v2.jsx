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
import { getNextThursday } from "@/utils/date_utils";
import messages from "@/components/home/subcomponents/upcoming_events_v2/messages";

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
        {messages.joinUs}
      </Typography>
      <Typography sx={upcomingEventsV2Styles.locationText}>
        {messages.studioM}
      </Typography>
      <Box sx={upcomingEventsV2Styles.classScheduleContainer}>
        <Typography
          variant="h6"
          sx={upcomingEventsV2Styles.quickScheduleHeader}
        >
          {messages.thursdayScheduleHeader}
        </Typography>
        <Box sx={upcomingEventsV2Styles.classScheduleEventsContainer}>
          <ScheduleEvent details={messages.classDetails.level2} />
          <ScheduleEvent details={messages.classDetails.level3} />
          <ScheduleEvent details={messages.classDetails.level4} />
          <ScheduleEvent details={messages.classDetails.level1} />
          <ScheduleEvent details={messages.classDetails.social} />
        </Box>
      </Box>
      <Box sx={upcomingEventsV2Styles.buttonsContainer}>
        <Button
          sx={upcomingEventsV2Styles.classesLearnMoreButton}
          variant="contained"
          size="large"
          href="#/classes"
        >
          {messages.classesCta}
        </Button>
        <Button
          sx={upcomingEventsV2Styles.knowBeforeYouGoButton}
          variant="outlined"
          size="large"
          href="#/start-here"
        >
          {messages.startHereCta}
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
            {messages.getMonthEventsHeader(nextThursday)}
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
          {messages.title}
        </Typography>
        <ScheduleAndImage />
        <CurrentMonthEvents />
      </Container>
    </Box>
  );
});

export default UpcomingEventsV2;
