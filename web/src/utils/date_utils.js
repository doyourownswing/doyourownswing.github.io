import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

/**
 * Converts a dayjs date into a human-readable string.
 *
 * i.e. "Thursday, May 23, 2024"
 */
function dateToHumanReadableString(date) {
  return date.format("dddd, MMM D, YYYY");
}

function formatDate(date, format) {
  return date.format(format);
}

/** Util for creating a dayjs date from string formatted "MM/DD/YYYY". */
function createDate(dateString) {
  if (dateString.length !== 10) {
    throw new Error("DATE STRING FORMAT INVALID: " + dateString);
  }

  return dayjs(dateString, "MM/DD/YYYY");
}

function getBeginningOfTodayDate() {
  return dayjs(new Date().setHours(0, 0, 0, 0));
}

export {
  dateToHumanReadableString,
  formatDate,
  createDate,
  getBeginningOfTodayDate,
};
