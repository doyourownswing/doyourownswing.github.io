import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DyosRenderer from "./event_renderers/dyos_renderer";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import getNextEvents from "../../../../data/events";
import FeatureFlags from "../../../../infra/feature_flags";
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
  const [currentEventIndex, setCurrentEventIndex] = React.useState(0);
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
              disabled={currentEventIndex === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={currentEventIndex === 0}
            >
              <KeyboardArrowLeft />
              Back
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
    <div style={{ backgroundColor: "#ededed" }}>
      <Container sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <Typography variant="h4">Upcoming events</Typography>
        {FeatureFlags.showScheduleTab && (
          <Typography>
            See the Classes tab for class description, prerequisites, pricing,
            and masking policy.
          </Typography>
        )}

        <TwoEventRenderer events={events} />
        <CarouselEventRenderer events={events} />
      </Container>
    </div>
  );
}

export default UpcomingEvents;
