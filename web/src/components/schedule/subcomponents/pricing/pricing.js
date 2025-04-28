import { Box, Card, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import pricingStyles from "./pricing.styles";

function PricingOptionCard() {
  return (
    <Grid2 xs={1}>
      <Card>
        <Box>hello</Box>
      </Card>
    </Grid2>
  );
}

function Pricing() {
  return (
    <Box sx={pricingStyles.container}>
      <Container>
        <Box>
          <Typography>Pricing</Typography>
          <Typography>Choose what you pay</Typography>
          <Typography>At dyos we prioritize inclusion over profit</Typography>
        </Box>
        <Box>
          <Grid2
            container
            columns={{ xs: 1, md: 3 }}
            spacing={{ xs: 2, md: 1, lg: 4 }}
          >
            <PricingOptionCard></PricingOptionCard>
            <PricingOptionCard></PricingOptionCard>
            <PricingOptionCard></PricingOptionCard>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
