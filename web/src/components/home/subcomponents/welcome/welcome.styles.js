import theme from "../../../../common/theme";

const welcomeStyles = {
  splashPicture: {
    height: { xs: "20rem", sm: "28rem", md: "35rem" },
    width: "auto",
  },
  titleBox: {
    padding: { xs: "1rem", md: "8rem" },
  },
  title: {
    color: theme.palette.text.title,
    fontSize: { xs: "2.5rem", md: "4rem" },
    marginBottom: "1rem",
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: { xs: "1.5rem", md: "2.5rem" },
    marginBottom: "-.8rem",
  },
  startHereButton: {
    backgroundColor: theme.palette.text.textButton,
    color: theme.palette.text.textLight,
    marginTop: "2rem",
    borderRadius: ".75rem",
    width: "fit-content",
    padding: ".75rem 1.5rem",
    textTransform: "unset",
  },
};

export default welcomeStyles;
