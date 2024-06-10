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
  showMenuOptions: isDevel(),
  showScheduleTab: isDevel(),
  showAboutTab: isDevel(),
  showHealthTab: isDevel(),
  showCodeOfConductTab: isDevel(),
  showContactTab: isDevel(),
  showStartHereTab: isDevel(),
};

export default FeatureFlags;
