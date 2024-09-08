import * as pages from "common/pages.js";
import About from "components/about/about";
import CodeOfConduct from "components/code_of_conduct/code_of_conduct";
import Contact from "components/contact/contact";
import FeatureFlags from "infra/feature_flags";
import Health from "components/health/health";
import Home from "components/home/home";
import Schedule from "components/schedule/schedule";
import StartHere from "components/start_here/start_here";
import NotFound from "components/not_found/not_found";

class PageRegistrationInfo {
  constructor(page, isVisible, element) {
    this.page = page;
    this.isVisible = isVisible;
    this.element = element;
  }
}

const pageRegistry = [
  new PageRegistrationInfo(pages.Home, true, <Home />),
  new PageRegistrationInfo(pages.NotFound, true, <NotFound />),
  new PageRegistrationInfo(
    pages.Schedule,
    FeatureFlags.showScheduleTab,
    <Schedule />
  ),
  new PageRegistrationInfo(pages.About, FeatureFlags.showAboutTab, <About />),
  new PageRegistrationInfo(
    pages.Health,
    FeatureFlags.showHealthTab,
    <Health />
  ),
  new PageRegistrationInfo(
    pages.Code,
    FeatureFlags.showCodeOfConductTab,
    <CodeOfConduct />
  ),
  new PageRegistrationInfo(
    pages.Contact,
    FeatureFlags.showContactTab,
    <Contact />
  ),
  new PageRegistrationInfo(
    pages.StartHere,
    FeatureFlags.showStartHerePage,
    <StartHere />
  ),
];

// HashRouter automatically handles the hash so we can't have it as a part of the URL
const parseUrl = function (url) {
  if (url.startsWith("#")) {
    return url.slice(1);
  }

  return url;
};

/** The list of routes to include in the router based on the feature eligibility. */
const generatedRoutes = pageRegistry
  .filter((p) => p.isVisible)
  .map((p) => ({
    path: parseUrl(p.page.url),
    element: p.element,
  }));

export default generatedRoutes;
