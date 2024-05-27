import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import FeatureFlags from "./infra/feature_flags";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import CodeOfConduct from "./components/code_of_conduct/code_of_conduct";
import Footer from "./components/footer/footer";
import Health from "./components/health/health";
import Home from "./components/home/home";
import NavBar from "./components/nav_bar/nav_bar";
import Schedule from "./components/schedule/schedule";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./common/theme";
import "./index.css";

/** Generates the list of routes to include in the router based on the feature eligibility. */
function generateRoutes() {
  let routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  if (FeatureFlags.showScheduleTab) {
    routes.push({
      path: "/schedule",
      element: <Schedule />,
    });
  }
  if (FeatureFlags.showAboutTab) {
    routes.push({
      path: "/about",
      element: <About />,
    });
  }

  if (FeatureFlags.showHealthTab) {
    routes.push({
      path: "/health",
      element: <Health />,
    });
  }

  if (FeatureFlags.showCodeOfConductTab) {
    routes.push({
      path: "/code",
      element: <CodeOfConduct />,
    });
  }

  if (FeatureFlags.showContactTab) {
    routes.push({
      path: "/contact",
      element: <Contact />,
    });
  }

  return routes;
}

const router = createHashRouter(generateRoutes());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
