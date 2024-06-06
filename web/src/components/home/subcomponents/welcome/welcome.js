import { Box, Button, Stack, Typography } from "@mui/material";
import welcomePic from "assets/images/teacher-demo-2-blurred-min.JPG";
import welcomeStyles from "./welcome.styles.js";
import FeatureFlags from "infra/feature_flags";
import { useTheme } from "@emotion/react";

function Welcome() {
  const theme = useTheme();
  return (
    <Stack sx={welcomeStyles.sectionLayout}>
      <Stack justifyContent="center" sx={welcomeStyles.titleBox}>
        <Box>
          <Typography variant="h4" color={theme.palette.text.secondary}>
            Discover your rhythm at
          </Typography>
          <Typography variant="h2" color={theme.palette.text.title}>
            Do Your Own Swing
          </Typography>
        </Box>
        <Box>
          <Typography variant="body">
            West Coast Swing classes and social dancing in San Jose, CA.
          </Typography>
          <Box>
            <Typography variant="body">
              Thursday Nights @ Studio M Ballroom
            </Typography>
          </Box>
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
