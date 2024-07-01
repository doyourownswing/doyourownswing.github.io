import {
  SECTION_PADDING,
  SUB_SECTION_PADDING,
  SUB_SECTION_WRAPPER_PADDING,
} from "common/constants";
import theme from "common/theme";

const startHereStyles = {
  welcome: {
    color: theme.palette.text.title,
  },
  partOneContainer: {
    padding: SUB_SECTION_WRAPPER_PADDING,
  },
  subSectionContainer: {
    padding: SUB_SECTION_PADDING,
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
    fontWeight: "700",
  },
};

export default startHereStyles;
