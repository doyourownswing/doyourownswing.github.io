import theme from "common/theme";

const contactStyles = {
  contactContainer: {
    color: theme.palette.text.textLight,
    padding: "8px",
  },
  row: {
    display: "flex",
    marginTop: "8px",

    color: theme.palette.text.subtitleLight,
    "&:hover": {
      color: theme.palette.text.textLight,
    },
  },
  icon: {
    marginRight: "16px",
    fontSize: 18,
  },
};

export default contactStyles;
