import theme from "common/theme";

const eventCardStyles = {
  card: {
    padding: "24px",
    minWidth: "320px",
    borderRadius: "16px",
    backgroundColor: theme.palette.background.light,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  title: {
    fontSize: 20,
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  details: {
    display: "flex",
    fontSize: "16px",
    color: theme.palette.text.subtitle,
    marginTop: "8px",
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
