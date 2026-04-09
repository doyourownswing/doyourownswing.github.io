import {
  MONTH_YEAR_FORMAT,
  WEEKLY_COST,
} from "@/components/admin/analytics/consts";
import { extractDataIntoMonths } from "@/components/admin/analytics/monthly_aggregator";
import { formatDate } from "@/utils/date_utils";
import dayjs from "dayjs";

export default function calculateTotalMonthlyProfit(stats) {
  let calculator = new MonthlyTotalProfitCalculator(stats);

  return calculator.calculate();
}

/// Calculates total Monthly profit including sponsors.
class MonthlyTotalProfitCalculator {
  currentMonthString = formatDate(dayjs(new Date()), MONTH_YEAR_FORMAT);

  constructor(stats) {
    this.stats = stats;
  }

  calculate() {
    let monthlyDetails = extractDataIntoMonths(this.stats);
    let computedMonthlyStats = [];

    // Note: we don't get charged for the weeks we don't have DYOS
    for (let month of monthlyDetails) {
      let profit =
        month.weeklyStats.reduce((total, current) => {
          return total + current.payment.totalAmountPaidAfterFees - WEEKLY_COST;
        }, 0) + month.sponsorAmount;

      computedMonthlyStats.push({ month: month.monthAndYear, profit: profit });
    }

    return computedMonthlyStats;
  }
}
