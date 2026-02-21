import { BOX_SHADOW, SECTION_PADDING } from "@/common/constants";
import SocialsColors from "@/common/socials_colors";
import theme from "@/common/theme";
import { alpha } from "@mui/material";

const imageDiameter = "6rem";
const transitionTime = "0.2s";

const baseSocialIcon = {
  fontSize: "2rem",
  transition: transitionTime,
  "&:hover": {
    scale: "1.1",
  },
};

const baseLinkContainer = {
  borderRadius: "2rem",
  background: alpha("#e9e9e9", 0.8),
  boxShadow: BOX_SHADOW,
  transition: transitionTime,
  "&:hover": {
    transform: "translateY(-2px)",
    background: "#e9e9e9",
  },
};

const singleLinkContainerMixin = {
  padding: "0.75rem 1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const linksStyles = {
  container: {
    minHeight: "100vh",
    background: `linear-gradient(to bottom, ${theme.palette.background.lessDarkPurple}, ${theme.palette.background.darkPurple})`,
  },
  contentContainer: {
    padding: {
      xs: "0",
      sm: "2rem",
      md: "4rem",
    },
  },
  cardContainer: {
    maxWidth: { xs: "36rem" },
    padding: "0",
  },
  card: {
    boxShadow: "#00000044 0px 2px 16px 0px;",

    backgroundColor: theme.palette.background.palePurple,
    backgroundImage:
      `radial-gradient(circle at top right, ${alpha(
        theme.palette.background.lightPurple,
        0.6
      )}, transparent 40%),` +
      `radial-gradient(circle at bottom left, ${alpha(
        theme.palette.background.lightPurple,
        0.6
      )}, transparent 40%)`,
  },
  cardContent: { display: "grid", gap: "2rem" },
  topContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  logoAvatar: {
    height: imageDiameter,
    width: imageDiameter,
    boxShadow: "0 0 1rem black",
  },
  logoImage: {
    height: imageDiameter,
    width: imageDiameter,
    backgroundColor: "black",
  },
  titleTextContainer: {
    display: "inline-grid",
    gap: "0.25rem",
  },
  title: {
    textAlign: "center",
    color: theme.palette.text.title2,
    fontWeight: "600",
  },
  subtitle: {
    textAlign: "center",
    lineHeight: "1.25rem",
    color: theme.palette.text.secondaryBody,
  },
  socialsContainer: {
    display: "flex",
  },
  socialsIconContainer: {
    width: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  discordIcon: {
    ...baseSocialIcon,
    color: SocialsColors.discord,
  },
  facebookIcon: {
    ...baseSocialIcon,
    color: SocialsColors.facebook,
  },
  instagramIcon: {
    ...baseSocialIcon,
    color: SocialsColors.instagram,
  },
  emailIcon: {
    ...baseSocialIcon,
    color: theme.palette.icon.secondary,
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  linkContainer: {
    ...baseLinkContainer,
    ...singleLinkContainerMixin,
  },
  paymentLinkContainer: {
    ...baseLinkContainer,
    ...singleLinkContainerMixin,
    border: `1px solid ${theme.palette.border.emphasis}`,
    "&:hover": {
      background: alpha("#FFFFFF", 0.4),
    },
  },
  accordionLinkContainer: {
    ...baseLinkContainer,
    "&:first-of-type": {
      borderRadius: "2rem",
    },
  },
  accordionLinkContainerExpanded: {
    ...baseLinkContainer,
    "&:first-of-type": {
      borderRadius: "2rem",
    },
    "&:hover": {},
  },
  accordionLinkSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkBoxSide: {
    height: "1.5rem",
    width: "1.5rem",
  },
  linkBoxText: {
    fontWeight: "600",
    color: theme.palette.text.titleNotQuiteBlack,
    textAlign: "center",
    lineHeight: "1",
  },
  accordionLinkBoxText: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    height: "100%",
    width: "100%",
  },
  moneyIcon: {
    color: "green",
  },
  gavelIcon: {
    color: "brown",
  },
  storeIcon: {
    color: "purple",
  },
  paymentOptionsContainer: {
    padding: "0rem 1rem",
    gap: "0.5rem",
    display: "flex",
    flexDirection: "column",
  },
};

export default linksStyles;
