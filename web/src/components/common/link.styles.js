import theme from "common/theme";

const linkStyles = {
  color: theme.palette.text.link,
  textDecoration: "unset",
  textUnderlineOffset: "2px",
  "&:visited": {
    color: theme.palette.text.linkVisited,
  },
  "&:hover": {
    textDecoration: "underline",
  },
  "&:active": {
    color: theme.palette.text.linkActive,
  },
};

export default linkStyles;
