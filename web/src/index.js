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
import Announcement from "components/nav_bar/announcement";
import { getCurrentAnnouncement } from "data/announcements";

const router = createHashRouter(generatedRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));

let announcement = getCurrentAnnouncement();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {!!announcement && (
        // Hack to render a placeholder since our nav bar is sticky and our styling assumes nav bar height
        <Announcement announcement={announcement} invisible />
      )}
      <NavBar />
      <Box sx={indexStyles.mainContent}>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
