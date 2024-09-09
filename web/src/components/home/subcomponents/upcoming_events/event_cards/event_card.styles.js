import theme from "common/theme";
import { BOX_SHADOW } from "common/constants";

const eventCardStyles = {
  card: {
    padding: "24px",
    minWidth: {
      xs: "240px",
      sm: "320px",
    },
    borderRadius: "16px",
    backgroundColor: theme.palette.background.light,
    boxShadow: BOX_SHADOW,
  },
  title: {
    fontSize: 20,
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  details: {
    display: "flex",
    marginTop: "8px",
  },
  detailsText: {
    color: theme.palette.text.subtitle,
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
  },
  icon: {
    color: "#320067",
    marginRight: "8px",
  },
  divider: {
    margin: "24px 0 24px 0",
  },
  priceLabel: {
    fontSize: "16px",
    color: theme.palette.text.subtitle,
  },
  price: {
    fontSize: "20px",
    fontWeight: "600",
    color: theme.palette.text.primary,
  },
  footerBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundImage: "linear-gradient(#8637DA, #6400CF)",
    width: "136px",
    height: "48px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    borderRadius: "8px",
  },
};

export default eventCardStyles;
