import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import whatIsWcsStyles from "./what_is_wcs.styles";

function WhatIsWcs() {
  const theme = useTheme();
  return (
    <Box sx={whatIsWcsStyles.whatIsWcsStylesContainer}>
      <Box sx={whatIsWcsStyles.itemsContainer}>
        <Typography variant="h4" sx={whatIsWcsStyles.header}>
          What is West Coast Swing?
        </Typography>
        <Stack sx={whatIsWcsStyles.twoColumnContent}>
          <Box sx={whatIsWcsStyles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v4fRV0aG3lc?si=BKXYaAPC8ozlSUWF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Box>
          <Stack sx={whatIsWcsStyles.descriptionContainer}>
            <Typography variant="body">West Coast Swing is...</Typography>
            <Typography variant="body" sx={whatIsWcsStyles.lineItems}>
              A partner dance involving the conversation between 2 roles: leader
              and follower.
            </Typography>
            <Typography variant="body" sx={whatIsWcsStyles.lineItems}>
              Recognized for its smooth, elastic movement following basic
              patterns with endless variations.
            </Typography>
            <Typography variant="body" sx={whatIsWcsStyles.lineItems}>
              Often improvised rather than choreographed, offering the
              opportunity for creative expression.
            </Typography>
            <Typography variant="body" sx={whatIsWcsStyles.lineItems}>
              Commonly danced to contemporary pop, blues, and R&B music.
            </Typography>
            <Typography variant="body" sx={whatIsWcsStyles.lineItems}>
              Danced both in social and competitive settings.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default WhatIsWcs;
