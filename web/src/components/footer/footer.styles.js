import theme from "../../common/theme";

const footerStyles = {
  footerContainer: {
    backgroundColor: theme.palette.background.darkPurple,
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "8px",
    paddingBottom: "8px",
    paddingRight: {
      md: "5vw",
      sm: "2vw",
    },
  },
  brand: {
    alignSelf: "center",
  },
};

export default footerStyles;
