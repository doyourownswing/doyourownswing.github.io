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
    paddingBottom: "4rem",
  },
  twoColumnContent: {
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: "space-around",
    justifySelf: "center",
    gap: "8rem",
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
};

export default whatIsWcsStyles;
