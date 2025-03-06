import theme from "common/theme";
import { SECTION_PADDING } from "common/constants";

const merchStyles = {
  sectionContainer: {
    padding: SECTION_PADDING,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  title: {
    ...theme.typography.title,
    color: theme.palette.text.titleNotQuiteBlack,
  },
  carouselContainer: {
    width: "min(80vw, 80rem)",
    overflow: "hidden",
    // Applies a mask to the left and right side of the carousel to fade the edges.
    // TODO: consider changing the values for different screen size breakpoints.
    maskImage:
      "linear-gradient(to right, rgb(0 0 0 / 60%) 0%, rgb(0 0 0 / 100%) 10%, rgb(0 0 0 / 100%) 90%, rgb(0 0 0 / 60%) 100%)",
  },
  carouselContent: {
    display: "flex",
  },
  image: {
    width: "20rem",
    pointerEvents: "none",
    userSelect: "none",
  },
  orderButton: {
    textTransform: "none",
    padding: "0.5rem 4rem",
    fontSize: "1.25rem",
    fontWeight: "500",
  },
  formCallout: {
    paddingTop: "1rem",
  },
  orderContainer: {
    paddingTop: "2rem",
  },
};

export default merchStyles;
