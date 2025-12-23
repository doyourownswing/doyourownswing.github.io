import theme from "@/common/theme";

const timelineStyles = {
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
  },
  section: {
    backgroundColor: theme.palette.background.light,
    width: "fit-content",
    display: "flex",
    alignContent: "center",
    borderRadius: "1rem",
    border: "1px solid #dddddd",
    margin: "2rem",
  },
  leftContent: {
    textAlign: "right",
  },
  oppositeContent: {
    textAlign: "left",
  },
};

export default timelineStyles;
