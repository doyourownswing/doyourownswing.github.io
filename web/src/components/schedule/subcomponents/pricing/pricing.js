import { Box, Card, Container, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import pricingStyles from "./pricing.styles";
import messages from "./messages";
import DyosLink from "components/common/link";
import { Text, Space } from "components/common/typography";

function NameYourPrice() {
  let nameYourPrice = messages.pricingOptions.nameYourPrice;

  return (
    <Grid2 xs={1} sx={pricingStyles.lesserCardContainer}>
      <Card sx={pricingStyles.lesserCardLeft}>
        <Box>
          <Typography variant="h6" sx={pricingStyles.title}>
            {nameYourPrice.title}
          </Typography>
          <Typography>{nameYourPrice.nameYourPrice}</Typography>
        </Box>
        {/* <Divider sx={pricingStyles.divider} /> */}
        <Box sx={pricingStyles.costContainer}>
          <Text sx={pricingStyles.cost}>{nameYourPrice.cost}</Text>
          <Text sx={pricingStyles.costUnit}>{nameYourPrice.costUnit}</Text>
        </Box>
        <Box sx={pricingStyles.cardContentSubContainer}>
          <Typography>{nameYourPrice.paymentOptions}</Typography>
          <Box>
            <Text>{nameYourPrice.suggestedPricing.beginning}</Text>
            <DyosLink>{nameYourPrice.suggestedPricing.link}</DyosLink>
            <Text>{nameYourPrice.suggestedPricing.end}</Text>
          </Box>
        </Box>
      </Card>
    </Grid2>
  );
}

function MonthlySponsor() {
  let sponsor = messages.pricingOptions.sponsor;

  return (
    <Grid2 xs={1} sx={pricingStyles.greaterCardContainer}>
      <Card sx={pricingStyles.greaterCard}>
        <Box>
          <Typography variant="h6">{sponsor.title}</Typography>
          <Typography variant="subtitle">{sponsor.cost}</Typography>
        </Box>
        <Divider sx={pricingStyles.divider} />
        <Box sx={pricingStyles.cardContentSubContainer}>
          <Typography>{sponsor.pay}</Typography>
          <Typography>{sponsor.list}</Typography>
          <Typography>{sponsor.thanks}</Typography>
        </Box>
        <Divider sx={pricingStyles.divider} />
        <Box sx={pricingStyles.cardContentFinePrintContainer}>
          <Typography sx={pricingStyles.finePrint}>
            {sponsor.charges}
          </Typography>
          <Typography sx={pricingStyles.finePrint}>
            {sponsor.prorated}
          </Typography>
          <Typography sx={pricingStyles.finePrint}>{sponsor.refund}</Typography>
        </Box>
      </Card>
    </Grid2>
  );
}

function Volunteer() {
  let volunteer = messages.pricingOptions.volunteer;

  return (
    <Grid2 xs={1} sx={pricingStyles.lesserCardContainer}>
      <Card sx={pricingStyles.lesserCardRight}>
        <Box>
          <Typography variant="h6">{volunteer.title}</Typography>
          <Typography variant="subtitle">{volunteer.cost}</Typography>
        </Box>
        <Divider sx={pricingStyles.divider} />
        <Box sx={pricingStyles.cardContentSubContainer}>
          <Typography>{volunteer.details}</Typography>
          <Typography>{volunteer.halfShift}</Typography>
          <Typography>{volunteer.fullShift}</Typography>
          <Box>
            <Text>{volunteer.link.beginning}</Text>
            <DyosLink>{volunteer.link.link}</DyosLink>
            <Text>{volunteer.link.end}</Text>
          </Box>
        </Box>
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
            // spacing={{ xs: 2, md: 1, lg: 4 }}
          >
            <NameYourPrice />
            <MonthlySponsor />
            <Volunteer />
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}

export default Pricing;
