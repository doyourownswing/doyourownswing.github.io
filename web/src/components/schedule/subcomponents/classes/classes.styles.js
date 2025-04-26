import { BOX_SHADOW, BOX_SHADOW_2, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const classesStyles = {
  container: {
    // backgroundColor: theme.palette.background.barelyPurple,
    background: "linear-gradient(140deg, #f3dcff 0%, #fdf8ff 15%)",
    padding: SECTION_PADDING,
  },
  title: {
    ...theme.typography.title,
    paddingBottom: "2rem",
  },
  picture: {
    width: {
      // TODO FIX
      xs: "80vw",
      sm: "24rem",
      md: "40vw",
      lg: "min(60vw, 32rem)",
      xl: "32rem",
    },
    borderRadius: "2rem",
    boxShadow: BOX_SHADOW_2,
  },
  textAndImageContainer: {
    justifyContent: "space-between",
    paddingBottom: "2rem",
  },
  divider: {
    margin: "2rem",
    background:
      // TODO make this cooler
      "linear-gradient(90deg, transparent 10%, #955ab5 50%, transparent 90%)",
    height: "1px",
    borderColor: "transparent",
  },
  card: {
    boxShadow: BOX_SHADOW,
    maxWidth: "40rem",
    height: "100%",
    borderRadius: "1rem",
  },
  cardContent: {
    padding: { xs: "2rem 2rem 3rem", sm: "3rem 4rem 4rem" },
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
    lineHeight: "1.125",
    paddingBottom: "0.75rem",
  },
  timeAndPlaceContainer: {
    display: "flex",
    gap: "0.25rem 2rem",
    flexWrap: "wrap",
  },
  iconTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: theme.palette.text.subtitle,
  },
  descriptionContainer: {
    paddingBottom: "2rem",
  },
  list: {
    listStyleType: "disc",
    paddingInlineStart: "2rem",
  },
  listItem: {
    display: "list-item",
    padding: "0",
  },
  cardSectionTitle: {
    fontFamily: "Poppins",
    fontWeight: "600",
    paddingBottom: "0.5rem",
  },
};

export default classesStyles;
