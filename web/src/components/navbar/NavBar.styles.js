import theme from "../../common/theme";

const navBarStyles = {
  expandedOptionsButton: {
    marginY: 2,
    display: "block",
    textTransform: "none",
  },
  selectedOption: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
  expandedOptionsContainer: {
    flex: 2,
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "space-evenly",
    maxWidth: "1000px",
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
    maxHeight: 40,
    maxWidth: 40,
  },
  logoContainerLink: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoContainer: {
    flex: 1,
  },
};

export default navBarStyles;
