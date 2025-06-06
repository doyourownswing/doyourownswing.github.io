import { Box, Card, Container, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import pricingStyles from "./pricing.styles";
import messages from "./messages";
import DyosLink from "components/common/link";
import { Text } from "components/common/typography";
import { PurpleLogo } from "components/common/logos";

function NameYourPrice() {
  let nameYourPrice = messages.pricingOptions.nameYourPrice;

  return (
    <Grid2 xs={0.9} md={0.95} sx={pricingStyles.lesserCardContainer}>
      <Card sx={pricingStyles.lesserCardLeft}>
        <Box>
          <Typography variant="h6" sx={pricingStyles.cardTitle}>
            {nameYourPrice.title}
          </Typography>
          <Typography>{nameYourPrice.nameYourPrice}</Typography>
        </Box>
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
    <Grid2 xs={1} md={1.1} sx={pricingStyles.greaterCardContainer}>
      <Card sx={pricingStyles.greaterCard}>
        <Box>
          <Box sx={pricingStyles.sponsorTitleContainer}>
            <PurpleLogo />
            <Typography variant="h5" sx={pricingStyles.sponsorTitleText}>
              {sponsor.title}
            </Typography>
          </Box>
          <Typography>{sponsor.pay}</Typography>
        </Box>

        <Box sx={pricingStyles.costContainer}>
          <Text sx={pricingStyles.cost}>{sponsor.cost}</Text>
          <Text sx={pricingStyles.costUnit}>{sponsor.costUnit}</Text>
        </Box>
        <Box sx={pricingStyles.cardContentSubContainer}>
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
    <Grid2 xs={0.9} md={0.95} sx={pricingStyles.lesserCardContainer}>
      <Card sx={pricingStyles.lesserCardRight}>
        <Box>
          <Typography variant="h6" sx={pricingStyles.cardTitle}>
            {volunteer.title}
          </Typography>
          <Typography>{volunteer.details}</Typography>
        </Box>
        <Box sx={pricingStyles.costContainer}>
          <Text sx={pricingStyles.cost}>{volunteer.cost}</Text>
          <Text sx={pricingStyles.costUnit}>{volunteer.costUnit}</Text>
        </Box>
        <Box sx={pricingStyles.cardContentSubContainer}>
          <Box>
            <Typography>{volunteer.halfShift}</Typography>
            <Typography>{volunteer.fullShift}</Typography>
          </Box>
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
          <Typography variant="h6" sx={pricingStyles.subtitle}>
            {messages.subtitle}
          </Typography>
          <Typography variant="h3" sx={pricingStyles.title}>
            {messages.title}
          </Typography>
          <Typography variant="subtitle1" sx={pricingStyles.subSubTitle}>
            {messages.description}
          </Typography>
        </Box>
        <Box>
          <Grid2
            container
            columns={{ xs: 1, md: 3 }}
            sx={pricingStyles.cardsContainer}
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
