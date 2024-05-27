import theme from "../../../../common/theme";

const whoWeAreStyles = {
  whoWeAreContainer: {
    backgroundColor: theme.palette.background.darkPurple,
    color: theme.palette.text.titleLight,
  },
  whoWeAreContentContainer: { paddingTop: "24px", paddingBottom: "24px" },
  title: {
    color: theme.palette.text.titleLight,
  },
  subtitle: {
    color: theme.palette.text.subtitleLight,
  },
  header: {
    paddingTop: "24px",
    color: theme.palette.text.titleLight,
  },
  valueContainer: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px 40px",
    flex: 1,
  },
  valuesContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
};

export default whoWeAreStyles;
