import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";
import whatIsWcsStyles from "../what_is_wcs/what_is_wcs.styles";

const whoWeAreStyles = {
  whoWeAreContainer: {
    backgroundColor: theme.palette.background.darkPurple,
    color: theme.palette.text.titleLight,
    padding: SECTION_PADDING,
  },
  title: {
    ...theme.typography.title,
    color: theme.palette.text.titleLight,
  },
  description: {
    color: theme.palette.text.bodyLight,
    fontSize: "18px",
  },
  pointsSection: {
    paddingTop: "24px",
  },
  pointHook: {
    ...whatIsWcsStyles.pointHook,
    color: theme.palette.text.titleLight,
  },
  pointContent: {
    ...whatIsWcsStyles.pointContent,
    color: theme.palette.text.bodyLight,
  },
  valuesSection: {
    paddingTop: "32px",
  },
  valueRenderer: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: "8px",
  },
  valueRendererContainer: {
    display: "flex",
  },
  valuesContainer: {
    paddingTop: "24px",
  },
  valueIcon: {
    color: theme.palette.icon.lightPurple,
  },
  value: {
    color: theme.palette.text.bodyLight,
  },
};

export default whoWeAreStyles;
