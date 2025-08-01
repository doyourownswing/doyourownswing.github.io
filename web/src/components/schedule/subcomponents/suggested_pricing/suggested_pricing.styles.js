import { BOX_SHADOW, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const baseCell = {
  padding: {
    xs: "1rem 2rem",
  },
};

const suggestedPricingStyles = {
  container: {
    backgroundColor: "#f3f4fe",
    padding: SECTION_PADDING,
  },
  title: {
    fontWeight: "700",
    fontFamily: "Poppins",
    color: theme.palette.text.title,
    paddingBottom: ".5rem",
  },
  description: {
    paddingBottom: { xs: "1rem", md: "2rem" },
  },
  tableCard: {
    boxShadow: BOX_SHADOW,
    borderRadius: "1rem",
  },
  headerCell: {
    ...baseCell,
    width: "25%",
  },
  cellTitle: {
    fontFamily: "Poppins",
    fontWeight: "600",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    minWidth: "0",
  },
  rowLegendCell: {
    ...baseCell,
  },
  dataCell: {
    ...baseCell,
  },
  spanningDataCell: {
    ...baseCell,
  },
  cellText: {
    minWidth: "0",
  },
};

export default suggestedPricingStyles;
