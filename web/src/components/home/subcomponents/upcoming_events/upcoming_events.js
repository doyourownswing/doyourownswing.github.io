import { useState } from "react";
import {
  Box,
  Button,
  Container,
  MobileStepper,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import DyosRenderer from "./event_renderers/dyos_renderer";
import FeatureFlags from "infra/feature_flags";
import getNextEvents from "data/events";
import messages from "./messages";
import upcomingEventsStyles from "./upcoming_events.styles";

function TwoEventRenderer(props) {
  let events = props.events;
  return (
    <Box sx={upcomingEventsStyles.twoEventRenderer}>
      <DyosRenderer event={events[0]} />
      <DyosRenderer event={events[1]} />
    </Box>
  );
}

function CarouselEventRenderer(props) {
  let events = props.events;
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const maxSteps = events.length;

  const handleNext = () => {
    setCurrentEventIndex((prevEventIndex) => prevEventIndex + 1);
  };

  const handleBack = () => {
    setCurrentEventIndex((prevEventIndex) => prevEventIndex - 1);
  };

  return (
    <Box sx={upcomingEventsStyles.carouselEventRenderer}>
      <Box>
        <DyosRenderer event={events[currentEventIndex]} />
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
      </Box>
    </Box>
  );
}

function UpcomingEvents() {
  let events = getNextEvents(2);

  return (
    <div style={upcomingEventsStyles.upcomingEventsContainer}>
      <Container sx={upcomingEventsStyles.upcomingEventsRendererContainer}>
        <Typography variant="h4">{messages.upcomingEventsTitle}</Typography>
        {FeatureFlags.showScheduleTab && (
          <Typography>{messages.upcomingEventsDescription}</Typography>
        )}

        <TwoEventRenderer events={events} />
        <CarouselEventRenderer events={events} />
      </Container>
    </div>
  );
}

export default UpcomingEvents;
