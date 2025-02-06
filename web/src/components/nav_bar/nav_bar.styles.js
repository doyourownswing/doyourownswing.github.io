import theme from "common/theme";

const baseOptionItem = {
  textTransform: "none",
  textDecoration: "none",
  fontFamily: "Poppins",
  color: theme.palette.text.navigationOptions,
};

const navBarStyles = {
  expandedOptionsButton: {
    ...baseOptionItem,
    marginY: 2,
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
    ...baseOptionItem,
  },
  logoImage: {
    maxHeight: "40px",
    maxWidth: "40px",
    marginRight: "12px",
  },
  logoBrandName: {
    color: theme.palette.text.title,
    lineHeight: "1.2",
  },
  logoBrandQuip: {
    lineHeight: "1",
    color: theme.palette.text.secondaryBody,
    fontSize: "14px",
    fontWeight: "600",
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
    backgroundColor: theme.palette.background.light,
    boxShadow:
      "0px 2px 2px -1px rgba(0,0,0,0.05), 0px 4px 5px 0px rgba(0,0,0,0.02), 0px 1px 10px 0px rgba(0,0,0,0.05);",
    zIndex: 10,
  },
};

export default navBarStyles;
