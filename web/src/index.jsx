import React from "react";
import { ViteReactSSG } from "vite-react-ssg";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav_bar/nav_bar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/common/theme";
import "./index.css";
import { mainPageRegistry, standalonePageRegistry } from "./page_registry";
import { Outlet } from "react-router-dom";
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
          .map((p) => p.route),
      },
      ...standalonePageRegistry.filter((p) => p.isVisible).map((p) => p.route),
    ],
  },
];

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
