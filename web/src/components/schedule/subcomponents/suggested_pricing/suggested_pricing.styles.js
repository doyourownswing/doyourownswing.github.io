import { SECTION_PADDING } from "common/constants";
import theme from "common/theme";

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
};

export default suggestedPricingStyles;
