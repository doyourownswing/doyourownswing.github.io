import { isoDateStringToMonthYearString } from "@/components/admin/analytics/utils";

/// From the raw stats, group details by month, including weekly data and sponsored amounts.
function extractDataIntoMonths(stats) {
  // monthly details using the pretty print month string as a key
  let monthlyDetailsMap = new Map();

  // Split each of the weekly stats into a MonthlyDetails object
  for (let week of stats.weeklyStats) {
    let monthString = isoDateStringToMonthYearString(week.date);

    let monthlyDetails = monthlyDetailsMap.getOrInsertComputed(
      monthString,
      (_) => new MonthlyDetails(monthString)
    );

    monthlyDetails.weeklyStats.push(week);
  }

  let sponsorStats = stats.sponsorStats;

  // Add sponsored amount to month
  for (let [monthString, details] of monthlyDetailsMap) {
    let sponsorDatum = sponsorStats.find(
      (s) => monthString === isoDateStringToMonthYearString(s.date)
    );

    let sponsorAmount = !!sponsorDatum ? sponsorDatum.amount : 0;

    details.setSponsorAmount(sponsorAmount);
  }

  return monthlyDetailsMap.values();
}

class MonthlyDetails {
  monthAndYear;
  weeklyStats;

  constructor(monthString) {
    this.monthAndYear = monthString;
    this.weeklyStats = [];
  }

  setSponsorAmount(sponsoredAmount) {
    this.sponsorAmount = sponsoredAmount;
  }
}

export { extractDataIntoMonths };
