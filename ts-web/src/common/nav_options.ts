import FeatureFlags from "infra/feature_flags";

// class NavOption {
//   constructor(displayName, url, isCurrentPageFunction) {
//     this.displayName = displayName;
//     this.url = url;
//     this.isCurrentPage =
//       isCurrentPageFunction ?? (() => window.location.hash === this.url);
//   }
// }

class NavOption {
  displayName: string;
  url: string;
  isCurrentPage: () => boolean;

  constructor(displayName: string, url: string, isCurrentPage?: () => boolean) {
    this.displayName = displayName;
    this.url = url;
    this.isCurrentPage = isCurrentPage ?? (() => window.location.hash === this.url);
  }
}

const HomeNav: NavOption = {
  displayName: "Home",
  url: "#/",
  isCurrentPage: () => window.location.hash === "#/" || window.location.hash === ""
};
const ScheduleNav: NavOption = new NavOption("Schedule", "#/schedule");
const AboutNav = new NavOption("About us", "#/about");
const HealthNav = new NavOption("Health protocol", "#/health");
const CodeNav = new NavOption("Code of conduct", "#/code");
const ContactNav = new NavOption("Contact", "#/contact");

const trimOptions = (options: (false | NavOption)[]) => options.filter(a => a) as NavOption[];

const NavOptions = trimOptions([
  FeatureFlags.showMenuOptions && HomeNav,
  FeatureFlags.showScheduleTab && ScheduleNav,
  FeatureFlags.showAboutTab && AboutNav,
  FeatureFlags.showHealthTab && HealthNav,
  FeatureFlags.showCodeOfConductTab && CodeNav,
  FeatureFlags.showContactTab && ContactNav,
]);

// Nav Option Groups

const BrowseOptions = trimOptions([
  FeatureFlags.showMenuOptions && HomeNav,
  FeatureFlags.showAboutTab && ScheduleNav,
  FeatureFlags.showScheduleTab && AboutNav,
]);

const PolicyOptions = trimOptions([
  FeatureFlags.showHealthTab && HealthNav,
  FeatureFlags.showCodeOfConductTab && CodeNav,
]);


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
