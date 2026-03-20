import theme from "@/common/theme";
import analyticsStyles from "@/components/admin/analytics/analytics.styles";
import calculateTotalMonthlyProfit from "@/components/admin/analytics/total_monthly_profit_calculator";
import calculateTotalWeeklyProfit from "@/components/admin/analytics/total_weekly_profit_calculator";
import {
  dateStringToMonth,
  prettyPrintDate,
} from "@/components/admin/analytics/utils";
import DyosCard from "@/components/common/card";
import { Box, Grid, Typography } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";

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
  let computedData = calculateTotalWeeklyProfit(props.data);

  const xLabels = computedData.map((d) => d.date);
  const weeklyProfit = computedData.map((d) => d.profit);

  return (
    <Grid size={1}>
      <DyosCard>
        <Box sx={analyticsStyles.chartTitleContainer}>
          <Typography variant="h6" sx={analyticsStyles.chartTitle}>
            Weekly profit
          </Typography>
          <Typography variant="subtitle" sx={analyticsStyles.chartSubtitle}>
            Accounting for sponsors (extrapolating for current month)
          </Typography>
        </Box>
        <LineChart
          height={300}
          series={[{ data: weeklyProfit, label: "Profit" }]}
          xAxis={[{ scaleType: "point", data: xLabels, height: 28 }]}
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
  let computedData = calculateTotalMonthlyProfit(props.data);
  console.log(computedData);

  const xLabels = computedData.map((d) => d.month);
  const monthlyTotals = computedData.map((d) => d.profit);

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
