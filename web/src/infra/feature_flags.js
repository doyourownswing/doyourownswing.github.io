/**
 * Determines whether to show a feature or not.
 *
 * Generally used to hide incomplete features in prod environments, and show them in devel.
 * When a feature is complete and be shown in prod, flip the value to true.
 */

function isDevel() {
  return process.env.NODE_ENV === "development";
}

const FeatureFlags = {
  showScheduleTab: true,
  showAboutTab: isDevel() || window.location.href.includes("about"),
  showHealthTab: isDevel(),
  showCodeOfConductTab: isDevel(),
  showContactTab: true,
  showStartHerePage: true,
  useHeroV2: true,
  showMerchSection: true,
  showBlog: isDevel(),
};

export default FeatureFlags;
