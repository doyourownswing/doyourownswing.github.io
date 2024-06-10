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
    color: theme.palette.text.linkLight,
    marginTop: "8px",
    "&:hover": {
      color: theme.palette.text.linkLightHover,
    },
  },
};

export default browseStyles;
