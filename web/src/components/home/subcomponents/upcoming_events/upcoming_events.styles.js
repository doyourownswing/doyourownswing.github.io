import theme from "common/theme";
import { SECTION_PADDING } from "common/constants";

const upcomingEventsStyles = {
  title: {
    paddingBottom: "8px",
  },
  twoEventRenderer: {
    paddingTop: "24px",
    justifyContent: "space-between",
    gap: "16px",
    maxWidth: "1000px",
    margin: "auto",
    display: { xs: "none", md: "flex" },
  },
  carouselEventRenderer: {
    paddingTop: "24px",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    display: {
      xs: "flex",
      md: "none",
    },
  },
  carouselStepper: {
    width: { xs: "100%", sm: "450px" },
    padding: "8px 0px 0px 0px",
    backgroundColor: "transparent",
  },
  upcomingEventsContainer: {
    backgroundImage: theme.palette.background.upcomingEvents,
    padding: SECTION_PADDING,
  },
  noUpcomingEventsContainer: {
    padding: "24px 0px",
  },
};

export default upcomingEventsStyles;
