import theme from "common/theme";

const browseStyles = {
  container: {
    color: theme.palette.text.textLight,
    marginTop: "8px",
    marginRight: "16px",
  },
  linkContainer: {
    marginTop: "8px",
  },
  link: {
    color: theme.palette.text.subtitleLight,
    marginTop: "8px",
    "&:hover": {
      color: theme.palette.text.textLight,
    },
  },
};

export default browseStyles;
