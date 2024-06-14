import { SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const whoWeAreStyles = {
  whoWeAreContainer: {
    backgroundColor: theme.palette.background.darkPurple,
    color: theme.palette.text.titleLight,
    padding: SECTION_PADDING,
  },
  title: {
    color: theme.palette.text.titleLight,
    padding: "8px 0px",
  },
  subtitle: {
    color: theme.palette.text.subtitleLight,
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
    paddingBottom: "24px",
  },
  valueIcon: {
    color: theme.palette.icon.lightPurple,
  },
};

export default whoWeAreStyles;
