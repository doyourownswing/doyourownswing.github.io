import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const aboutStyles = {
  splashContainer: {
    backgroundColor: "black",
    position: "relative",
  },
  splash: {
    width: "100%",
    maxHeight: "max(32rem,80vh)",
    minHeight: "24rem",
    objectFit: "cover",
    // Makes the top part 20% opacity and bottom part 100% opacity linearly
    // The container's (splashContainer) background color is black which makes this work.
    mask: "linear-gradient(to bottom, rgb(0 0 0 / 20%) 0%, rgb(0 0 0 / 100%) 100%)",
  },
  splashTextOverlayContainer: {
    position: "absolute",
    top: "28%",
    width: "100vw",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontWeight: "500",
    textShadow: "0px 0px 8px black",
    fontSize: { xs: "clamp(2rem, 4vw, 4rem)" },
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    textShadow: "0px 0px 8px black",
    fontSize: { xs: "clamp(1rem, 1.5vw, 1.5rem)" },
  },
  contentContainer: {
    padding: SECTION_PADDING,
    backgroundColor: theme.palette.background.barelyPurple,
  },
  rileyHeadshot: {
    marginLeft: { xs: "unset", sm: "min(10vw, 8rem)" },
    marginBottom: { xs: "2rem", sm: "min(6vw, 4rem)" },
    float: { xs: "unset", sm: "right" },
    width: { xs: "100%", sm: "min(40vw, 34rem)" },
    maxHeight: "34rem",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "2rem",
    boxShadow: BOX_SHADOW,
  },
  rileySectionTitleContainer: {
    paddingBottom: "1.5rem",
    textAlign: { xs: "center", sm: "left" },
  },
  rileySectionTitle: {
    fontFamily: "Nunito",
    fontWeight: "600",
    color: theme.palette.text.title,
    // This overrides media queries, as opposed to defining it
    // like: `fontSize: "3rem"`, which only works for xs screen sizes
    fontSize: { xs: "3rem" },
  },
  rileySectionSubtitle: {
    color: theme.palette.text.subtitle,
  },
  paragraph: {
    marginBlockEnd: "2rem",
    lineHeight: "2rem",
  },
  text: {
    fontSize: "1.15rem",
  },
  textLink: {
    fontSize: "1.15rem",
    fontWeight: "500",
  },
};

export default aboutStyles;
