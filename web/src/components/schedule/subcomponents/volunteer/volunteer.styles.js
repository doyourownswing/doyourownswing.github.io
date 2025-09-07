import { SECTION_PADDING } from "common/constants";
import theme from "common/theme";

const volunteerStyles = {
  container: {
    backgroundColor: theme.palette.background.barelyPurple,
    padding: SECTION_PADDING,
  },
  title: {
    textAlign: "center",
    paddingBottom: "4rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "6rem",
  },
  roleContainer: {
    justifyContent: "space-between",
    gap: { xs: "2rem", md: "4rem" },
  },
  roleTextContainer: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  roleTitle: {
    // fontFamily: "Nunito",
    // fontWeight: "500",
    paddingBottom: "1.5rem",
  },
  discount: {
    // fontFamily: "Nunito",
    // fontWeight: "600",
    // fontSize: "2rem",
  },
  discountSection: {
    paddingTop: "1.5rem",
    paddingBottom: "2rem",
  },
  button: {
    textTransform: "none",
    width: "20rem",
    fontFamily: "Poppins",
    borderRadius: "0.5rem",
    border: "solid 1px " + theme.palette.secondary.contrastText,
    // margin: "2rem 0rem",
  },
  image: {
    width: { xs: "100%", md: "min(50vw, 40rem)" },
    borderRadius: "2rem",
  },
};

export default volunteerStyles;
