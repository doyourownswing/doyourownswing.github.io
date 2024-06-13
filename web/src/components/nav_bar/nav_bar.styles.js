import theme from "common/theme";

const navBarStyles = {
  expandedOptionsButton: {
    marginY: 2,
    display: "block",
    textTransform: "none",
    textAlign: "center",
  },
  selectedOption: {
    color: theme.palette.text.activeSelection,
    fontWeight: 700,
    textAlign: "center",
  },
  expandedOptionsContainer: {
    flex: 2,
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "space-between",
    maxWidth: "720px",
  },
  menuIcon: {
    display: {
      sm: "flex",
      md: "none",
    },
    justifyContent: "flex-end",
  },
  menuItem: {
    textDecoration: "none",
  },
  logoImage: {
    maxHeight: 32,
    maxWidth: 32,
    marginRight: "8px",
  },
  logoContainerLink: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoContainer: {
    flex: 1,
  },
  appBar: {
    position: "fixed",
    backgroundColor: theme.palette.primary.background.light,
    boxShadow:
      "0px 2px 2px -1px rgba(0,0,0,0.05), 0px 4px 5px 0px rgba(0,0,0,0.02), 0px 1px 10px 0px rgba(0,0,0,0.05);",
    zIndex: 10,
  },
};

export default navBarStyles;
