import theme from "common/theme";

const callToActionStyles = {
  color: theme.palette.text.titleLight,
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: {
    xs: "calc(1rem + 3vw)",
    sm: "calc(0.75rem + 2.5vw)",
    lg: "3rem",
  },
  lineHeight: "1.25",
};

const heroStyles = {
  container: {
    backgroundColor: theme.palette.background.darkPurple,
  },
  contentContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: { xs: "6rem", md: "unset" },
    alignItems: { xs: "center", sm: "unset" },
    // to ensure the left side renders above the picture
    zIndex: "1",
  },
  pretitle: {
    color: theme.palette.text.lightPurple,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  callToActionContainer: {
    display: "flex",
    alignItems: "baseline",
    // Hacky, but need to make sure longer words fit, and that zooming doesn't make the line break
    minWidth: { md: "60rem" },
    alignItems: { xs: "center", sm: "unset" },
    flexDirection: { xs: "column", sm: "row" },
  },
  callToAction: {
    ...callToActionStyles,
  },
  adjectivesContainer: {
    // display: "inline",
  },
  adjective: {
    ...callToActionStyles,
    position: "relative",
  },
  descriptionContainer: {
    padding: "2rem 0",
    display: "grid",
    gap: { xs: "1rem", sm: "0.5rem" },
  },
  description: {
    color: theme.palette.text.bodyDark,
    textWrap: "balance",
    textAlign: { xs: "center", sm: "left" },
  },
  buttonsContainer: {
    marginTop: "2rem",
    gap: "2rem",
    display: "inline-flex",
    flexDirection: { xs: "column", sm: "row" },
  },
  primaryButton: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "600",
    // TODO: find out how to make this better / repeatable
    fontFamily: "Poppins",
    "&:hover": {
      boxShadow: "0 0 0.75rem 0.25rem rgba(216, 144, 255, .8)",
    },
    // TODO: canonicalize
    boxShadow: "0 0 0.5rem 0.25rem rgba(216, 144, 255, .6)",
  },
  secondaryButton: {
    fontFamily: "Poppins",
  },
  rightContent: {
    margin: { xs: "auto", md: "4rem 0" },
    display: "flex",
    alignItems: "center",
    flexShrink: "0.5",
  },
  imageContainer: {
    transform: {
      xs: "translateY(-10vh)",
      md: "translateX(calc(-30rem + 10vw))",
    },
  },
  picture: {
    maxWidth: "50rem",
    maskImage: {
      xs: "linear-gradient(to bottom, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 20%) 40%, rgb(0 0 0 / 100%) 100%)",
      md: "linear-gradient(to left, rgb(0 0 0) 0%, rgb(0 0 0 / 0%) 100%)",
    },
    borderRadius: "1rem",
    width: { xs: "95vw", md: "unset" },
  },
};

export default heroStyles;
