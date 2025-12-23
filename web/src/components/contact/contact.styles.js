import { BOX_SHADOW, SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";
import { getRandomInt, getRandomSigmoidInt } from "@/utils/random";

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
  padding: "1rem 0rem",
  width: "min(100%, 20rem)",
};

const colors = {
  // Official discord blurple
  discord: "#5865F2",
  // Official dark blurple
  discordDarker: "#19175c",
  // DIY nearly white color for button
  discordOffWhite: "#e7f1ff",
  // DIY nearly white color for button hover
  discordOffWhiteDarker: "#cfd4ff",

  // Official facebook blue
  facebook: "#0766fe",
  // Official facebook navy for accent
  facebookDarker: "#003ab8",
  // DIY nearly white color for button
  facebookOffWhite: "#e7f1ff",
  // DIY nearly white color for button hover
  facebookdOffWhiteDarker: "#c5ddff",

  // Cool link: https://about.instagram.com/brand/gradient?subpath=gradient
  // Official instagram red color
  instagram: "#FF0069",
  // DIY darker instagram color for accent
  instagramDarker: "#D300C5",
  // DIY nearly white color for button
  instagramOffWhite: "#ffe6f0",
  // DIY nearly white color for button hover
  instagramOffWhiteDarker: "#ffb8d4",
};

function buildLinearGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1},  ${color2})`;
}

const splotchColors = [
  theme.palette.background.lessDarkPurple,
  theme.palette.background.lessDarkPurple,
  "#F40000",
  "#FFD600",
  "#FF7A00",
  "#FF0069",
  "#D300C5",
];

function buildSplotch(color) {
  let sizeVal = getRandomInt(20, 60);
  let cssSize = `min(${sizeVal}vw, ${sizeVal}rem)`;
  // Location of the splotch within the container.
  // Vertical distribution is linear, whereas horizontal should favor
  // the edges, hence the sigmoid / logistic random distribution.
  let top = getRandomInt(-20, 110);
  let left = getRandomSigmoidInt(-20, 110, 2);

  return {
    position: "absolute",
    filter: "blur(4rem)",
    top: `${top}%`,
    left: `${left}%`,
    width: cssSize,
    height: cssSize,
    borderRadius: `${sizeVal / 2}rem`,
    background: `radial-gradient(${color}30 10%, transparent 80%)`,
    filter: "blur(4rem)",
    animation: "wink-and-grow 8s ease-in-out",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
    animationDelay: `-${getRandomInt(1, 7)}s`,
  };
}

const contactStyles = {
  container: {
    padding: SECTION_PADDING,
    position: "relative",
    overflow: "clip",
    backgroundColor: theme.palette.background.barelyPurple,
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
    color: theme.palette.text.accentLink,
    textDecoration: "underline",
    fontWeight: "700",
    "&:visited": {
      color: theme.palette.text.accentLink,
    },
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.text.accentLinkHover,
    },
    "&:active": {
      color: theme.palette.text.accentLinkHover,
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
  splotches: [
    ...splotchColors.map((c) => buildSplotch(c)),
    ...splotchColors.map((c) => buildSplotch(c)),
  ],
};

export default contactStyles;
