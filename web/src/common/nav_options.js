import FeatureFlags from "infra/feature_flags";
import * as pages from "./pages";

const BrowseOptions = cleanUpOptionsList([
  FeatureFlags.showMenuOptions && pages.Home,
  FeatureFlags.showScheduleTab && pages.Schedule,
  FeatureFlags.showAboutTab && pages.About,
]);

const PolicyOptions = cleanUpOptionsList([
  FeatureFlags.showHealthTab && pages.Health,
  FeatureFlags.showCodeOfConductTab && pages.Code,
]);

const NavOptions = cleanUpOptionsList([
  ...BrowseOptions,
  ...PolicyOptions,
  FeatureFlags.showContactTab && pages.Contact,
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

export { BrowseOptions, PolicyOptions, NavOptions };
