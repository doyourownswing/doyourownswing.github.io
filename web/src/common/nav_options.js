import FeatureFlags from "infra/feature_flags";

class NavOption {
  constructor(displayName, url, isCurrentPageFunction) {
    this.displayName = displayName;
    this.url = url;
    this.isCurrentPage =
      isCurrentPageFunction ?? (() => window.location.hash === this.url);
  }
}

const HomeNav = new NavOption(
  "Home",
  "#/",
  () => window.location.hash === "#/" || window.location.hash === ""
);
const ScheduleNav = new NavOption("Schedule", "#/schedule");
const AboutNav = new NavOption("About us", "#/about");
const HealthNav = new NavOption("Health protocol", "#/health");
const CodeNav = new NavOption("Code of conduct", "#/code");
const ContactNav = new NavOption("Contact", "#/contact");

// Nav Option Groups

const BrowseOptions = cleanUpOptionsList([
  FeatureFlags.showMenuOptions && HomeNav,
  FeatureFlags.showScheduleTab && ScheduleNav,
  FeatureFlags.showAboutTab && AboutNav,
]);

const PolicyOptions = cleanUpOptionsList([
  FeatureFlags.showHealthTab && HealthNav,
  FeatureFlags.showCodeOfConductTab && CodeNav,
]);

const NavOptions = cleanUpOptionsList([
  ...BrowseOptions,
  ...PolicyOptions,
  FeatureFlags.showContactTab && ContactNav,
]);

/**
 * Returns a clean list of NavOptions.
 *
 * `FeatureFlag.myFlag && MyItem` will return `false`, instead of being excluded from arrays.
 *  Strips out any false values.
 */
function cleanUpOptionsList(list) {
  return list.filter((i) => i);
}

export {
  HomeNav,
  ScheduleNav,
  AboutNav,
  HealthNav,
  CodeNav,
  ContactNav,
  BrowseOptions,
  PolicyOptions,
};

export default NavOptions;
