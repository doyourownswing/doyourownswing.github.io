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
      },
      background: {
        light: basePalette.white,
        lightGray: basePalette.lightGray,
        lightPurple: basePalette.lightPurple,
        darkPurple: basePalette.darkPurple,
        songOfTheWeek: "linear-gradient(to bottom, #e9e0fb 0%, #ffe2f7 100%);",
        upcomingEvents: "linear-gradient(to bottom, #ffe2f7 0%, #e9e0fb 100%);",
      },
      text: {
        titleLight: basePalette.white,
        subtitleLight: "#bbbbbb",
        title: basePalette.mediumPurple,
        subtitle: "#808080",
        // For less essential body text that we don't want to stand out as much.
        secondaryBody: "#666666",
        // Same but slightly darker
        // TODO: update default quote with this in song of the week too once merging is done
        secondaryBody2: "#3f3f3f",
        textButton: basePalette.mediumPurple,
        activeSelection: basePalette.mediumPurple,
        textLight: basePalette.white,
        linkLight: "#bbbbbb",
        linkLightHover: basePalette.white,
        lightPurple: basePalette.lightPurple,
        headerPurple: basePalette.purple,
        link: "#0F65D7",
        linkActive: "#174ea6",
        linkVisited: "#733E8F", // a midpoint between medium purple and purple
      },
      button: {
        lightGray: "#dddddd",
        purpleFilled: basePalette.purple,
      },
      icon: {
        avatar: basePalette.purple,
        lightPurple: basePalette.lightPurple,
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
        paddingBottom: "8px",
        fontWeight: "600",
        fontFamily: "Poppins",
      },
    },
  })
);

export default theme;
