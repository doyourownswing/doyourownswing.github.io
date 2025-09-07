import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
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

const routes = generatedRoutes;

const root = ReactDOM.createRoot(document.getElementById("root"));

let announcement = getCurrentAnnouncement();

// HashRouter preserves scroll location between pages which is wonky as heck.
//
// Intercept page change and reset scroll between pages.
function ScrollResetContainer(props) {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return props.children;
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {!!announcement && (
        // Hack to render a placeholder since our nav bar is sticky and our styling assumes nav bar height
        <Announcement announcement={announcement} invisible />
      )}
      <NavBar />
      <Box sx={indexStyles.mainContent}>
        <HashRouter>
          <ScrollResetContainer>
            <Routes>
              {routes.map((r, i) => (
                <Route key={i} path={r.path} element={r.element} />
              ))}
            </Routes>
          </ScrollResetContainer>
        </HashRouter>
      </Box>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
