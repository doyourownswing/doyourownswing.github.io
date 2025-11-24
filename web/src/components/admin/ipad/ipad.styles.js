import { SECTION_PADDING } from "common/constants";

const ipadStyles = {
  container: {
    padding: "2rem",
    background: "radial-gradient(#753375, #301930 70%)",
    minHeight: "90vh",
  },
  tabList: {
    paddingBottom: "2rem",
    ".MuiTabs-indicator": {
      background: "#edcdff",
    },
  },
  tab: {
    color: "#dcdcdc",
    textTransform: "none",
    fontFamily: "Poppins",
    fontSize: "1.15rem",
    fontShadow: "0px 0px 2px black",
    "&.Mui-selected": {
      color: "#edcdff",
      fontWeight: "600",
    },
  },
  formContainer: {
    backgroundColor: "#edcdff",
    borderRadius: "2rem",
    padding: "2rem 0rem",
    height: "80vh",
  },
};

export default ipadStyles;
