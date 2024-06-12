import theme from "common/theme";

const songOfTheWeekStyles = {
  songOfTheWeekSection: {
    backgroundColor: theme.palette.background.lightGray,
    padding: "24px",
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
    color: theme.palette.text.secondaryBody,
    paddingBottom: "16px",
  },
  songCardContainer: {
    flex: 2,
    display: "flex",
    paddingRight: "24px",
  },
  songCard: {
    margin: "auto",
  },
};

export default songOfTheWeekStyles;
