import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Footer from "components/footer/footer";
import NavBar from "components/nav_bar/nav_bar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "common/theme";
import "index.css";
import indexStyles from "index.styles";
import { Box } from "@mui/material";
import generatedRoutes from "./page_registry";

const router = createHashRouter(generatedRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box sx={indexStyles.mainContent}>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
