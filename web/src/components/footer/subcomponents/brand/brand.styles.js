import theme from "@/common/theme";

const brandStyles = {
  brandContainerContainer: {
    color: theme.palette.text.lightPurple,
    flex: { sm: "1 1 240px" },
    alignItems: "center",
    display: "flex",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    fontSize: "40px",
  },
  logoText: {
    padding: "8px",
    fontSize: "1.5rem",
    color: theme.palette.text.lightPurple,
    fontWeight: "600",
    letterSpacing: "1px",
  },
};

export default brandStyles;
