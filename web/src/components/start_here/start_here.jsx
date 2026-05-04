import { Box, Container, Stack, Typography } from "@mui/material";
import messages from "./messages";
import startHereStyles from "./start_here.styles";
import BeforeTheEvent from "./subcomponents/before_the_event";
import WhenYouArrive from "./subcomponents/when_you_arrive";
import Faqs from "./subcomponents/faqs";
import WelcomeImage from "@/assets/images/jon-sherwin.png";

function StartHere() {
  return (
    <Box>
      <Box sx={startHereStyles.container}>
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={startHereStyles.titleAndImageContainer}
          >
            <Box sx={startHereStyles.titleSection}>
              <Typography variant="h5" sx={startHereStyles.subTitle}>
                {messages.firstTimeHere}
              </Typography>
              <Typography variant="h3" sx={startHereStyles.welcome}>
                {messages.welcomeToDyos}
              </Typography>
              <Typography>{messages.subtitle}</Typography>
            </Box>
            <Box>
              <Box
                component="img"
                src={WelcomeImage}
                sx={startHereStyles.picture}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <BeforeTheEvent />
      <WhenYouArrive />
      <Faqs />
    </Box>
  );
}

export default StartHere;
