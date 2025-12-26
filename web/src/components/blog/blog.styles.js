import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";
import { alpha } from "@mui/material";

const blogStyles = {
  articleRendererContainer: {
    padding: SECTION_PADDING,
    backgroundImage: `linear-gradient(174deg, ${
      theme.palette.background.barelyPurple
    } 20rem, ${alpha(theme.palette.background.barelyPurple, 0.5)} 24rem)`,
  },
  articleRenderer: {
    // Make the width even smaller to make reading easier
    maxWidth: { xs: "60rem" },
  },
  articleTitleSection: {
    textAlign: "center",
  },
  articleTitle: {
    fontWeight: "600",
    color: theme.palette.text.titleNotQuiteBlack,
    paddingBottom: "1rem",
  },
  articleSubtitle: {
    color: theme.palette.text.subtitle,
    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem", lg: "1.25rem" },
  },
  articleDetails: {
    padding: "2rem 0",
    textAlign: "center",
  },
  articleTagsList: {
    justifyContent: "center",
    padding: "0.5rem",
  },
  authorAndDate: {
    display: "inline-flex",
    justifyContent: "center",
    gap: "1rem",
  },
  authorAndDateText: {
    color: theme.palette.text.subtitle,
    fontWeight: "500",
  },
  tag: {},
};

export default blogStyles;
