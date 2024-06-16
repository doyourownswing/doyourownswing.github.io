import { Box, Button, Stack, Typography } from "@mui/material";
import classesOverviewStyles from "./classes_overview.styles.js";
import FeatureFlags from "infra/feature_flags";
import { useTheme } from "@emotion/react";
import messages from "./messages.js";

function ClassesOverview() {
  const theme = useTheme();
  return (
    <Box sx={classesOverviewStyles.section}>
      <Stack sx={classesOverviewStyles.sectionLayout}>
        <Box sx={classesOverviewStyles.overviewBox}>
          <Stack justifyContent="center">
            <Box>
              <Typography variant="h2" color={theme.palette.text.title}>
                {messages.title}
              </Typography>
              <Typography variant="h4" color={theme.palette.text.secondary}>
                {messages.subtitle}
              </Typography>
            </Box>
            <Box sx={classesOverviewStyles.description}>
              <Typography variant="body">{messages.description}</Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={[
            classesOverviewStyles.overviewBox,
            classesOverviewStyles.inviteBox,
          ]}
        >
          <Stack sx={classesOverviewStyles.inviteContent}>
            {FeatureFlags.showStartHerePage && (
              <>
                <Typography variant="h6">{messages.haveNotBeen}</Typography>
                <Typography variant="body">
                  Click the <b>Get Started</b> button below for everything you
                  need to know for your first time.
                </Typography>
                <Button
                  variant="contained"
                  sx={classesOverviewStyles.startHereButton}
                  href="#/start-here"
                >
                  {messages.getStarted}
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default ClassesOverview;
