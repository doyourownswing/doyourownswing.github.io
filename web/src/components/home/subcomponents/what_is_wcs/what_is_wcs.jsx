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
import theme from "@/common/theme";
import "./what_is_wcs.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { HTML_IDS } from "../constants";

// Saumya put together this doc for us:
// https://docs.google.com/document/d/1hb9Ho3YnDe_uF4PUB-MfbJBytIC3B6heCXoBB-MPBrU/edit?tab=t.0

// TODO: Add a callout at the bottom of this section with a link to
// a youtube playlist with a bunch of other videos. Jessee started one,
// should consider crowdsourcing. I bet Joel has a bunch.

/// A renderer for each paragraph that has a bolded "hook", and the
/// rest has the regular body styling
function BasicParagraphFormatter(props) {
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

  // For sm and xs screen sizes, render the videos in a carousel.
  const shouldUseCarousel = useMediaQuery(theme.breakpoints.down("md"));

  // For sm screen sizes, the next / previous buttons are inline with the video.
  // For xs, they are below the video player.
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

  // Returns an onVideoReady callback function scoped to the video index.
  // Video index is used for tracking currently played video.
  //
  // The returned function registers the video player javascript handle
  // in the component state so that we can control them dynamically.
  function createOnVideoReady(index) {
    return (event) => {
      videoPlayers.set(index, event.target);
      setVideoPlayers(videoPlayers);
    };
  }

  // Returns an onVideoPlay callback function scoped to the video index.
  // Video index is used for tracking currently played video.
  //
  // The returned function updates the currently playing video in the state
  // for carousel tracking, and pauses other videos upon playing the given video.
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

  // Pauses all of the videos.
  function pauseAllVideos() {
    for (let player of videoPlayers.values()) {
      player.pauseVideo();
    }
  }

  // Returns the list of classes that should be applied to a given video.
  //
  // If using the carousel, provides the classes used for animation,
  // either in or out, depending on if it is the current or previous
  // video, and from which direction it is coming from.
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

  // Creates the video player with the given id and tracking index.
  function createVideoPlayer(index, videoId) {
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

  // Callback for when the "previous video" button is pressed.
  // Updates state for animations in the carousel.
  // TODO: throttle how fast this can be pressed.
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

  // Callback for when the "next video" button is pressed.
  // Updates state for animations in the carousel.
  // TODO: throttle how fast this can be pressed.
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
        {createVideoPlayer(0, "InPCm0d0dCQ")}
        {createVideoPlayer(1, "9ci5j2Bz8KQ")}
        {createVideoPlayer(2, "egG4y99A4nA")}
      </Box>
      {getPostVideosButton()}
    </Box>
  );
}

const paragraphs = [
  messages.leadFollow,
  messages.connection,
  messages.versatile,
  messages.improvised,
  messages.competitive,
  messages.lindyHop,
];

// The What is West Coast Swing section renderer.
function WhatIsWcs() {
  return (
    <Box id={HTML_IDS.WHAT_IS_WCS} sx={whatIsWcsStyles.whatIsWcsStylesContainer}>
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
              {paragraphs.map((p) => (
                <BasicParagraphFormatter content={p} />
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
