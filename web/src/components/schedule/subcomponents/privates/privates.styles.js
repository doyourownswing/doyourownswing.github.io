import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const baseBackgroundColor = theme.palette.background.darkPurple;
const darkBackgroundColor = theme.palette.background.darkerPurple;

const privateStyles = {
  container: {
    background: `linear-gradient(180deg, ${baseBackgroundColor} 0%, ${darkBackgroundColor} 10%, ${baseBackgroundColor} 80%)`,
    padding: SECTION_PADDING,
  },
  contentContainer: {
    display: "grid",
    gap: "2rem",
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
    width: "24rem",
    textTransform: "none",
    borderRadius: "4rem",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    fontWeight: "600",
    boxShadow: "0 0 2rem black",
    background: "linear-gradient(to right, #55087f, #9e52ff)",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0rem 0 2rem #9e52ff33, " + "0rem 0 4rem #9e52ff66",
    },
  },
  secondContent: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: { xs: "4rem", md: "0rem" },
  },
  imageContainer: {
    width: { xs: "100%", md: "min(40vw, 28rem)" },
    height: { xs: "max(32rem, 50vh, 60vw)", md: "unset" },
    overflow: "clip",
    filter: "grayscale(100%)",
    borderRadius: "2rem",
    mask:
      "linear-gradient(to bottom, transparent 0%, #fff 30% 90%, transparent 100%), " +
      "linear-gradient(to left, transparent 0%, #fff 10% 90%, transparent 100%)",
    maskComposite: "intersect",
    opacity: "0.6",
  },
  image: {
    width: "100%",
  },
  testimonialContainer: {
    width: { xs: "100%", md: "min(40vw, 28rem)" },
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    // Needed for the quote mark in the background
    position: "relative",
    // Tune these values based on the length of the testimonials
    minHeight: {
      xs: "calc(40rem - 20vw)",
      md: "calc(42rem - 10vw)",
      lg: "unset",
    },
  },
  embellishment: {
    color: "white",
    position: "absolute",
    top: { xs: "-20%", md: "0%" },
    fontSize: "40rem",
    fontFamily: "Poppins",
    opacity: "0.02",
    transform: "rotateZ(15deg)",
  },
  testimonialTitle: {
    color: theme.palette.text.title,
    fontWeight: "600",
    paddingTop: {
      sm: "2rem",
      md: "4rem",
    },
  },
  testimonialTextContainer: {
    position: "relative",
    width: "100%",
    height: {
      // Tune these values based on the length of the testimonials
      xs: "22rem",
      sm: "15rem",
      md: "24rem",
    },
  },
  testimonialText: {
    color: theme.palette.text.quote,
    padding: "2rem 1rem",
    letterSpacing: "0.4px",
    lineHeight: "1.8",
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: "800",
    position: "absolute",
  },
  testimonialNavContainer: {
    display: "inline-flex",
    paddingBottom: "4rem",
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
    opacity: "0.7",
    height: "0.5rem",
  },
};

export default privateStyles;
