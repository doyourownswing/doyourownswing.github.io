import { Box, Container, Stack, Typography } from "@mui/material";
import whatIsWcsStyles from "./what_is_wcs.styles";
import messages from "./messages";

function WhatIsWcs() {
  return (
    <Box sx={whatIsWcsStyles.whatIsWcsStylesContainer}>
      <Container>
        <Typography variant="h4" sx={whatIsWcsStyles.header}>
          What is West Coast Swing?
        </Typography>
        <Box sx={whatIsWcsStyles.itemsContainer}>
          <Stack sx={whatIsWcsStyles.twoColumnContent}>
            <Box sx={whatIsWcsStyles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/v4fRV0aG3lc?si=BKXYaAPC8ozlSUWF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
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
