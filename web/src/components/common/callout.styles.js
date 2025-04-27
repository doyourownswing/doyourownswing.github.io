import theme from "common/theme";

const calloutStyles = {
  container: {
    border: "1px solid " + theme.palette.callout.border,
    padding: "1.5rem",
    borderRadius: "0.5rem",
    borderInlineStartColor: theme.palette.callout.accent,
    borderInlineStartWidth: "0.25rem",
    backgroundColor: theme.palette.callout.backgroundColor,
  },
};

export default calloutStyles;
