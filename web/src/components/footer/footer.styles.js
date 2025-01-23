import { FOOTER_PADDING } from "common/constants";
import theme from "common/theme";

const footerStyles = {
  footerContainer: {
    backgroundColor: theme.palette.background.darkPurple,
    padding: FOOTER_PADDING,
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
  authorFootnote: {
    textAlign: "center",
    padding: "2rem",
    color: theme.palette.text.lightPurple,
  },
};

export default footerStyles;
