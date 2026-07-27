import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav_bar/nav_bar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import "./index.css";
import {
  generatedRoutes,
  Overrides,
  mainPageRegistry,
  standalonePageRegistry,
} from "./page_registry";
import { useLocation, Outlet } from "react-router-dom";
import ScrollToHashElement from "./common/ScrollToHashElement";

const routes = [
  {
    path: "/",
    Component: RootShell,
    children: [
      {
        Component: WithHeaderAndFooter,
        children: mainPageRegistry
          .filter((p) => p.isVisible)
          .map((p) => {
            return {
              path: p.page.url,
              Component: p.element,
            };
          }),
      },
      ...standalonePageRegistry
        .filter((p) => p.isVisible)
        .map((p) => {
          return {
            path: p.page.url,
            Component: p.element,
          };
        }),
    ],
  },
];

// const router = createBrowserRouter(routes);

function RootShell() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ScrollToHashElement />
        <Outlet />
      </ThemeProvider>
    </React.StrictMode>
  );
}

function WithHeaderAndFooter() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export const createRoot = ViteReactSSG({ routes });
