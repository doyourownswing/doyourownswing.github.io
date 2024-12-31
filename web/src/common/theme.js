import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// https://coolors.co/260b34-502268-955ab5-bf9ad3-ebebeb
const basePalette = {
  darkPurple: "#260b34",
  purple1: "#502268",
  purple2: "#733E8F",
  mediumPurple: "#955ab5",
  lightPurple1: "#bf9ad3",
  lightPurple2: "#d4bce2",
  lightPurple3: "#eaddf0",
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
      },
      buttonLight: {
        main: "#ECE1F2",
        light: basePalette.white,
        dark: basePalette.white,
        contrastText: basePalette.purple1,
      },
      background: {
        // a richer more vibrant purple for attention catching
        announcement: "#b400d9",
        light: basePalette.white,
        lightGray: basePalette.lightGray,
        lightPurple: basePalette.lightPurple1,
        darkPurple: basePalette.darkPurple,
        songOfTheWeek: "linear-gradient(to bottom, #e9e0fb 0%, #ffe2f7 100%);",
        upcomingEvents: "linear-gradient(to bottom, #ffe2f7 0%, #e9e0fb 100%);",
      },
      text: {
        titleLight: basePalette.white,
        title: basePalette.mediumPurple,
        subtitle: "#808080",
        // For less essential body text that we don't want to stand out as much.
        secondaryBody: "#666666",
        // Same but slightly darker
        // TODO: update default quote with this in song of the week too once merging is done
        secondaryBody2: "#3f3f3f",
        bodyLight: basePalette.lightPurple3,
        bodyDark: basePalette.lightGray,
        bodyLight: basePalette.lightPurple3,
        textButton: basePalette.mediumPurple,
        activeSelection: basePalette.mediumPurple,
        textLight: basePalette.white,
        linkLight: "#bbbbbb",
        linkLightHover: basePalette.white,
        lightButton: basePalette.purple1,
        lightPurple: basePalette.lightPurple1,
        headerPurple: basePalette.purple1,
        link: "#0F65D7",
        linkActive: "#174ea6",
        linkVisited: basePalette.purple2,
      },
      button: {
        lightGray: "#dddddd",
        purpleFilled: basePalette.purple1,
      },
      icon: {
        avatar: basePalette.purple1,
        default: basePalette.mediumPurple,
        lightPurple: basePalette.lightPurple1,
      },
    },
    typography: {
      fontFamily: [
        "Nunito",
        "Poppins",
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
      title: {
        paddingBottom: "16px",
        fontWeight: "600",
        fontFamily: "Poppins",
      },
      announcement: {
        fontWeight: "600",
        fontFamily: "Poppins",
      },
    },
  })
);

export default theme;
