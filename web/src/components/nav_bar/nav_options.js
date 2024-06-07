import FeatureFlags from "infra/feature_flags";

class NavOption {
  constructor(displayName, url, isCurrentPageFunction) {
    this.displayName = displayName;
    this.url = url;
    this.isCurrentPage = isCurrentPageFunction ?? this.defaultIsCurrentPage;
  }

  defaultIsCurrentPage() {
    return window.location.hash === this.url;
  }
}

function generateNavOptions() {
  let navOptions = [];

  if (FeatureFlags.showMenuOptions) {
    navOptions.push(
      new NavOption(
        "Home",
        "#/",
        () => window.location.hash === "#/" || window.location.hash === ""
      )
    );
  }

  if (FeatureFlags.showScheduleTab) {
    navOptions.push(new NavOption("Schedule", "#/schedule"));
  }

  if (FeatureFlags.showAboutTab) {
    navOptions.push(new NavOption("About us", "#/about"));
  }

  if (FeatureFlags.showHealthTab) {
    navOptions.push(new NavOption("Health protocol", "#/health"));
  }

  if (FeatureFlags.showCodeOfConductTab) {
    navOptions.push(new NavOption("Code of conduct", "#/code"));
  }

  if (FeatureFlags.showContactTab) {
    navOptions.push(new NavOption("Contact", "#/contact"));
  }

  return navOptions;
}

let navOptions = generateNavOptions();

export default navOptions;