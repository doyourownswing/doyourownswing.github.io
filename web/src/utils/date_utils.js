const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

/**
 * Converts a dayjs date into a human-readable string.
 *
 * i.e. "Thursday, May 23, 2024"
 */
function dateToHumanReadableString(date) {
  return date.format("dddd, MMM D, YYYY");
}

/** Util for creating a dayjs date from string formatted "MM/DD/YYYY". */
function createDate(dateString) {
  return dayjs(dateString, "MM/DD/YYYY");
}

export { dateToHumanReadableString, createDate };
