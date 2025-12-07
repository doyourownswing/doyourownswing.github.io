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
  // We should only set this to true when we are showing at least one other page.
  showMenuOptions: true,
  showScheduleTab: true,
  showAboutTab: isDevel(),
  showHealthTab: isDevel(),
  showCodeOfConductTab: isDevel(),
  showContactTab: true,
  showStartHerePage: true,
  useHeroV2: true,
  // Enable the merch section once the initial set of shirts are added to https://doyourownswing.printful.me/
  showMerchSection: true,
};

export default FeatureFlags;
