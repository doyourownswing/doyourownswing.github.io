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
import Analytics from "@/components/admin/analytics/analytics";
import Links from "@/components/links/links";

class PageRegistrationInfo {
  constructor(page, isVisible, element) {
    this.page = page;
    this.isVisible = isVisible;
    this.element = element;
  }

  /** Return a partial react router v6 Route object. */
  get route() {
    return {
      path: this.page.url,
      Component: this.element,
    };
  }
}

// These pages display with both a header and footer.
// They're generally part of the main website navigation.
const mainPageRegistry = [
  new PageRegistrationInfo(pages.Home, true, Home),
  new PageRegistrationInfo(pages.NotFound, true, NotFound),
  new PageRegistrationInfo(
    pages.Schedule,
    FeatureFlags.showScheduleTab,
    Schedule,
  ),
  new PageRegistrationInfo(pages.About, FeatureFlags.showAboutTab, About),
  new PageRegistrationInfo(pages.Health, FeatureFlags.showHealthTab, Health),
  new PageRegistrationInfo(
    pages.Code,
    FeatureFlags.showCodeOfConductTab,
    CodeOfConduct,
  ),
  new PageRegistrationInfo(pages.Contact, FeatureFlags.showContactTab, Contact),
  new PageRegistrationInfo(
    pages.StartHere,
    FeatureFlags.showStartHerePage,
    StartHere,
  ),
  new PageRegistrationInfo(pages.Blog, FeatureFlags.showBlog, Blog),
];

// These pages display without a header or footer.
// They're generally only navigated to by URL.
const standalonePageRegistry = [
  new PageRegistrationInfo(pages.SignIn, true, SignIn),
  new PageRegistrationInfo(pages.Ipad, true, Ipad),
  new PageRegistrationInfo(pages.Analytics, true, Analytics),
  new PageRegistrationInfo(pages.Links, true, Links),
];

export { mainPageRegistry, standalonePageRegistry };
