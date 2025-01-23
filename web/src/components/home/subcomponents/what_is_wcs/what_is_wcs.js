import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import whatIsWcsStyles from "./what_is_wcs.styles";
import messages from "./messages";
import YouTube from "react-youtube";
import { useState } from "react";
import theme from "common/theme";
import "./what_is_wcs.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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

const breakPointClassName = {
  xs: "youtube-player-xs",
  sm: "youtube-player-sm",
  md: "youtube-player-md",
  lg: "youtube-player-lg",
  xl: "youtube-player-xl",
};

function VideoSection() {
  const [videoPlayers, setVideoPlayers] = useState(new Map());
  const [currentVideoIndex, setCurrentVideoIndex] = useState({
    current: 0,
    previous: null,
    direction: null,
  });

  const shouldUseCarousel = useMediaQuery(theme.breakpoints.down("lg"));

  // On screen resize, clear the previous / direction so that we don't have
  // animations when going from non-carousel to carousel.
  if (!shouldUseCarousel && currentVideoIndex.previous !== null) {
    setCurrentVideoIndex({
      current: currentVideoIndex.current,
      previous: null,
      direction: null,
    });
  }

  const isScreenSizeXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isScreenSizeSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isScreenSizeMd = useMediaQuery(theme.breakpoints.only("md"));
  const isScreenSizeLg = useMediaQuery(theme.breakpoints.only("lg"));

  let youtubePlayerClassName = isScreenSizeXs
    ? breakPointClassName.xs
    : isScreenSizeSm
    ? breakPointClassName.sm
    : isScreenSizeMd
    ? breakPointClassName.md
    : isScreenSizeLg
    ? breakPointClassName.lg
    : breakPointClassName.xl;

  function createOnVideoReady(index) {
    return (event) => {
      videoPlayers.set(index, event.target);
      setVideoPlayers(videoPlayers);
    };
  }

  function createOnVideoPlay(index) {
    return (event) => {
      // If not using the carousel, set the current index so if
      // using carousel, we show the last played video.
      if (!shouldUseCarousel) {
        setCurrentVideoIndex({
          current: index,
          previous: null,
          direction: null,
        });
      }

      for (let player of videoPlayers.values()) {
        if (player !== event.target) {
          player.pauseVideo();
        }
      }
    };
  }

  function pauseAllVideos() {
    for (let player of videoPlayers.values()) {
      player.pauseVideo();
    }
  }

  function getPlayerContainerClasses(index) {
    let classes = [];
    if (!shouldUseCarousel) return classes;

    if (currentVideoIndex.previous === index) {
      classes.push("previous");
      classes.push("out-from-" + currentVideoIndex.direction);
    } else if (currentVideoIndex.current === index) {
      classes.push("current");
      classes.push("in-from-" + currentVideoIndex.direction);
    } else {
      classes.push("hidden");
    }

    return classes;
  }

  function createVideoPlayerBuilder(index, videoId) {
    let classNames = getPlayerContainerClasses(index).join(" ");

    return (
      <YouTube
        videoId={videoId}
        onReady={createOnVideoReady(index)}
        onPlay={createOnVideoPlay(index)}
        iframeClassName={youtubePlayerClassName}
        className={classNames}
      ></YouTube>
    );
  }

  function showPreviousVideo() {
    let newCurrentIndex =
      (currentVideoIndex.current - 1 + videoPlayers.size) % videoPlayers.size;

    setCurrentVideoIndex({
      previous: currentVideoIndex.current,
      current: newCurrentIndex,
      direction: "left",
    });

    pauseAllVideos();
  }

  function showNextVideo() {
    let newCurrentIndex = (currentVideoIndex.current + 1) % videoPlayers.size;

    setCurrentVideoIndex({
      previous: currentVideoIndex.current,
      current: newCurrentIndex,
      direction: "right",
    });

    pauseAllVideos();
  }

  return (
    <Box sx={whatIsWcsStyles.videoContainer}>
      <Box sx={whatIsWcsStyles.videoPlayers}>
        {createVideoPlayerBuilder(0, "InPCm0d0dCQ")}
        {createVideoPlayerBuilder(1, "9ci5j2Bz8KQ")}
        {createVideoPlayerBuilder(2, "egG4y99A4nA")}
      </Box>
      {shouldUseCarousel && (
        <Box sx={whatIsWcsStyles.buttonContainer}>
          <IconButton sx={whatIsWcsStyles.button} onClick={showPreviousVideo}>
            <ChevronLeftIcon size="large" />
          </IconButton>
          <IconButton sx={whatIsWcsStyles.button} onClick={showNextVideo}>
            <ChevronRightIcon size="large" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

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
            <VideoSection />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default WhatIsWcs;
