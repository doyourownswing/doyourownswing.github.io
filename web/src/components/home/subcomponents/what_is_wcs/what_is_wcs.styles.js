import theme from "common/theme";

const whatIsWcsStyles = {
  whatIsWcsStylesContainer: {
    padding: "24px",
    maxWidth: "1152px", // to match Upcoming Events. Halp me here plz
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
  videoContainer: {
    width: { xs: 0.8, md: "560px" },
    height: { xs: "15rem", md: "315px" },
    alignSelf: "center",
  },
  descriptionContainer: {
    flexDirection: "column",
  },
  lineItems: {
    paddingLeft: "1.5rem",
  },
};

export default whatIsWcsStyles;
