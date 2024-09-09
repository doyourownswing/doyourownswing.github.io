import theme from "common/theme";

const policiesStyles = {
  container: {
    color: theme.palette.text.textLight,
    marginTop: "8px",
  },
  linkContainer: {
    marginTop: "8px",
    width: "fit-content",
  },
  link: {
    display: "block",
    color: theme.palette.text.linkLight,
    marginTop: "8px",
    "&:hover": {
      color: theme.palette.text.linkLightHover,
    },
  },
};

export default policiesStyles;
