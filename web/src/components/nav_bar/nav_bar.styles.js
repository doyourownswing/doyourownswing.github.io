import theme from "common/theme";

const baseOptionItem = {
  textTransform: "none",
  textDecoration: "none",
  fontFamily: "Poppins",
  color: theme.palette.text.navigationOptions,
  lineHeight: "1.15rem",
  fontWeight: "700",
  // In the md range, min-content will stack the multi-word options which gives us more spacce
  width: { md: "min-content", lg: "unset" },
};

const navBarStyles = {
  expandedOptionsButton: {
    ...baseOptionItem,
    textAlign: "center",
  },
  selectedOption: {
    color: theme.palette.text.activeSelection,
    textAlign: "center",
  },
  expandedOptionsContainer: {
    flex: 2,
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "flex-end",
    gap: "min(2rem, 1.5vw)",
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
    maxHeight: "2.5rem",
    maxWidth: "2.5rem",
    marginRight: "1rem",
  },
  logoBrandName: {
    color: theme.palette.text.title,
    lineHeight: "1.2",
  },
  logoBrandQuip: {
    lineHeight: "1",
    color: theme.palette.text.secondaryBody,
    fontWeight: "600",
  },
  logoContainerLink: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoContainer: {
    paddingRight: "2rem",
  },
  appBar: {
    backgroundColor: theme.palette.background.light,
    boxShadow:
      "0px 2px 2px -1px rgba(0,0,0,0.05), 0px 4px 5px 0px rgba(0,0,0,0.02), 0px 1px 10px 0px rgba(0,0,0,0.05);",
    zIndex: 10,
  },
  invisible: {
    opacity: 0,
  },
  toolbar: {
    width: "100%",
  },
  toolbarContentContainer: {
    paddingLeft: {
      xs: "1rem",
      sm: "2rem",
      md: "max(2rem, calc((100vw - 1200px) / 2 + 1rem))",
    },
    paddingRight: {
      xs: "1rem",
      sm: "2rem",
    },
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
};

export default navBarStyles;
