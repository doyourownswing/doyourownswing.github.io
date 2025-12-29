import theme from "@/common/theme";

const eventCardStyles = {
  card: {
    padding: "2rem 3rem",
  },
  contentContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    gap: { xs: "1rem", md: "4rem" },
  },
  contentLeftContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: "1rem", sm: "4rem" },
  },
  dateContainer: {
    alignContent: "center",
    display: { xs: "flex", sm: "block" },
    gap: "0.25rem",
    width: "5rem",
    flexShrink: "0",
  },
  month: {
    textAlign: { sm: "center" },
    fontWeight: "700",
    color: theme.palette.text.title,
  },
  date: {
    textAlign: { sm: "center" },
    fontSize: {
      sm: "2rem",
    },
    fontWeight: { xs: "700", sm: "500" },
    color: theme.palette.text.title,
  },
  detailsContainer: {},
  titleContainer: {
    paddingBottom: "1rem",
  },
  title: {},
  subtitle: {
    color: theme.palette.text.secondaryBody,
    fontWeight: "400",
  },
  eventDetail: {
    textIndent: { sm: "-2rem" },
    paddingLeft: { sm: "2rem" },
    paddingBottom: { xs: "1rem", sm: "0.5rem", md: "0.25rem" },
  },
  eventDetailName: {
    fontWeight: "bold",
  },
  eventDetailDescription: {},
  ctaContainer: {
    display: "flex",
    flexDirection: { xs: "row", md: "column" },
    justifyContent: { xs: "space-between", sm: "flex-start", md: "center" },
    gap: "0.5rem 1rem",
    width: { md: "10rem" },
    flexShrink: "0",
    paddingLeft: { sm: "9rem", md: "unset" },
    flexWrap: "wrap",
  },
  button: {
    textTransform: "none",
    flexShrink: "0",
    width: { xs: "100%", sm: "min(100%, 14rem)", md: "100%" },
  },
  addToCalItem: {
    padding: "0.5rem 2rem",
  },
};

export default eventCardStyles;
