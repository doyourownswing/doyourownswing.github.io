import { formatDate } from "@/utils/date_utils";
import dayjs from "dayjs";

export const prettyPrintDate = (dateString) => {
  return formatDate(dayjs(new Date(dateString)), "MMM D, YYYY");
};
