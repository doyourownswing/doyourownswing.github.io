import theme from "@/common/theme";

const contactStyles = {
  contactContainer: {
    color: theme.palette.text.textLight,
    marginTop: "8px",
  },
  row: {
    display: "flex",
    marginTop: "8px",
    width: "fit-content",

    color: theme.palette.text.secondaryLink,
    "&:hover": {
      color: theme.palette.text.secondaryLinkHover,
    },
  },
  icon: {
    marginRight: "16px",
    fontSize: 18,
  },
};

export default contactStyles;
