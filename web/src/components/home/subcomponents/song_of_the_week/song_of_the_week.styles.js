import theme from "common/theme";
import { SECTION_PADDING } from "common/constants";

const songOfTheWeekStyles = {
  songOfTheWeekSection: {
    // backgroundColor: theme.palette.background.lightGray,
    backgroundImage: theme.palette.background.songOfTheWeek,
    padding: SECTION_PADDING,
  },
  songOfTheWeekFlexContainer: {
    xs: "column",
    md: "row",
  },
  title: {
    paddingBottom: "8px",
    // TODO: update the titles to be bold as per Vedant's suggestion
  },
  quoteContainer: {
    maxWidth: "400px",
    minWidth: { sm: "280px" },
    flex: 1,
    margin: "auto",
    paddingBottom: "24px",
  },
  quote: {
    color: theme.palette.text.secondaryBody2,
    paddingBottom: "16px",
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
