import { BOX_SHADOW, BOX_SHADOW_2, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const classesStyles = {
  container: {
    background: "linear-gradient(140deg, #f3dcff 0%, #fdf8ff 15%)",
    padding: SECTION_PADDING,
  },
  subtitle: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: theme.palette.text.title,
    paddingBottom: ".5rem",
  },
  title: {
    ...theme.typography.title,
    paddingBottom: { xs: "1rem", md: "2rem" },
    lineHeight: "1",
  },
  picture: {
    width: {
      xs: "100%",
      md: "54vw",
      lg: "min(54vw, 40rem)",
      xl: "40rem",
    },
    borderRadius: "2rem",
    boxShadow: BOX_SHADOW_2,
  },
  textAndImageContainer: {
    justifyContent: "space-between",
    paddingBottom: "2rem",
    gap: "2rem",
  },
  hookTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  calloutTitle: {
    fontFamily: "Poppins",
  },
  divider: {
    margin: "2rem",
    background:
      "linear-gradient(90deg, transparent 10%, #955ab5 50%, transparent 90%)",
    height: "1px",
    borderColor: "transparent",
  },
  embellishment: {
    position: "absolute",
    scale: "25",
    left: "70%",
    top: "60%",
    opacity: "0.04",
    color: theme.palette.text.title,
    transform: "rotate(15deg)",
    fontFamily: "Poppins",
    userSelect: "none",
  },
  card: {
    height: "100%",
    position: "relative",
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
