import { Box, Button, Stack } from "@mui/material";
import welcomePic from "assets/images/teacher-demo-2-blurred-min.JPG";
import welcomeStyles from "./welcome.styles.js";
import FeatureFlags from "infra/feature_flags";

function Welcome() {
  return (
    <Stack sx={welcomeStyles.sectionLayout}>
      <Stack justifyContent="center" sx={welcomeStyles.titleBox}>
        <Box>
          <Box sx={welcomeStyles.subtitle}>Discover your rhythm at</Box>
          <Box sx={welcomeStyles.title}>Do Your Own Swing</Box>
        </Box>
        <Box>
          <Box>
            West Coast Swing classes and social dancing in San Jose, CA.
          </Box>
          <Box>Thursday Nights @ Studio M Ballroom</Box>
        </Box>
        {FeatureFlags.showStartHereTab && (
          <Button
            color="primary"
            variant="contained"
            sx={welcomeStyles.startHereButton}
          >
            Start here if you're new
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
