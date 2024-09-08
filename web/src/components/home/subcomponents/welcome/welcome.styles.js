import theme from "common/theme";

const welcomeStyles = {
  sectionLayout: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    maxHeight: { xs: "40rem", sm: "50rem", md: "35rem" },
  },
  splashPicture: {
    objectFit: "cover",
    height: { xs: "20rem", sm: "25rem", md: "35rem" },
    width: "auto",
    aspectRatio: "3/2",
    overflow: "hidden",
  },
  titleBox: {
    padding: "8vw",
    alignItems: { xs: "center", md: "start" },
  },
  titleText: {
    display: "flex",
    flexDirection: "column",
    textWrap: "balance",
    alignItems: { xs: "center", md: "start" },
    scale: { xs: "1.3", md: "1" },
  },
  title: {
    marginLeft: "-2.5px",
  },
  startHereButton: {
    marginTop: "2rem",
    borderRadius: ".75rem",
    width: "fit-content",
    padding: ".75rem 1.5rem",
    textTransform: "unset",
    backgroundColor: theme.palette.button.purpleFilled,
  },
  mainDescription: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    margin: "1rem 0",
    textWrap: "balance",
    alignItems: { xs: "center", md: "start" },
    textAlign: { xs: "center", md: "left" },
  },
};

export default welcomeStyles;
