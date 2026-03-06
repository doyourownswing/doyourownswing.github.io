import theme from "@/common/theme";
import analyticsStyles from "@/components/admin/analytics/analytics.styles";
import {
  dateStringToMonth,
  getNumThursdaysInMonth,
  prettyPrintDate,
} from "@/components/admin/analytics/utils";
import DyosCard from "@/components/common/card";
import { formatDate } from "@/utils/date_utils";
import { Box, Grid, Typography } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";
import dayjs from "dayjs";

const WEEKLY_COST = 660;

function TotalWeeklyMoney(props) {
  let data = props.data.weeklyStats;

  const xLabels = data.map((d) => prettyPrintDate(d.date));
  const weeklyRevenue = data.map((d) => d.payment.totalAmountPaid);

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Weekly revenue
          </Typography>
          <Typography variant="subtitle" sx={analyticsStyles.chartSubtitle}>
            Excludes sponsors and payment method fees
          </Typography>
        </Box>
        <LineChart
          height={300}
          series={[{ data: weeklyRevenue, label: "Revenue" }]}
          xAxis={[{ scaleType: "point", data: xLabels, height: 28 }]}
          yAxis={[{ min: 0 }]}
          margin={{ right: 64 }}
        />
      </DyosCard>
    </Grid>
  );
}

function PaymentMethods(props) {
  let data = props.data.weeklyStats;

  const xLabels = data.map((d) => prettyPrintDate(d.date));
  const cash = data.map((d) => d.payment.totalPaidByCash);
  const zelle = data.map((d) => d.payment.totalPaidByZelle);
  const venmo = data.map((d) => d.payment.totalPaidByVenmo);
  const paypal = data.map((d) => d.payment.totalPaidByPayPal);

  const colors = [
    theme.palette.charts.cash,
    theme.palette.charts.zelle,
    theme.palette.charts.venmo,
    theme.palette.charts.paypal,
  ];

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Payment methods
          </Typography>
          <Typography variant="subtitle" sx={analyticsStyles.chartSubtitle}>
            Excludes sponsors and payment method fees
          </Typography>
        </Box>
        <BarChart
          height={300}
          series={[
            { data: cash, label: "Cash", id: "Cash" },
            { data: zelle, label: "Zelle", id: "Zelle" },
            { data: venmo, label: "Venmo", id: "Venmo" },
            { data: paypal, label: "PayPal", id: "PayPal" },
          ]}
          colors={colors}
          xAxis={[{ data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
        />
      </DyosCard>
    </Grid>
  );
}

function TotalWeeklyProfit(props) {
  let data = props.data.weeklyStats;

  const xLabels = data.map((d) => prettyPrintDate(d.date));
  const weeklyProfit = data.map(
    (d) => d.payment.totalAmountPaidAfterFees - WEEKLY_COST
  );

  const maxDeviation = Math.max(...weeklyProfit.map((r) => Math.abs(r)));

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Weekly profit
          </Typography>
          <Typography variant="subtitle" sx={analyticsStyles.chartSubtitle}>
            Excludes sponsors
          </Typography>
        </Box>
        <LineChart
          height={300}
          series={[{ data: weeklyProfit, label: "Profit" }]}
          xAxis={[{ scaleType: "point", data: xLabels, height: 28 }]}
          yAxis={[{ min: maxDeviation * -1.1 }]}
          margin={{ right: 64 }}
        />
      </DyosCard>
    </Grid>
  );
}

function Sponsors(props) {
  let data = props.data.sponsorStats;

  const xLabels = data.map((d) => dateStringToMonth(d.date));
  const sponsorTotal = data.map((d) => d.amount);

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Monthly sponsors
          </Typography>
        </Box>
        <BarChart
          height={300}
          series={[{ data: sponsorTotal, label: "Sponsors", id: "Sponsors" }]}
          xAxis={[{ data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
        />
      </DyosCard>
    </Grid>
  );
}

function MonthlyProfit(props) {
  let data = props.data;
  // TODO refactor this plz

  let monthlyProfit = new Map();

  // Aggregate weekly totals into monthly
  for (let week of data.weeklyStats) {
    let monthString = formatDate(dayjs(week.date).date(1), "MMM, YYYY");

    let newValue =
      monthlyProfit.getOrInsert(monthString, 0) +
      week.payment.totalAmountPaidAfterFees -
      WEEKLY_COST;
    monthlyProfit.set(monthString, newValue);
  }

  for (let [key, value] of monthlyProfit) {
    let monthDate = dayjs(key);
    let sponsorStats = data.sponsorStats.find((s) => {
      let sponsorDate = dayjs(s.date);
      return (
        sponsorDate.month() === monthDate.month() &&
        sponsorDate.year() === monthDate.year()
      );
    });

    let sponsorAmount = sponsorStats ? sponsorStats.amount : 0;
    let newValue = value + sponsorAmount;

    monthlyProfit.set(key, newValue);
  }

  // note: we don't get charged for the weeks we don't have DYOS

  const xLabels = [...monthlyProfit.keys()];
  const monthlyTotals = [...monthlyProfit.values()];

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Monthly profit
          </Typography>
        </Box>
        <BarChart
          height={300}
          series={[{ data: monthlyTotals, label: "Profit", id: "Profit" }]}
          xAxis={[{ data: xLabels, height: 28 }]}
          yAxis={[{ width: 50 }]}
        />
      </DyosCard>
    </Grid>
  );
}

function Payment(props) {
  let data = props.data;

  return (
    <Box>
      <Typography sx={analyticsStyles.sectionSubtitle}>
        How and how much
      </Typography>
      <Typography variant="h4" sx={analyticsStyles.sectionTitle}>
        Payment
      </Typography>
      <Grid
        container
        columns={{ xs: 1, lg: 2 }}
        spacing={4}
        sx={analyticsStyles.sectionContentContainer}
      >
        <TotalWeeklyMoney data={data} />
        <PaymentMethods data={data} />
        <Sponsors data={data} />
        <TotalWeeklyProfit data={data} />
        <MonthlyProfit data={data} />
      </Grid>
    </Box>
  );
}

export default Payment;
