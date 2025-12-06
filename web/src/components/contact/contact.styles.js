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

const colors = {
  // Official discord blurple
  discord: "#5865F2",
  // DIY darker discord color for accent
  discordDarker: "#3141ec",
  // DIY nearly white color for button
  discordOffWhite: "#e7f1ff",
  // DIY nearly white color for button hover
  discordOffWhiteDarker: "#cfd4ff",

  // Official facebook blue
  facebook: "#1877F2",
  // DIY darker facebook blue for accent
  facebookDarker: "#005dd7",
  // DIY nearly white color for button
  facebookOffWhite: "#e7f1ff",
  // DIY nearly white color for button hover
  facebookdOffWhiteDarker: "#c5ddff",

  // Cool link: https://about.instagram.com/brand/gradient?subpath=gradient
  // Official instagram red color
  instagram: "#FF0069",
  // DIY darker instagram color for accent
  instagramDarker: "#d40259",
  // DIY nearly white color for button
  instagramOffWhite: "#ffe6f0",
  // DIY nearly white color for button hover
  instagramOffWhiteDarker: "#ffb8d4",
};

function buildLinearGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1},  ${color2})`;
}

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
    background: buildLinearGradient(
      theme.palette.background.lessDarkPurple,
      theme.palette.background.darkPurple
    ),
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
    fontWeight: "700",
    fontSize: "1.05rem",
    padding: "0.25rem 1rem",
  },
  discordCard: {
    ...baseCard,
    background: buildLinearGradient(colors.discord, colors.discordDarker),
  },
  facebookCard: {
    ...baseCard,
    background: buildLinearGradient(colors.facebook, colors.facebookDarker),
  },
  instagramCard: {
    ...baseCard,
    background: buildLinearGradient(colors.instagram, colors.instagramDarker),
  },
  discordButton: {
    ...baseLinkButton,
    color: colors.discord,
    backgroundColor: colors.discordOffWhite,
    "&:hover": {
      color: colors.discordDarker,
      backgroundColor: colors.discordOffWhiteDarker,
    },
  },
  facebookButton: {
    ...baseLinkButton,
    color: colors.facebook,
    backgroundColor: colors.facebookOffWhite,
    "&:hover": {
      color: colors.facebookDarker,
      backgroundColor: colors.facebookdOffWhiteDarker,
    },
  },
  instagramButton: {
    ...baseLinkButton,
    color: colors.instagram,
    backgroundColor: colors.instagramOffWhite,
    "&:hover": {
      color: colors.instagramDarker,
      backgroundColor: colors.instagramOffWhiteDarker,
    },
  },
};

export default contactStyles;
