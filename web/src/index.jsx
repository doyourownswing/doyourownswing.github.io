import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav_bar/nav_bar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import "./index.css";
import { Box } from "@mui/material";
import { generatedRoutes, Overrides } from "./page_registry";
import { useLocation } from "react-router-dom";

const routes = generatedRoutes;

function NavBarAndAnnouncementsRenderer() {
  let currentRoute = routes.find((r) => r.page.isCurrentPage());
  let showNavBar =
    !currentRoute || Overrides.shouldShowNavBar(currentRoute.overrides);

  return (
    <>
      {/* Render an invisible placeholder nav bar underneath the floating fixed real 
      nav bar to avoiding overlapping real content */}
      {showNavBar && <NavBar placeholder />}
      {showNavBar && <NavBar />}
    </>
  );
}

function FooterRenderer() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const location = useLocation();

  React.useEffect(() => {
    forceUpdate();
  }, [forceUpdate, location]);

  let currentRoute = routes.find((r) => r.page.isCurrentPage());
  let showFooter =
    !currentRoute || Overrides.shouldShowFooter(currentRoute.overrides);

  return <>{showFooter && <Footer />}</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box>
        <BrowserRouter>
          <NavBarAndAnnouncementsRenderer />
            <Routes>
              {routes.map((r, i) => (
                <Route key={i} path={r.path} element={r.element} />
              ))}
            </Routes>
          <FooterRenderer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
