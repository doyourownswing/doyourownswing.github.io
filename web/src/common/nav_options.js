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

const BrowseOptions = [
  FeatureFlags.showMenuOptions && HomeNav,
  FeatureFlags.showAboutTab && ScheduleNav,
  FeatureFlags.showScheduleTab && AboutNav,
];

const PolicyOptions = [
  FeatureFlags.showHealthTab && HealthNav,
  FeatureFlags.showCodeOfConductTab && CodeNav,
];

const NavOptions = [
  ...BrowseOptions,
  ...PolicyOptions,
  FeatureFlags.showContactTab && ContactNav,
];

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
