import * as pages from "@/common/pages.js";
import About from "@/components/about/about";
import CodeOfConduct from "@/components/code_of_conduct/code_of_conduct";
import Contact from "@/components/contact/contact";
import FeatureFlags from "@/infra/feature_flags";
import Health from "@/components/health/health";
import Home from "@/components/home/home";
import Schedule from "@/components/schedule/schedule";
import StartHere from "@/components/start_here/start_here";
import NotFound from "@/components/not_found/not_found";
import SignIn from "@/components/admin/sign_in/sign_in";
import Ipad from "@/components/admin/ipad/ipad";
import Blog from "@/components/blog/blog";

class PageRegistrationInfo {
  constructor(page, isVisible, element, overrides) {
    this.page = page;
    this.isVisible = isVisible;
    this.element = element;
    this.overrides = overrides;
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
  new PageRegistrationInfo(pages.Blog, FeatureFlags.showBlog, <Blog />),
  new PageRegistrationInfo(pages.SignIn, true, <SignIn />, {
    navBarOverrides: {
      showNavBar: false,
    },
  }),
  new PageRegistrationInfo(pages.Ipad, true, <Ipad />, {
    navBarOverrides: {
      showNavBar: false,
    },
    showFooter: false,
  }),
];
/** The list of routes to include in the router based on the feature eligibility. */
const generatedRoutes = pageRegistry
  .filter((p) => p.isVisible)
  .map((p) => ({
    // Fields used by router
    path: p.page.url,
    element: p.element,
    // Fields not used by router
    page: p.page,
    overrides: p.overrides,
  }));

class Overrides {
  static shouldShowNavBar(overrides) {
    // default to showing nav bar
    if (!overrides || !overrides.navBarOverrides) return true;

    return overrides.navBarOverrides.showNavBar ?? true;
  }

  static shouldShowFooter(overrides) {
    // default to showing footer
    if (!overrides) return true;

    return overrides.showFooter ?? true;
  }
}

export { generatedRoutes, Overrides };
