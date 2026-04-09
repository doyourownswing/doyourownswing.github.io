import {
  MONTH_YEAR_FORMAT,
  WEEKLY_COST,
} from "@/components/admin/analytics/consts";
import { extractDataIntoMonths } from "@/components/admin/analytics/monthly_aggregator";
import {
  getNumThursdaysLeftInCurrentMonth,
  prettyPrintDate,
} from "@/components/admin/analytics/utils";
import { formatDate } from "@/utils/date_utils";
import dayjs from "dayjs";

export default function calculateTotalWeeklyProfit(stats) {
  let calculator = new WeeklyTotalProfitCalculator(stats);

  return calculator.calculate();
}

/// Calculates total weekly profit including sponsors.
///
/// Note: this will assume and extrapolate about how many thursdays in the current month.
class WeeklyTotalProfitCalculator {
  currentMonthString = formatDate(dayjs(new Date()), MONTH_YEAR_FORMAT);

  constructor(stats) {
    this.stats = stats;
  }

  calculate() {
    let monthlyDetails = extractDataIntoMonths(this.stats);

    let computedWeeklyStats = [];

    for (let month of monthlyDetails) {
      let computedWeekStats =
        month.monthAndYear === this.currentMonthString
          ? this.calculateWeeklyDataForCurrentMonth(month)
          : this.calculateWeeklyDataForCompletedMonth(month);

      computedWeeklyStats.push(...computedWeekStats);
    }

    return computedWeeklyStats;
  }

  calculateWeeklyDataForCompletedMonth(monthlyDetails) {
    let avgSponsorshipPerWeek =
      monthlyDetails.sponsorAmount / monthlyDetails.weeklyStats.length;

    return this.calculateWeeklyDataGivenAvgWeeklySponsorship(
      monthlyDetails.weeklyStats,
      avgSponsorshipPerWeek
    );
  }

  calculateWeeklyDataForCurrentMonth(monthlyDetails) {
    let avgSponsorshipPerWeek =
      monthlyDetails.sponsorAmount /
      (monthlyDetails.weeklyStats.length + getNumThursdaysLeftInCurrentMonth());

    return this.calculateWeeklyDataGivenAvgWeeklySponsorship(
      monthlyDetails.weeklyStats,
      avgSponsorshipPerWeek
    );
  }

  calculateWeeklyDataGivenAvgWeeklySponsorship(
    weeklyStats,
    avgSponsorshipPerWeek
  ) {
    let weeklyData = [];

    for (let weekData of weeklyStats) {
      weeklyData.push({
        date: prettyPrintDate(weekData.date),
        profit:
          weekData.payment.totalAmountPaidAfterFees -
          WEEKLY_COST +
          avgSponsorshipPerWeek,
      });
    }

    return weeklyData;
  }
}
