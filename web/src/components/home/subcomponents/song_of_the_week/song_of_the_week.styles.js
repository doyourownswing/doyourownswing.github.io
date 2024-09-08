import theme from "common/theme";
import { SECTION_PADDING } from "common/constants";

const songOfTheWeekStyles = {
  songOfTheWeekSection: {
    backgroundColor: theme.palette.background.lightGray,
    padding: SECTION_PADDING,
  },
  songOfTheWeekFlexContainer: {
    direction: {
      xs: "column",
      md: "row",
    },
    style: {
      paddingBottom: "32px",
      gap: {
        xs: "24px",
        md: "0px",
      },
    },
  },
  title: {
    paddingBottom: "8px",
    // TODO: update the titles to be bold as per Vedant's suggestion
  },
  leftContainer: {
    maxWidth: "400px",
    minWidth: { sm: "280px" },
    flex: 1,
    margin: { xs: "auto", md: "unset" },
  },
  quoteContainer: {
    // move to its own file?
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
  quote: {
    color: theme.palette.text.secondaryBody,
  },
  songCardContainer: {
    flex: 2,
    display: "flex",
    paddingRight: "24px",
  },
  songCard: {
    margin: "auto",
    marginRight: { md: 0 },
  },
};

export default songOfTheWeekStyles;
