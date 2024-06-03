import theme from "common/theme";

const locationStyles = {
  locationContainer: {
    color: theme.palette.text.textLight,
    marginTop: "8px",
  },
  linkContainer: {
    marginTop: "8px",
  },
  address: {
    color: theme.palette.text.subtitleLight,
    "&:hover": {
      color: theme.palette.text.textLight,
    },
  },
};

export default locationStyles;
