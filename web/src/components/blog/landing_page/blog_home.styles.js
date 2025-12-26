import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const blogHomeStyles = {
  blogHomeContainer: {
    padding: SECTION_PADDING,
    backgroundColor: theme.palette.background.barelyPurple,
  },
  subtitle: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: theme.palette.text.title,
    paddingBottom: ".5rem",
  },
  title: {
    ...theme.typography.title,
    lineHeight: "1",
  },
  titleContainer: {
    paddingBottom: "2rem",
  },
  sectionHeader: {
    fontWeight: "600",
    paddingBottom: "1rem",
    paddingTop: "2rem",
  },
};

export default blogHomeStyles;
