import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// https://coolors.co/260b34-502268-955ab5-bf9ad3-ebebeb
const basePalette = {
  darkPurple: "#260b34",
  purple: "#502268",
  mediumPurple: "#955ab5",
  lightPurple: "#bf9ad3",
  lightGray: "#ebebeb",
  white: "white",
};

// Responsive Font Sizes only affects header styles, h1-h6, for sm, md, and lg breakpoints
// body1, body2, subtitle1, and subtitle2 require custom sizing
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: basePalette.darkPurple,
        // TODO: remove this and clean up uses
        background: {
          light: basePalette.white,
          lightGray: basePalette.lightGray,
        },
      },
      background: {
        light: basePalette.white,
        lightGray: basePalette.lightGray,
        darkPurple: basePalette.darkPurple,
      },
      text: {
        title: basePalette.mediumPurple,
        subtitle: "#808080",
        // For less essential body text that we don't want to stand out as much.
        secondaryBody: "#666666",
        textButton: basePalette.mediumPurple,
        activeSelection: basePalette.mediumPurple,
        textLight: basePalette.white,
        subtitleLight: "#bbbbbb",
      },
      button: {
        lightGray: "#dddddd",
      },
      icon: {
        avatar: basePalette.purple,
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
