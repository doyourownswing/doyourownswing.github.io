import { alpha, createTheme, responsiveFontSizes } from "@mui/material/styles";

const basePalette = {
  // purples
  purple900: "#12021a",
  purple800: "#260b34",
  purple700: "#502268",
  purple600: "#733E8F",
  purple500: "#955ab5",
  purple400: "#bf9ad3",
  purple300: "#d4bce2",
  purple200: "#eaddf0",
  purple100: "#fbf2ff",

  // grays
  gray900: "#1A1A1A",
  gray800: "#343434",
  gray700: "#4E4E4E",
  gray600: "#686868",
  gray500: "#838383",
  gray400: "#9D9D9D",
  gray300: "#B7B7B7",
  gray200: "#D1D1D1",
  gray100: "#EBEBEB",
  white: "#FFFFFF",

  // blues
  blue500: "#1058B5",
  blue400: "#1976d2",
};

// Responsive Font Sizes only affects header styles, h1-h6, for sm, md, and lg breakpoints
// body1, body2, subtitle1, and subtitle2 require custom sizing
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: basePalette.purple800,
      },
      /// Theme for a light button used on dark backgrounds
      buttonLight: {
        name: "buttonLight",
        // a very slight pink - TODO: maybe add this to the base palette
        main: "#ECE1F2",
        light: basePalette.white,
        dark: basePalette.white,
        contrastText: basePalette.purple700,
      },
      /// Theme for a dark button used on light backgrounds
      buttonDark: {
        name: "buttonDark",
        main: basePalette.purple700,
        light: basePalette.purple600,
        dark: basePalette.purple600,
        contrastText: basePalette.white,
      },
      /// Theme for a blue button
      buttonBlue: {
        name: "buttonBlue",
        main: basePalette.blue400,
        light: basePalette.blue500,
        dark: basePalette.blue500,
        contrastText: basePalette.white,
      },
      /// Theme for a white button with purple outline and text
      secondary: {
        name: "secondary",
        main: basePalette.white,
        dark: basePalette.purple100,
        contrastText: basePalette.purple500,
      },
      /// Theme for a purple button, initially designed for use on dark background.
      ///
      /// Similar to buttonDark, but a bit flipped
      buttonPurple: {
        name: "buttonPurple",
        main: basePalette.purple600,
        light: basePalette.purple600,
        dark: basePalette.purple700,
        contrastText: basePalette.purple100,
      },
      background: {
        // a richer more vibrant purple for attention catching
        announcement: "#b400d9",
        light: basePalette.white,
        lightGray: basePalette.gray100,
        lightPurple: basePalette.purple400,
        barelyPurple: basePalette.purple100,
        palePurple: basePalette.purple200,
        darkPurple: basePalette.purple800,
        darkerPurple: basePalette.purple900,
        purpleDivider: basePalette.purple700,
        songOfTheWeek: "linear-gradient(to bottom, #e9e0fb 0%, #ffe2f7 100%);",
        upcomingEvents: "linear-gradient(to bottom, #ffe2f7 0%, #e9e0fb 100%);",
      },
      border: {
        gray: basePalette.gray200,
        emphasis: basePalette.purple400,
        emphasisGlow: basePalette.purple300,
      },
      card: {
        shadow: basePalette.gray400,
      },
      text: {
        titleLight: basePalette.white,
        announcement: basePalette.white,
        title: basePalette.purple500,
        titleNotQuiteBlack: basePalette.purple800,
        navigationOptions: basePalette.gray600,
        subtitle: basePalette.gray500,
        subtitleLight: basePalette.gray300,
        // For less essential body text that we don't want to stand out as much.
        secondaryBody: basePalette.gray600,
        // Same but slightly darker
        // TODO: update default quote with this in song of the week too once merging is done
        secondaryBody2: basePalette.gray700,
        bodyLight: basePalette.purple200,
        bodyDark: basePalette.gray100,
        textButton: basePalette.purple500,
        activeSelection: basePalette.purple500,
        textLight: basePalette.white,
        linkLight: basePalette.gray300,
        linkLightHover: basePalette.white,
        lightPurple: basePalette.purple400,
        headerPurple: basePalette.purple700,
        link: "#0F65D7",
        linkActive: "#174ea6",
        linkVisited: basePalette.purple600,
        glow: alpha(basePalette.purple300, 0.66),
        quote: basePalette.purple100,
      },
      button: {
        lightGray: basePalette.gray200,
        purpleFilled: basePalette.purple700,
      },
      icon: {
        avatar: basePalette.purple700,
        default: basePalette.purple500,
        lightPurple: basePalette.purple400,
        activePurple: basePalette.purple500,
        inactive: basePalette.gray300,
      },
      callout: {
        border: basePalette.gray200,
        accent: basePalette.purple500,
        backgroundColor: basePalette.purple100,
      },
      badge: {
        border: "1px solid" + basePalette.purple500,
        backgroundColor: basePalette.purple100,
        boxShadow: "0px 2px 4px " + basePalette.gray300,
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
      h1: { fontFamily: "Poppins" },
      h2: { fontFamily: "Poppins" },
      h3: { fontFamily: "Poppins" },
      h4: { fontFamily: "Poppins" },
      h5: { fontFamily: "Poppins" },
      h6: { fontFamily: "Poppins" },
      body1: {
        lineHeight: "1.5",
        color: basePalette.gray700,
        letterSpacing: "0.2px",
      },
      title: {
        paddingBottom: "16px",
        fontWeight: "600",
        fontFamily: "Poppins",
        color: basePalette.purple800,
      },
      announcement: {
        fontWeight: "600",
        fontFamily: "Poppins",
      },
    },
  })
);

export default theme;
