import theme from "common/theme";

const notFoundStyles = {
  image: {
    maxWidth: "480px",
    minWidth: "200px",
    width: "100%",
    margin: "auto",
  },
  rightContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    paddingTop: "64px",
    paddingBottom: "64px",
  },
  button: {
    backgroundColor: theme.palette.button.purpleFilled,
    textTransform: "none",
  },
};

export default notFoundStyles;
