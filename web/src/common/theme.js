import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// https://coolors.co/260b34-502268-955ab5-bf9ad3-ebebeb

// Responsive Font Sizes only affects header styles, h1-h6, for sm, md, and lg breakpoints
// body1, body2, subtitle1, and subtitle2 require custom sizing
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#260B34",
        // TODO: remove this and clean up uses
        background: {
          light: "white",
          lightGray: "ededed",
        },
      },
      background: {
        light: "white",
        lightGray: "#ededed",
        darkPurple: "#260B34",
      },
      text: {
        title: "#955ab5",
        subtitle: "#808080",
        // For less essential body text that we don't want to stand out as much.
        secondaryBody: "#666666",
        textButton: "#955ab5",
        activeSelection: "#955ab5",
        textLight: "white",
        subtitleLight: "#bbbbbb",
      },
    },
    typography: {
      fontFamily: [
        "Nunito",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  })
);

export default theme;
