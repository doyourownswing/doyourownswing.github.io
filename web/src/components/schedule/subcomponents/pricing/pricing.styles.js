import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const baseCard = {
  padding: { xs: "2rem", lg: "3rem" },
  borderRadius: "2rem",
  boxShadow: "unset",
};

const baseLesserCard = {
  ...baseCard,
  height: { md: "26rem", lg: "22rem" },
  border: "1px solid " + theme.palette.border.gray,
};

const pricingStyles = {
  container: {
    // background:
    //   "linear-gradient(to bottom, #fdf8ff 0%, #fdf8ff 20%, white 20%)",
    background: "#f3f4fe",
    padding: SECTION_PADDING,
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
    borderRadius: "2rem 0 0 2rem",
    // Hide border slightly under the main card.
    transform: "translateX(1px)",
  },
  lesserCardRight: {
    ...baseLesserCard,
    borderRadius: "0 2rem 2rem 0",
    // Hide border slightly under the main card.
    transform: "translateX(-1px)",
  },
  greaterCard: {
    ...baseCard,
    height: { md: "30rem", lg: "26rem" },
    borderRadius: "2rem",
    border: "2px solid " + theme.palette.border.emphasis,
  },
  divider: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  title: {
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
    // color: "#4f5bff",
  },
  costUnit: {
    fontFamily: "Poppins",
    fontWeight: "400",
  },
  cardContentSubContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  cardContentFinePrintContainer: {
    // display: "flex",
    // flexDirection: "column",
    // gap: "1rem",
    alignText: "center",
  },
  finePrint: {
    fontSize: "0.8rem",
  },
};

export default pricingStyles;
