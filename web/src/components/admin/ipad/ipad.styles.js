const ipadStyles = {
  container: {
    padding: "2rem 0rem",
    background: "radial-gradient(#753375, #301930 70%)",
    minHeight: "calc(100vh - 4rem)",
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
    fontSize: { xs: "0.85rem", sm: "1rem", md: "1.15rem" },
    fontShadow: "0px 0px 2px black",
    "&.Mui-selected": {
      color: "#edcdff",
      fontWeight: "600",
    },
  },
  tabPanel: {
    padding: "2rem 0rem",
  },
  formContainer: {
    backgroundColor: "#edcdff",
    borderRadius: "2rem",
    padding: "2rem 0rem",
    height: "70vh",
  },
};

export default ipadStyles;
