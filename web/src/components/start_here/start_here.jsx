import { Box, Container, Typography } from "@mui/material";
import messages from "./messages";
import startHereStyles from "./start_here.styles";
import BeforeTheEvent from "./subcomponents/before_the_event";
import WhenYouArrive from "./subcomponents/when_you_arrive";
import Faqs from "./subcomponents/faqs";

function StartHere() {
  return (
    <Box>
      <Box sx={startHereStyles.titleSection}>
        <Container>
          <Typography variant="h4">{messages.firstTimeHere}</Typography>
          <Typography variant="h3" sx={startHereStyles.welcome}>
            {messages.welcomeToDyos}
          </Typography>
          <Typography variant="subtitle1">{messages.subtitle}</Typography>
        </Container>
      </Box>
      <BeforeTheEvent />
      <WhenYouArrive />
      <Faqs />
    </Box>
  );
}

export default StartHere;
