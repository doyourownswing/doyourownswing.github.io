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

// Saumya put together this doc for us:
// https://docs.google.com/document/d/1hb9Ho3YnDe_uF4PUB-MfbJBytIC3B6heCXoBB-MPBrU/edit?tab=t.0

// TODO: Add a callout at the bottom of this section with a link to
// a youtube playlist with a bunch of other videos. Jessee started one,
// should consider crowdsourcing. I bet Joel has a bunch.

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

  const shouldUseCarousel = useMediaQuery(theme.breakpoints.down("md"));
  const carouselButtonsBelow = useMediaQuery(theme.breakpoints.down("sm"));

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

  let previousVideoIconButton = (
    <IconButton sx={whatIsWcsStyles.button} onClick={showPreviousVideo}>
      <ChevronLeftIcon size="large" />
    </IconButton>
  );

  let nextVideoIconButton = (
    <IconButton sx={whatIsWcsStyles.button} onClick={showNextVideo}>
      <ChevronRightIcon size="large" />
    </IconButton>
  );

  // If we're using a carousel in a small breakpoint screensize, the "previous video"
  // button should come before the videos.
  let getPreVideosButtons = () => {
    if (shouldUseCarousel && !carouselButtonsBelow) {
      return (
        <Box sx={whatIsWcsStyles.buttonContainerAround}>
          {previousVideoIconButton}
        </Box>
      );
    }
  };

  // If we're using a carousel in a small breakpoint screensize, only the "next video"
  // button should come after the videos.
  // If in an x-small breakpoint screensize, both buttons should be after the videos
  // so they can be rendered below the videos
  let getPostVideosButton = () => {
    if (!shouldUseCarousel) return;

    if (!carouselButtonsBelow) {
      return (
        <Box sx={whatIsWcsStyles.buttonContainerAround}>
          {nextVideoIconButton}
        </Box>
      );
    } else {
      return (
        <Box sx={whatIsWcsStyles.buttonsContainerBelow}>
          {previousVideoIconButton}
          {nextVideoIconButton}
        </Box>
      );
    }
  };

  return (
    <Box sx={whatIsWcsStyles.videoContainer}>
      {getPreVideosButtons()}
      <Box sx={whatIsWcsStyles.videoPlayers}>
        {createVideoPlayerBuilder(0, "InPCm0d0dCQ")}
        {createVideoPlayerBuilder(1, "9ci5j2Bz8KQ")}
        {createVideoPlayerBuilder(2, "egG4y99A4nA")}
      </Box>
      {getPostVideosButton()}
    </Box>
  );
}

const points = [
  messages.leadFollow,
  messages.connection,
  messages.versatile,
  messages.improvised,
  messages.competitive,
  messages.lindyHop,
];

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
              {points.map((p) => (
                <BasicPointFormatter content={p}></BasicPointFormatter>
              ))}
            </Stack>
            <VideoSection />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default WhatIsWcs;
