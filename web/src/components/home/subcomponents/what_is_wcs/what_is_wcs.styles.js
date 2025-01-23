import theme from "common/theme";
import { SECTION_PADDING } from "common/constants";

const whatIsWcsStyles = {
  whatIsWcsStylesContainer: {
    padding: SECTION_PADDING,
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    ...theme.typography.title,
    color: theme.palette.text.title,
    paddingBottom: { xs: "2rem", lg: "4rem" },
  },
  twoColumnContent: {
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: "space-around",
    justifySelf: "center",
    gap: { xs: "4rem", lg: "8rem" },
    width: "100%",
  },
  descriptionContainer: {
    flexDirection: "column",
  },
  lineItems: {
    paddingLeft: "1.5rem",
  },
  pointHook: {
    fontSize: "1rem",
    fontWeight: "700",
    fontFamily: "Poppins",
  },
  pointContent: {
    fontSize: "1rem",
  },
  videoContainer: {
    display: {
      xs: "flex",
      lg: "block",
    },
    flexDirection: "column",
    alignContent: "start",
  },
  videoPlayers: {
    display: {
      xs: "flex",
      lg: "grid",
    },
    gap: { xs: "0", lg: "2rem" },
    margin: "auto",
    position: { xs: "relative", lg: "unset" },
  },
  buttonContainer: {
    display: "inline-flex",
    margin: "auto",
    gap: { xs: "20vw", md: "72vw" },
    transform: { xs: "unset", md: "translateY(calc(-20vw - 2rem))" },
    zIndex: 1,
    paddingTop: { xs: "1rem", md: "unset" },
  },
  button: {
    scale: { md: "2", lg: "unset" },
  },
};

export default whatIsWcsStyles;
