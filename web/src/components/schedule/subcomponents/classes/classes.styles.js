import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const classesStyles = {
  container: {
    backgroundColor: theme.palette.background.barelyPurple,
    padding: SECTION_PADDING,
  },
  title: {
    ...theme.typography.title,
    paddingBottom: "2rem",
  },
  card: {
    boxShadow: BOX_SHADOW,
    maxWidth: "40rem",
    height: { md: "36rem", lg: "32rem" },
    borderRadius: "1rem",
  },
  cardContent: {
    padding: "3rem 4rem 4rem",
  },
  cardHeader: {
    paddingBottom: "2rem",
  },
  levelContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "1rem",
  },
  level: {
    fontFamily: "Poppins",
    fontWeight: "600",
    color: theme.palette.text.title,
  },
  levelIndicatorFilled: {
    color: theme.palette.icon.activePurple,
  },
  levelIndicatorEmpty: {
    color: theme.palette.icon.inactive,
  },
  classTitle: {
    fontFamily: "Poppins",
    fontWeight: "500",
    color: theme.palette.text.titleNotQuiteBlack,
    lineHeight: "1",
    paddingBottom: "0.75rem",
  },
  timeAndPlaceContainer: {
    display: "flex",
    gap: "0.25rem 2rem",
    flexWrap: "wrap",
  },
  iconTextContainer: {
    display: "flex",
    gap: "0.5rem",
    color: theme.palette.text.subtitle,
  },
  descriptionContainer: {
    paddingBottom: "2rem",
  },
  prerequisitesContainer: {},
  cardSectionTitle: {
    fontFamily: "Poppins",
    fontWeight: "600",
    paddingBottom: "0.5rem",
  },
};

export default classesStyles;
