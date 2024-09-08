import { Box, Container, Stack, Typography } from "@mui/material";
import whatIsWcsStyles from "./what_is_wcs.styles";
import messages from "./messages";
import DefaultVideoRenderer from "./video_renderer/default_video_renderer";

function WhatIsWcs() {
  return (
    <Box sx={whatIsWcsStyles.whatIsWcsStylesContainer}>
      <Container>
        <Typography variant="h3" sx={whatIsWcsStyles.header}>
          What is West Coast Swing?
        </Typography>
        <Box sx={whatIsWcsStyles.itemsContainer}>
          <Stack sx={whatIsWcsStyles.twoColumnContent}>
            <DefaultVideoRenderer />
            <Stack
              sx={whatIsWcsStyles.descriptionContainer}
              spacing={{ xs: 1, md: 2 }}
            >
              <Typography variant="body">West Coast Swing is...</Typography>
              {Object.entries(messages).map(([_, value]) => (
                <Typography variant="body" sx={whatIsWcsStyles.lineItems}>
                  {value}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default WhatIsWcs;
