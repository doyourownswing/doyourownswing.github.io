import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import privateStyles from "./privates.styles";
import theme from "@/common/theme";
import RileyJanani from "@/assets/images/riley-janani.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useState } from "react";
import messages from "./messages";
import "./privates.css";

const privatesLink = "https://calendly.com/rileywcs";

function TestimonialNavIndicator(props) {
  let { num, activeIndex } = props;

  let indicators = [];
  for (var i = 0; i < num; i++) {
    var style = privateStyles.baseTestimonialCarouselIndicator;
    if (activeIndex === i) {
      style = { ...style, ...privateStyles.activeTestimonialCarouselIndicator };
    }

    indicators.push(<CircleIcon fontSize="x-small" sx={style} />);
  }

  return (
    <Box sx={privateStyles.testimonialCarouselIndicatorContainer}>
      {indicators}
    </Box>
  );
}

function TestimonialNav(props) {
  return (
    <Box sx={privateStyles.testimonialNavContainer}>
      <IconButton onClick={props.onClickLeft}>
        <ChevronLeftIcon sx={privateStyles.testimonialNavIcons} />
      </IconButton>
      <TestimonialNavIndicator
        num={props.numTestimonials}
        activeIndex={props.currentIndex}
      />
      <IconButton onClick={props.onClickRight}>
        <ChevronRightIcon sx={privateStyles.testimonialNavIcons} />
      </IconButton>
    </Box>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState({
    current: 0,
    previous: null,
    direction: null,
  });

  function onClickLeft() {
    let newCurrentIndex =
      (currentIndex.current - 1 + messages.testimonials.length) %
      messages.testimonials.length;

    setCurrentIndex({
      previous: currentIndex.current,
      current: newCurrentIndex,
      direction: "left",
    });
  }

  function onClickRight() {
    let newCurrentIndex =
      (currentIndex.current + 1 + messages.testimonials.length) %
      messages.testimonials.length;

    setCurrentIndex({
      previous: currentIndex.current,
      current: newCurrentIndex,
      direction: "right",
    });
  }

  // Returns the list of classes that should be applied to a given video.
  //
  // If using the carousel, provides the classes used for animation,
  // either in or out, depending on if it is the current or previous
  // video, and from which direction it is coming from.
  function getTestimonialClasses(index) {
    let classes = [];

    if (currentIndex.previous === index) {
      classes.push("previous");
      classes.push("out-from-" + currentIndex.direction);
    } else if (currentIndex.current === index) {
      classes.push("current");
      classes.push("in-from-" + currentIndex.direction);
    } else {
      classes.push("hidden");
    }

    return classes;
  }

  let longestTestimonial = messages.testimonials.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  // This element will be rendered but completely transparent
  // as a method of defining the container height dynamically.
  let shadowText = (
    <Typography
      sx={{
        ...privateStyles.testimonialText,
        ...privateStyles.shadowText,
      }}
    >
      {longestTestimonial}
    </Typography>
  );

  return (
    <Box sx={privateStyles.testimonialContainer}>
      <FormatQuoteIcon sx={privateStyles.embellishment} />
      <Typography variant="h5" sx={privateStyles.testimonialTitle}>
        {messages.testimonialsTitle}
      </Typography>
      <Box sx={privateStyles.testimonialTextContainer}>
        {shadowText}
        {messages.testimonials.map((testimonial, i) => (
          <Typography
            key={i}
            sx={privateStyles.testimonialText}
            className={getTestimonialClasses(i)}
          >
            {testimonial}
          </Typography>
        ))}
      </Box>
      <TestimonialNav
        numTestimonials={messages.testimonials.length}
        currentIndex={currentIndex.current}
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </Box>
  );
}

function Privates() {
  return (
    <Box sx={privateStyles.container}>
      <Container sx={privateStyles.firstContentContainer}>
        <Box sx={privateStyles.mainContent}>
          <Typography variant="h6" sx={privateStyles.subtitle}>
            {messages.subtitle}
          </Typography>
          <Typography variant="h3" sx={privateStyles.title}>
            {messages.title}
          </Typography>
          <Typography
            variant="subtitle"
            align="center"
            sx={privateStyles.subSubTitle}
          >
            {messages.subSubTitle}
          </Typography>
          <Button
            variant="contained"
            color={theme.palette.buttonPurple.name}
            sx={privateStyles.button}
            size="large"
            href={privatesLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.buttonCta}
          </Button>
        </Box>
      </Container>
      <Container sx={privateStyles.secondContentContainer}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={privateStyles.secondContent}
        >
          <Testimonials></Testimonials>
          <Box sx={privateStyles.imageContainer}>
            <Box component="img" src={RileyJanani} sx={privateStyles.image} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Privates;
