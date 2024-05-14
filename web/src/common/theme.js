import { createTheme } from "@mui/material/styles";

// https://coolors.co/260b34-502268-955ab5-bf9ad3-ebebeb

const theme = createTheme({
  palette: {
    primary: {
      main: "#260B34",
      background: {
        light: "white",
      },
    },
    secondary: {
      main: "#502268",
    },
  },
});

export default theme;
