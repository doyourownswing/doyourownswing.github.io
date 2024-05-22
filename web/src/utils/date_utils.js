const dayjs = require("dayjs");

/** Converts a javascript [Date] object into a human-readable string. */
function dateToHumanReadableString(date) {
  return dayjs(date).format("dddd, MMM D, YYYY");
}

export { dateToHumanReadableString };
