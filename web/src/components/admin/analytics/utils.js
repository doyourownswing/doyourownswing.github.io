import { MONTH_YEAR_FORMAT } from "@/components/admin/analytics/consts";
import { formatDate } from "@/utils/date_utils";
import dayjs from "dayjs";

export const prettyPrintDate = (dateString) =>
  formatDate(dayjs(new Date(dateString)), "MMM D, YYYY");

export const dateStringToMonth = (dateString) =>
  formatDate(dayjs(new Date(dateString)), "MMM");

export const getNumThursdaysInMonth = (month, year) => {
  let count = 0;
  var thursday = dayjs(new Date(year, month, 1)).day(4);

  // Loop while the month is still the target month.
  while (thursday.month() === month) {
    count++;

    // Move to the next thursday.
    thursday = thursday.date(thursday.date() + 7);
  }

  return count;
};

export const getNumThursdaysLeftInCurrentMonth = () => {
  let count = 0;
  let month = dayjs(new Date()).month();

  // starting from tomorrow
  var currentDate = dayjs(new Date()).add(1, "day");

  // Loop while the month is still the target month.
  while (currentDate.month() === month) {
    if (currentDate.day() == 4) {
      count++;
    }

    // Move to the next thursday.
    currentDate = currentDate.add(1, "day");
  }

  return count;
};

export function isoDateStringToMonthYearString(isoDateString) {
  return formatDate(dayjs(isoDateString), MONTH_YEAR_FORMAT);
}
