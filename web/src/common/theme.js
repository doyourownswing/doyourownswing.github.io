import { createTheme } from "@mui/material/styles";

// https://coolors.co/260b34-502268-955ab5-bf9ad3-ebebeb

const theme = createTheme({
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
    h4: {
      "@media (min-width:0px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      "@media (min-width:0px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
    },
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
});

export default theme;
