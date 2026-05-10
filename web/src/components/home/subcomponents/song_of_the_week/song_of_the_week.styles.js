import theme from "@/common/theme";
import { SECTION_PADDING } from "@/common/constants";

const songOfTheWeekStyles = {
  songOfTheWeekSection: {
    backgroundImage: theme.palette.background.songOfTheWeek,
    padding: SECTION_PADDING,
  },
  songOfTheWeekFlexContainer: {
    direction: {
      xs: "column",
      md: "row",
    },
    style: {
      gap: { xs: "2rem", lg: "4rem" },
    },
  },
  title: {
    ...theme.typography.title,
  },
  leftContainer: {
    flex: 1,
    margin: { xs: "auto", md: "unset" },
  },
  songCard: {
    margin: { xs: "auto", md: "unset" },
  },
  quotePlaceholder: {
    fontSize: "18px",
  },
};

export default songOfTheWeekStyles;
