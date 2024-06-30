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
    color: theme.palette.text.title,
    paddingBottom: "24px",
  },
  twoColumnContent: {
    flexDirection: { xs: "column-reverse", md: "row" },
    justifyContent: "space-around",
    justifySelf: "center",
    gap: "48px",
  },
  descriptionContainer: {
    flexDirection: "column",
  },
  lineItems: {
    paddingLeft: "1.5rem",
  },
};

export default whatIsWcsStyles;
