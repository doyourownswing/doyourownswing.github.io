import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

export const startHereContainerStyles = {
  marginTop: "2rem",
  div: {
    marginBottom: "2rem",
  },
  h3: {
    color: theme.palette.text.title,
  },
  h6: {
    color: theme.palette.text.headerPurple,
    fontWeight: "600",
  },
  li: {
    padding: "4px 8px",
  },
};

const startHereStyles = {
  welcome: {
    color: theme.palette.text.title,
  },
  titleSection: {
    paddingBottom: "2rem",
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
