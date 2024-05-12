import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import FeatureFlags from "./infra/FeatureFlags";
import Contact from "./components/contact/Contact";
import Schedule from "./components/schedule/Schedule";
import About from "./components/about/About";
import Health from "./components/health/Health";
import CodeOfConduct from "./components/codeofconduct/CodeOfConduct";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#260B34",
    },
    secondary: {
      main: "#502268",
    },
  },
});

// https://coolors.co/260b34-502268-955ab5-bf9ad3-ebebeb

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
