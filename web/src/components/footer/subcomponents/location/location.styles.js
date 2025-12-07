import theme from "common/theme";

const locationStyles = {
  locationContainer: {
    color: theme.palette.text.textLight,
    marginTop: "8px",
  },
  linkContainer: {
    marginTop: "8px",
    width: "fit-content",
  },
  address: {
    display: "block",
    color: theme.palette.text.secondaryLink,
    "&:hover": {
      color: theme.palette.text.secondaryLinkHover,
    },
  },
};

export default locationStyles;
