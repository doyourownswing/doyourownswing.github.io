import {
  BOX_SHADOW_2,
  BOX_SHADOW_GLOW,
  BOX_SHADOW_TOP,
  SECTION_PADDING,
} from "@/common/constants";
import theme from "@/common/theme";

const baseCard = {
  padding: { xs: "2rem", lg: "3rem" },
  borderRadius: "2rem",
  boxShadow: { xs: BOX_SHADOW_2, md: BOX_SHADOW_TOP },
};

const boxShadowWithGlow = {
  xs: [BOX_SHADOW_GLOW, BOX_SHADOW_2].join(","),
  md: [BOX_SHADOW_GLOW, BOX_SHADOW_TOP].join(","),
};

const baseLesserCard = {
  ...baseCard,
  height: { md: "28rem", lg: "22rem" },
  border: "1px solid " + theme.palette.border.gray,
};

const pricingStyles = {
  container: {
    background: "linear-gradient(180deg, #fdf8ff 0%, #f3f4fe 5%)",
    padding: SECTION_PADDING,
  },
  subtitle: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: theme.palette.text.title,
    paddingBottom: ".5rem",
  },
  title: {
    ...theme.typography.title,
    lineHeight: "1",
  },
  subSubTitle: {
    paddingBottom: { xs: "1rem", md: "2rem" },
  },
  cardsContainer: {
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
  },
  lesserCardContainer: {
    alignContent: "center",
  },
  greaterCardContainer: {
    // Make sure visually this card is on top.
    zIndex: "2",
  },
  lesserCardLeft: {
    ...baseLesserCard,
    borderRadius: { xs: "2rem 2rem 0 0", md: "2rem 0 0 2rem" },
    // Hide border slightly under the main card.
    transform: { xs: "translateY(0.5rem)", md: "translateX(1px)" },
  },
  lesserCardRight: {
    ...baseLesserCard,
    borderRadius: { xs: "0 0 2rem 2rem", md: "0 2rem 2rem 0" },
    // Hide border slightly under the main card.
    transform: { xs: "translateY(-0.5rem)", md: "translateX(-1px)" },
  },
  greaterCard: {
    ...baseCard,
    height: { md: "32rem", lg: "26rem" },
    borderRadius: "2rem",
    border: "2px solid " + theme.palette.border.emphasis,
    boxShadow: boxShadowWithGlow,
  },
  divider: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  cardTitle: {
    paddingBottom: "1rem",
  },
  costContainer: {
    padding: "2rem 0",
  },
  cost: {
    fontSize: "2rem",
    fontFamily: "Poppins",
    fontWeight: "500",
    letterSpacing: "-2px",
  },
  costUnit: {
    fontFamily: "Poppins",
    fontWeight: "400",
    color: theme.palette.text.subtitle,
  },
  cardContentSubContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  cardContentFinePrintContainer: {
    textAlign: "center",
  },
  sponsorTitleContainer: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "0.5rem", lg: "1rem" },
    paddingBottom: "1rem",
  },
  sponsorTitleText: {
    color: theme.palette.text.title,
    fontFamily: "Poppins",
    fontWeight: "500",
  },
  finePrint: {
    fontSize: "0.8rem",
  },
};

export default pricingStyles;
