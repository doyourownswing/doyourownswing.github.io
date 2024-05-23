/**
 * Converts a dayjs date into a human-readable string.
 *
 * i.e. "Thursday, May 23, 2024"
 */
function dateToHumanReadableString(date) {
  return date.format("dddd, MMM D, YYYY");
}

export { dateToHumanReadableString };
