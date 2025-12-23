import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav_bar/nav_bar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import "./index.css";
import { Box } from "@mui/material";
import { generatedRoutes, Overrides } from "./page_registry";

const routes = generatedRoutes;

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

function NavBarAndAnnouncementsRenderer() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    const onHashChange = () => forceUpdate();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  });

  let currentRoute = routes.find((r) => r.page.isCurrentPage());
  let showNavBar =
    !currentRoute || Overrides.shouldShowNavBar(currentRoute.overrides);

  return (
    <Box>
      {/* Render an invisible placeholder nav bar underneath the floating fixed real 
      nav bar to avoiding overlapping real content */}
      {showNavBar && <NavBar placeholder />}
      {showNavBar && <NavBar />}
    </Box>
  );
}

function FooterRenderer() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    const onHashChange = () => forceUpdate();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  });

  let currentRoute = routes.find((r) => r.page.isCurrentPage());
  let showFooter =
    !currentRoute || Overrides.shouldShowFooter(currentRoute.overrides);

  return <Box>{showFooter && <Footer />}</Box>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBarAndAnnouncementsRenderer />
      <Box>
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
      <FooterRenderer />
    </ThemeProvider>
  </React.StrictMode>
);
