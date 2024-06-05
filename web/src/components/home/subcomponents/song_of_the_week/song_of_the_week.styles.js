import theme from "common/theme";

const songOfTheWeekStyles = {
  songOfTheWeekSection: {
    backgroundColor: theme.palette.background.lightGray,
    padding: "24px",
  },
  songOfTheWeekContainer: {
    display: "flex",
    padding: "24px 0px",
    flexWrap: "wrap",
  },
  title: {
    paddingBottom: "8px",
    fontWeight: "700",
  },
  quoteContainer: {
    maxWidth: "400px",
    minWidth: "400px",
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
