import { BOX_SHADOW_2, SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const baseSectionContainer = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
};

const baseListItem = {
  display: "list-item",
  listStyleType: "disc",
  padding: "0.25rem 1rem",
  marginLeft: "2rem",
};

function baseOutlinedItem(color) {
  return {
    marginTop: "1rem",
    marginBottom: "2rem",
    paddingLeft: "1rem",
    borderLeft: `2px solid ${color}`,
  };
}

const codeOfConductStyles = {
  titleSectionContainer: {
    padding: SECTION_PADDING,
    background: theme.palette.background.palePurple,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    color: theme.palette.text.titleNotQuiteBlack,
    paddingBottom: "2rem",
  },
  sectionHeader: {
    fontWeight: "600",
    paddingBottom: "1.5rem",
  },
  tableOfContentsContainer: {
    padding: "2rem 2rem 0",
  },
  tableOfContentsItem: {
    ...baseListItem,
    fontSize: "1.15rem",
    fontWeight: "500",
    cursor: "pointer",
  },
  sectionDescriptionContainer: {
    paddingBottom: "2rem",
  },
  missionStatementSectionContainer: {
    background: `linear-gradient(to top, white 0%, ${theme.palette.background.palePurple} 4rem 100%)`,
    paddingBottom: "6rem",
  },
  missionStatementCard: {
    padding: "3rem 2rem 4rem",
    borderRadius: "2rem",
    background: theme.palette.background.darkPurple,
    textAlign: "center",
    boxShadow: BOX_SHADOW_2,
  },
  missionStatementHeader: {
    color: theme.palette.text.titleLight,
    paddingBottom: "2rem",
    fontWeight: "600",
  },
  missionStatement: {
    color: theme.palette.text.bodyLight,
    fontSize: "1.15rem",
  },
  agreementsSectionContainer: {
    ...baseSectionContainer,
  },
  agreementBehavior: {
    ...baseOutlinedItem(theme.palette.border.leftAccentBlue),
  },
  behaviorExample: {
    ...baseListItem,
  },
  praxisSectionContainer: {
    ...baseSectionContainer,
  },
  praxis: {
    ...baseOutlinedItem(theme.palette.border.leftAccentPurple),
  },
  responseSectionContainer: {
    ...baseSectionContainer,
  },
  reportIncidentButtonContainer: {
    paddingBottom: "2rem",
  },
  reportIncidentButton: {
    textTransform: "none",
    borderRadius: "2rem",
    fontWeight: "600",
    padding: "0.5rem 2rem",
  },
  responseMethod: {
    ...baseOutlinedItem(theme.palette.border.leftAccentPurple),
  },
  responseMethodShortName: {
    fontWeight: "700",
    color: "black",
    paddingBottom: "0.5rem",
  },
};

export default codeOfConductStyles;
