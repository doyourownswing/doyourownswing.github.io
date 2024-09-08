import { Box, Button, Stack, Typography } from "@mui/material";
import welcomePic from "assets/images/teacher-demo-2-blurred-min.JPG";
import welcomeStyles from "./welcome.styles.js";
import FeatureFlags from "infra/feature_flags";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";

function Welcome() {
  const theme = useTheme();
  return (
    <Stack sx={welcomeStyles.sectionLayout}>
      <Stack justifyContent="center" sx={welcomeStyles.titleBox}>
        <Box sx={welcomeStyles.titleText}>
          <Typography variant="h4" color={theme.palette.text.secondary}>
            {messages.discover}
          </Typography>
          <Typography variant="h2" color={theme.palette.text.title}>
            {messages.title}
          </Typography>
        </Box>
        <Box sx={welcomeStyles.mainDescription}>
          <Typography variant="body">{messages.classesAndSocial}</Typography>
          <Typography variant="body">{messages.consciousSpace}</Typography>
          <Typography variant="body">{messages.thursdayNights}</Typography>
        </Box>
        {FeatureFlags.showStartHerePage && (
          <Button
            variant="contained"
            sx={welcomeStyles.startHereButton}
            href="#/start-here"
          >
            {messages.startHereText}
          </Button>
        )}
      </Stack>
      <Box
        component="img"
        src={welcomePic}
        sx={welcomeStyles.splashPicture}
        alt="Two dancers in a mid-dance pose"
      />
    </Stack>
  );
}

export default Welcome;
