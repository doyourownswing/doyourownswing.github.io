import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Link,
  MobileStepper,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import FeatureFlags from "infra/feature_flags";
import getNextEvents from "data/events";
import messages from "./messages";
import upcomingEventsStyles from "./upcoming_events.styles";
import DYOSEventCard from "./event_cards/dyos_event_card";

function TwoEventRenderer(props) {
  let events = props.events;

  return (
    <Box sx={upcomingEventsStyles.twoEventRenderer}>
      <DYOSEventCard event={events[0]} />
      {events.length > 1 && <DYOSEventCard event={events[1]} />}
    </Box>
  );
}

function CarouselEventRenderer(props) {
  let events = props.events;
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const maxSteps = events.length;

  const handleNext = () =>
    setCurrentEventIndex((prevEventIndex) => prevEventIndex + 1);
  const handleBack = () =>
    setCurrentEventIndex((prevEventIndex) => prevEventIndex - 1);

  return (
    <Box sx={upcomingEventsStyles.carouselEventRenderer}>
      <Box>
        <DYOSEventCard event={events[currentEventIndex]} />
        {maxSteps > 1 && (
          <MobileStepper
            sx={upcomingEventsStyles.carouselStepper}
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={currentEventIndex}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={currentEventIndex >= maxSteps - 1}
              >
                {messages.next}
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={currentEventIndex <= 0}
              >
                <KeyboardArrowLeft />
                {messages.back}
              </Button>
            }
          />
        )}
      </Box>
    </Box>
  );
}

function NoUpcomingEvents() {
  return (
    <Box sx={upcomingEventsStyles.noUpcomingEventsContainer}>
      <Typography display="inline">
        {messages.noUpcomingEvents.start}
      </Typography>
      <Link
        href={messages.noUpcomingEvents.facebookLink}
        rel="noreferrer noopener"
        target="_blank"
      >
        <Typography display="inline">
          {messages.noUpcomingEvents.facebook}
        </Typography>
      </Link>
      <Typography display="inline">{messages.noUpcomingEvents.end}</Typography>
    </Box>
  );
}

function UpcomingEvents() {
  let events = getNextEvents(2);

  return (
    <Box sx={upcomingEventsStyles.upcomingEventsContainer}>
      <Container>
        <Typography variant="h4">{messages.upcomingEventsTitle}</Typography>
        {FeatureFlags.showScheduleTab && (
          <Typography>{messages.upcomingEventsDescription}</Typography>
        )}
        {events.length === 0 && <NoUpcomingEvents />}
        {events.length > 0 && [
          <TwoEventRenderer events={events} />,
          <CarouselEventRenderer events={events} />,
        ]}
      </Container>
    </Box>
  );
}

export default UpcomingEvents;
