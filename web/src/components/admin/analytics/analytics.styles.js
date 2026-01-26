import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const analyticsStyles = {
  container: {
    padding: SECTION_PADDING,
    backgroundColor: theme.palette.background.barelyPurple,
  },
  sectionTitle: {
    color: theme.palette.text.titleNotQuiteBlack,
  },
  sectionSubtitle: {
    color: theme.palette.text.title,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  sectionContentContainer: {
    padding: "2rem 0 8rem",
  },
  chartTitleContainer: {
    paddingBottom: "1rem",
  },
  chartTitle: {
    color: theme.palette.text.titleNotQuiteBlack,
  },
  chartSubtitle: {
    color: theme.palette.text.subtitle,
  },
};

export default analyticsStyles;
