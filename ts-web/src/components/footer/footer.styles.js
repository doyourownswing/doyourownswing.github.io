import theme from "common/theme";

const footerStyles = {
  footerContainer: {
    backgroundColor: theme.palette.background.darkPurple,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "24px",
    paddingTop: "16px",
  },
  footerStack: {
    gap: "24px",
  },
  footerLinksGridContainer: { width: "100%" },
  footerLinksGrid: {
    justifyContent: "space-evenly",
    width: "100%",
  },
  gridItem: {
    display: { md: "flex" },
    justifyContent: "flex-end",
  },
};

export default footerStyles;
