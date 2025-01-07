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
    // Hacky, but need to make sure longer words fit, and that zooming doesn't make the line break
    minWidth: { md: "60rem" },
    alignItems: { xs: "center", sm: "unset" },
    flexDirection: { xs: "column", sm: "row" },
  },
  callToAction: {
    ...callToActionStyles,
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
    fontFamily: "Poppins",
    "&:hover": {
      boxShadow: "0 0 0.75rem 0.25rem rgba(216, 144, 255, .8)",
    },
    boxShadow: "0 0 0.5rem 0.25rem rgba(216, 144, 255, .6)",
  },
  secondaryButton: {
    fontFamily: "Poppins",
  },
  rightContent: {
    margin: { xs: "auto", md: "4rem 0 0" },
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
      // Makes the top part of the image opaque
      xs: "linear-gradient(to bottom, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 20%) 40%, rgb(0 0 0 / 100%) 100%)",
      // Makes the left side of the image opaque
      md: "linear-gradient(to left, rgb(0 0 0) 0%, rgb(0 0 0 / 0%) 100%)",
    },
    borderRadius: "1rem",
    width: { xs: "95vw", md: "unset" },
    pointerEvents: "none",
    userSelect: "none",
  },
  nytCalloutContainer: {
    display: { xs: "block", sm: "flex" },
    justifyContent: "center",
    padding: { xs: "0", md: "2rem 0" },
    // Since the image is already scooted up by 10vh, just move the callout up 5vh
    transform: { xs: "translateY(-5vh)", md: "unset" },
  },
  nytCallout: {
    display: "flex",
    alignItems: "center",
  },
  nytLogo: {
    // on small screens, the text turns into two lines so the image needs to be bigger
    height: { xs: "2.5rem", sm: "2rem" },
    paddingRight: "0.5rem",
    pointerEvents: "none",
    userSelect: "none",
  },
  nytCalloutText: {
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: "600",
    textWrap: "balance",
    letterSpacing: "0.025rem",
    color: theme.palette.text.linkLight,
    "&:hover": {
      color: theme.palette.text.linkLightHover,
    },
    textDecoration: "underline",
    textUnderlineOffset: "0.2rem",
  },
};

export default heroStyles;
