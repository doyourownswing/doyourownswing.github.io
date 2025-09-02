import { BOX_SHADOW, BOX_SHADOW_2, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const baseButton = {
  textTransform: "none",
  width: "8rem",
  fontFamily: "Poppins",
};

function buildButtonStyles(color) {
  return {
    ...baseButton,
    boxShadow: "4px 4px " + color,
    "&:hover": {
      boxShadow: "2px 2px " + color,
    },
  };
}

const paymentStyles = {
  container: {
    background: "linear-gradient(180deg, #f3f4fe 0%, #f9f9f9 5%)",
    padding: SECTION_PADDING,
  },
  titleContainer: {
    paddingBottom: "2rem",
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
    background: "radial-gradient(#5a7db561 0%, #5a7db561 30%, transparent 50%)",
    display: "inline-grid",
    gap: "2rem",
  },
  card: {
    height: "100%",
    position: "relative",
    overflow: "unset",
  },
  cardContent: {
    gap: "1.5rem",
    textAlign: "center",
    alignItems: "center",
  },
  buildButtonStyles,
  logo: {
    height: "4rem",
    padding: "0.5rem",
  },
  cashTitle: {
    color: "green", //todo move into theme maybe
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  embellishment: {
    position: "absolute",
    top: "1rem",
    right: "-0.5rem",
    color: theme.palette.text.title,
    backgroundColor: theme.palette.badge.backgroundColor,
    padding: "0.4rem 1.5rem",
    borderRadius: "2rem",
    border: "1px solid purple",
    boxShadow: theme.palette.badge.boxShadow,
    fontFamily: "Poppins",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  qrCode: {
    height: "8rem",
  },
  footer: {
    fontWeight: "700",
    textWrap: "balance",
  },
  dollarSign: {
    fontSize: "8rem",
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "1",
    color: "green",
    opacity: "20%",
  },
};

export default paymentStyles;
