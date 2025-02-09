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
    flexDirection: { xs: "column", md: "row" },
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
      md: "block",
    },
    flexDirection: { xs: "column", sm: "row", md: "column" },
    alignContent: "start",
  },
  videoPlayers: {
    display: {
      xs: "flex",
      md: "grid",
    },
    gap: { xs: "0", md: "2rem" },
    margin: "auto",
    position: { xs: "relative", md: "unset" },
  },
  buttonContainerAround: {
    margin: "auto",
  },
  buttonsContainerBelow: {
    margin: "auto",
    display: "flex",
    gap: "20vw",
    paddingTop: "1rem",
  },
  button: {
    scale: { sm: "2", lg: "unset" },
  },
};

export default whatIsWcsStyles;
