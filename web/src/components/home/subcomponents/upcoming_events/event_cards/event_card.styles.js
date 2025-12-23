import theme from "@/common/theme";
import { BOX_SHADOW } from "@/common/constants";

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
    fontWeight: 600,
    fontFamily: theme.typography.title.fontFamily,
  },
  details: {
    display: "flex",
    marginTop: "8px",
    alignItems: "center",
  },
  detailsText: {
    color: theme.palette.text.subtitle,
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
  },
  icon: {
    color: theme.palette.icon.default,
    marginRight: "8px",
    fontSize: "1.25rem",
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
    height: "3rem",
  },
};

export default eventCardStyles;
