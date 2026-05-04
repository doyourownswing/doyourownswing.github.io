import { BOX_SHADOW_2, SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const startHereStyles = {
  container: {
    padding: SECTION_PADDING,
    backgroundImage: `radial-gradient(circle at top left, ${theme.palette.background.palePurple}, transparent 30%)`,
  },
  subTitle: {
    color: theme.palette.text.title,
  },
  welcome: {
    paddingBottom: "1rem",
  },
  titleAndImageContainer: {
    justifyContent: "space-between",
    paddingBottom: "2rem",
    gap: "2rem",
  },
  titleSection: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  picture: {
    width: {
      xs: "100%",
      md: "min(54vw, 40rem)",
      // lg: "min(54vw, 40rem)",
      // xl: "40rem",
    },
    borderRadius: "2rem",
    boxShadow: BOX_SHADOW_2,
  },
  subSectionContainer: {
    paddingBottom: "2rem",
  },
  sectionTitle: {
    color: theme.palette.text.headerPurple,
    fontWeight: 600,
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "32px",
  },
  listItem: {
    display: "list-item",
    padding: "4px 8px",
  },
  listItem2: {
    display: "list-item",
    listStyleType: "circle",
    padding: "4px 8px",
  },
  faqsContainer: {
    backgroundColor: theme.palette.background.lightGray, // TODO change this to light light purple
    padding: SECTION_PADDING,
  },
  faq: {
    paddingBottom: "16px",
  },
  semiBold: {
    fontWeight: 700,
  },
};

export default startHereStyles;
