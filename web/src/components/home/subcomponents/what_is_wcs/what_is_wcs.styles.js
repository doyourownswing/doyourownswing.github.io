import theme from "common/theme";

const whatIsWcsStyles = {
  whatIsWcsStylesContainer: {
    padding: "24px",
    maxWidth: "1200px", // to match Upcoming Events
    margin: "auto",
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
    justifyContent: "space-around",
  },
  lineItems: {
    paddingLeft: "1.5rem",
  },
};

export default whatIsWcsStyles;
