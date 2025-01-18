import { Box, Container, Stack, Typography } from "@mui/material";
import whatIsWcsStyles from "./what_is_wcs.styles";
import messages from "./messages";
import DefaultVideoRenderer from "./video_renderer/default_video_renderer";

const video1 = "https://www.youtube.com/embed/InPCm0d0dCQ";
const video2 = "https://www.youtube.com/embed/9ci5j2Bz8KQ";
const video3 = "https://www.youtube.com/embed/egG4y99A4nA";
const video4 = "https://www.youtube.com/embed/bWThBjHlUfw";

function BasicPointFormatter(props) {
  return (
    <Box>
      <Typography
        display="inline"
        variant="body1"
        sx={whatIsWcsStyles.pointHook}
      >
        {props.content.hook}
      </Typography>
      <Typography
        display="inline"
        variant="body1"
        sx={whatIsWcsStyles.pointContent}
      >
        {props.content.content}
      </Typography>
    </Box>
  );
}

// TODO: CREATE RENDERER FOR JOEL LINK SECTION (MUSIC)
// CREATE CAROUSEL FOR VIDEOS ON SMALLER SCREENS

function WhatIsWcs() {
  return (
    <Box sx={whatIsWcsStyles.whatIsWcsStylesContainer}>
      <Container>
        <Typography variant="h3" sx={whatIsWcsStyles.header}>
          {messages.title}
        </Typography>
        <Box sx={whatIsWcsStyles.itemsContainer}>
          <Stack sx={whatIsWcsStyles.twoColumnContent}>
            <Stack
              sx={whatIsWcsStyles.descriptionContainer}
              spacing={{ xs: 1, md: 4 }}
            >
              <BasicPointFormatter
                content={messages.leadFollow}
              ></BasicPointFormatter>

              <BasicPointFormatter
                content={messages.smooth}
              ></BasicPointFormatter>

              <BasicPointFormatter
                content={messages.improvised}
              ></BasicPointFormatter>

              <BasicPointFormatter
                content={messages.versatile} //todo
              ></BasicPointFormatter>

              <BasicPointFormatter
                content={messages.competitive}
              ></BasicPointFormatter>

              <BasicPointFormatter
                content={messages.lindyHop}
              ></BasicPointFormatter>
            </Stack>
            <Stack
              sx={whatIsWcsStyles.descriptionContainer}
              spacing={{ xs: 1, md: 4 }}
            >
              <DefaultVideoRenderer src={video1} />
              <DefaultVideoRenderer src={video2} />
              <DefaultVideoRenderer src={video3} />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default WhatIsWcs;
