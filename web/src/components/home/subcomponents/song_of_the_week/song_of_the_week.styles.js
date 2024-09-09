import theme from "common/theme";
import { SECTION_PADDING } from "common/constants";

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
      paddingBottom: "32px",
      gap: {
        xs: "24px",
        md: "0px",
      },
    },
  },
  title: {
    ...theme.typography.title,
  },
  leftContainer: {
    maxWidth: "400px",
    minWidth: { sm: "280px" },
    flex: 1,
    margin: { xs: "auto", md: "unset" },
  },
  songCardContainer: {
    flex: 2,
    display: "flex",
    paddingRight: "24px",
  },
  songCard: {
    margin: "auto",
    marginRight: { md: 0 },
  },
  quotePlaceholder: {
    fontSize: "18px",
  },
};

export default songOfTheWeekStyles;
