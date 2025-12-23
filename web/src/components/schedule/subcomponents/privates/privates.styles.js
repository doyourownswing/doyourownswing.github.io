import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const baseBackgroundColor = theme.palette.background.darkPurple;
const darkBackgroundColor = theme.palette.background.darkerPurple;

const privateStyles = {
  container: {
    background: `linear-gradient(180deg, ${baseBackgroundColor} 0%, ${darkBackgroundColor} 10%, ${baseBackgroundColor} 80%)`,
    padding: SECTION_PADDING,
  },
  firstContentContainer: {
    display: "grid",
    gap: "2rem",
  },
  secondContentContainer: {
    paddingTop: { xs: "0px", md: "8rem" },
  },
  subtitle: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: theme.palette.text.title,
    textAlign: "center",
    paddingBottom: ".5rem",
  },
  title: {
    ...theme.typography.title,
    lineHeight: "1",
    color: theme.palette.text.titleLight,
    textAlign: "center",
    fontWeight: "500",
    textShadow: `0px 0px 8px ${theme.palette.text.glow}`,
  },
  subSubTitle: {
    paddingBottom: { xs: "1rem", md: "2rem" },
    textAlign: "center",
    color: theme.palette.text.subtitleLight,
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "2rem",
    height: "4rem",
    width: "min(80vw, 24rem)",
    textTransform: "none",
    borderRadius: "4rem",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    fontWeight: "600",
    boxShadow: "0rem 0 2rem #9e52ff33, 0rem 0 4rem #9e52ff66",
    background: "linear-gradient(to right, #55087f, #9e52ff)",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0rem 0 2rem #9e52ff55, 0rem 0 4rem #9e52ff88",
    },
  },
  secondContent: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: { xs: "4rem", md: "0rem" },
  },
  imageContainer: {
    width: { xs: "90vw", md: "40rem" },
    transform: { xs: "translateY(6rem)", md: "translateX(-10rem)" },
    scale: { md: "1.2" },
  },
  image: {
    width: { xs: "100%", md: "calc(100% + 10rem)" },
    borderRadius: "2rem",
    mask: {
      xs: "linear-gradient(to top, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 25%) 40%, rgb(0 0 0) 100%)",
      md: "linear-gradient(to right, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 25%) 40%, rgb(0 0 0) 100%)",
    },
  },
  testimonialContainer: {
    width: { xs: "100%", md: "32rem" },
    display: "flex",
    flexShrink: "0",
    zIndex: "1",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    // Needed for the quote mark in the background
    position: "relative",
    // On small screens, the quote icon takes up a lot of horizontal
    // space because it's rotated
    overflow: "clip",
  },
  embellishment: {
    color: "white",
    position: "absolute",
    top: { xs: "-20%", md: "0%" },
    fontSize: "40rem",
    fontFamily: "Poppins",
    opacity: { xs: "0.05", md: "0.03" },
    transform: "rotateZ(15deg)",
  },
  testimonialTitle: {
    color: theme.palette.text.title,
    textAlign: "center",
    fontWeight: "600",
    paddingTop: {
      sm: "2rem",
      md: "4rem",
    },
  },
  testimonialTextContainer: {
    position: "relative",
    width: "100%",
  },
  testimonialText: {
    color: theme.palette.text.quote,
    // Super subtle darkening to make the text easier to read
    textShadow: "0px 0px 4px black",
    padding: "2rem 1rem",
    letterSpacing: "0.4px",
    lineHeight: "1.5",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "700",
    position: "absolute",
    top: "0",
  },
  // Additional styles applied to the shadow testimonial text.
  // That text is used to set the height of the container.
  shadowText: {
    position: "relative",
    opacity: "0",
  },
  testimonialNavContainer: {
    display: "inline-flex",
    paddingBottom: "4rem",
    gap: "2rem",
  },
  testimonialNavIcons: {
    color: "white",
  },
  testimonialCarouselIndicatorContainer: {
    alignContent: "center",
  },
  baseTestimonialCarouselIndicator: {
    color: "white",
    opacity: "0.5",
    height: "0.4rem",
    transition: "0.4s",
  },
  activeTestimonialCarouselIndicator: {
    opacity: "0.8",
    height: "0.5rem",
  },
};

export default privateStyles;
