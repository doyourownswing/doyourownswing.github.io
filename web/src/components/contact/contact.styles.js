import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const baseCard = {
  boxShadow: BOX_SHADOW,
  padding: "3rem 2rem 4rem",
  borderRadius: "3rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
};

const baseEmbellishment = {
  color: "white",
  opacity: "50%",
  fontSize: "8rem",
  pointerEvents: "none",
};

const baseLinkButton = {
  textTransform: "none",
  fontFamily: "Nunito",
  fontSize: "1.15rem",
  fontWeight: "700",
  borderRadius: "2rem",
  padding: "1rem 3rem",
};

const contactStyles = {
  container: {
    padding: SECTION_PADDING,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
  },
  embellishment: {
    ...baseEmbellishment,
  },
  embellishmentWithOpacity: (opacity) => {
    return { ...baseEmbellishment, opacity: opacity };
  },
  hook: {
    fontFamily: "Poppins",
    fontSize: "2rem",
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  emailCard: {
    ...baseCard,
    // TODO figure this color out
    backgroundColor: theme.palette.background.darkPurple,
  },
  emailCtaContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: "0.5rem",
    // Baseline makes it so the text is aligned with the button text.
    alignItems: { xs: "center", md: "baseline" },
  },
  emailCtaText: {
    color: "white",
    fontSize: "1.15rem",
  },
  email: {
    fontSize: "1.15rem",
    color: theme.palette.text.linkLight,
    textDecoration: "underline",
    "&:visited": {
      color: theme.palette.text.linkLight,
    },
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.text.linkLightHover,
    },
    "&:active": {
      color: theme.palette.text.linkLightHover,
    },
  },
  emailCopyButton: {
    textTransform: "none",
    // fontFamily: "Nunito",
    fontWeight: "700",
    // letterSpacing: "0.2px",
    fontSize: "1.05rem",
    padding: "0.25rem 1rem",
  },
  discordCard: {
    ...baseCard,
    // Discord blurple
    backgroundColor: "#5865F2",
  },
  facebookCard: {
    ...baseCard,
    backgroundColor: "#1877F2",
  },
  instagramCard: {
    ...baseCard,
    // Instagram Red
    // Cool link: https://about.instagram.com/brand/gradient?subpath=gradient
    backgroundColor: "#FF0069",
  },
  discordButton: {
    ...baseLinkButton,
    color: "#5865F2",
    backgroundColor: "#e4e7ff",
    "&:hover": {
      backgroundColor: "#cfd4ff",
    },
  },
  facebookButton: {
    ...baseLinkButton,
    color: "#1877F2",
    backgroundColor: "#e7f1ff",
    "&:hover": {
      backgroundColor: "#d4e6ff",
    },
  },
  instagramButton: {
    ...baseLinkButton,
    color: "#FF0069",
    backgroundColor: "#ffe6f0",
    "&:hover": {
      backgroundColor: "#ffb8d4",
    },
  },
};

export default contactStyles;
