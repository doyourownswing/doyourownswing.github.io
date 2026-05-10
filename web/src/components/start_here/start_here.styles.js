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
    },
    borderRadius: "2rem",
    boxShadow: BOX_SHADOW_2,
  },
  subSectionContainer: {
    paddingBottom: "2rem",
  },
  sectionTitle: {
    fontWeight: 600,
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "2rem",
  },
  listItem: {
    display: "list-item",
    padding: "0.5rem 1rem",
  },
  listItem2: {
    display: "list-item",
    listStyleType: "circle",
    padding: "0.5rem 1rem",
  },
  faqsContainer: {
    background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.barelyPurple} 3rem 100%)`,
    padding: SECTION_PADDING,
  },
  faq: {
    paddingBottom: "16px",
  },
  semiBold: {
    fontWeight: 700,
  },
  beforeTheEventStepContainer: {
    backgroundColor: theme.palette.background.barelyPurple,
    padding: "2rem",
    borderRadius: "1rem",
    margin: "1rem 0 2rem",
  },
  whenYouArriveStepContainer: {
    backgroundColor: theme.palette.background.barelyBlue,
    padding: "2rem 2rem 1rem",
    borderRadius: "1rem",
    margin: "1rem 0 2rem",
  },
  stepPreTitle: {
    fontFamily: "Poppins",
    color: theme.palette.text.title,
    fontWeight: "700",
    fontSize: "0.8rem",
  },
  stepTitle: {
    fontWeight: "600",
    lineHeight: "1",
    marginBottom: "0.5rem",
  },
  stepDescription: {
    padding: "0.5rem 0 1.5rem",
  },
  stepButton: {
    textTransform: "none",
    borderRadius: "2rem",
    padding: "0.5rem 1.5rem",
    fontWeight: "600",
    width: "min(16rem, 100%)",
  },
};

export default startHereStyles;
