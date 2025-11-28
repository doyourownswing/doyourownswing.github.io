import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const baseCard = {
  boxShadow: BOX_SHADOW,
  padding: "4rem",
  borderRadius: "3rem",
  position: "relative",
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
    position: "absolute",
    color: "white",
    opacity: "15%",
    right: "20%",
    fontSize: "8rem",
  },
  hook: {
    fontFamily: "Poppins",
    fontSize: "2rem",
    fontWeight: "600",
    color: "white",
  },
  emailCard: {
    ...baseCard,
    // TODO figure this color out
    backgroundColor: theme.palette.background.darkPurple,
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
};

export default contactStyles;
