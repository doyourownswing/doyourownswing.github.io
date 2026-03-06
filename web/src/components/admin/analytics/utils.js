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
