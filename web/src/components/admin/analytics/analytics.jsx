import analyticsStyles from "@/components/admin/analytics/analytics.styles";
import AnalyticsService from "@/components/admin/analytics/analytics_service";
import Attendance from "@/components/admin/analytics/attendance";
import Payment from "@/components/admin/analytics/payment";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Loading() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography fontWeight="bold">Cronchin the nom noms...</Typography>
    </Box>
  );
}

function Stats(props) {
  let data = props.data;

  return (
    <Box>
      <Attendance data={data} />
      <Payment data={data} />
    </Box>
  );
}

function Analytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await AnalyticsService.fetchData());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={analyticsStyles.container}>
      <Container>
        {loading && <Loading />}
        {!loading && <Stats data={data} />}
      </Container>
    </Box>
  );
}

export default Analytics;
