import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import paymentStyles from "./payment.styles";
import messages from "./messages";
import DyosCard from "components/common/card";
import ZelleLogo from "assets/images/payment_logos/zelle-logo.png";
import VenmoLogo from "assets/images/payment_logos/venmo-logo.png";
import PaypalLogo from "assets/images/payment_logos/paypal-logo.png";
import Callout from "components/common/callout";
import QRCode from "react-qr-code";

const ZELLE_DATA = {
  title: ZelleLogo,
  titleAltText: "Zelle",
  titleStyles: { height: "3.5rem" },
  isPreferred: true,
  link: "https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiTWljaGVsbGUiLCJhY3Rpb24iOiJwYXltZW50IiwidG9rZW4iOiJzaGFyZWRzd2luZ3NwYWNlc0BnbWFpbC5jb20ifQ==",
  associatedAccount: "SharedSwingSpaces@gmail.com",
  footer: "Scan QR code using your preferred banking app to open Zelle",
};

const CASH_DATA = {
  title: "bepis",
  titleAltText: "Cash",
  isPreferred: true,
  content: [
    "Pay with cash at the front desk.",
    "Name your price at the door! (See chart above for details)",
  ],
};

const VENMO_DATA = {
  title: VenmoLogo,
  titleAltText: "Venmo",
  titleStyles: { height: "2.5rem" },
  isPreferred: false,
  link: "https://www.paypal.com/qrcodes/venmocs/fd351a61-a82e-437a-a889-e04c33f204b9",
  associatedAccount: "@riley-wcs",
  buttonText: "Open Venmo",
  buttonColor: "#008cff",
};

const PAYPAL_DATA = {
  title: PaypalLogo,
  titleAltText: "PayPal",
  titleStyles: { height: "3rem" },
  isPreferred: false,
  link: "https://www.paypal.com/qrcodes/managed/767fb6d3-a9ce-4cd8-bb74-2e3b2760b8e8",
  associatedAccount: "SharedSwingSpaces@gmail.com",
  buttonText: "Open PayPal",
  buttonColor: "#002b87",
};

function PreferredEmbellishment() {
  return <Box sx={paymentStyles.embellishment}>Preferred</Box>;
}

function PaymentOption(props) {
  let data = props.data;

  let titleLogoStyles = { ...paymentStyles.logo, ...data.titleStyles };

  return (
    <Grid2 xs={1}>
      <DyosCard sx={paymentStyles.card}>
        {data.isPreferred && <PreferredEmbellishment />}
        <Stack sx={paymentStyles.cardContent}>
          <Box>
            <Typography>{messages.payUsing}</Typography>
            <Box
              component="img"
              src={data.title}
              sx={titleLogoStyles}
              alt={data.titleAltText}
            />
          </Box>
          <Box sx={paymentStyles.cardBody}>
            <QRCode style={paymentStyles.qrCode} value={data.link}></QRCode>
            <Typography>{data.associatedAccount}</Typography>
          </Box>
          {!!data.buttonText && (
            <Box sx={paymentStyles.cardButton}>
              <Button
                href={data.link}
                sx={paymentStyles.buildButtonStyles(data.buttonColor)}
                variant="outlined"
              >
                {data.buttonText}
              </Button>
            </Box>
          )}
          {!!data.footer && (
            <Typography sx={paymentStyles.footer}>{data.footer}</Typography>
          )}
        </Stack>
      </DyosCard>
    </Grid2>
  );
}

function CashOption() {
  return (
    <Grid2 xs={1}>
      <DyosCard sx={paymentStyles.card}>
        <PreferredEmbellishment />
        <Stack sx={paymentStyles.cardContent}>
          <Box>
            <Typography>{messages.payUsing}</Typography>
            <Typography variant="h3" sx={paymentStyles.cashTitle}>
              Cash
            </Typography>
          </Box>
          <Box>
            <Typography sx={paymentStyles.dollarSign}>$</Typography>
          </Box>
          <Box sx={paymentStyles.cardBody}>
            <Typography sx={paymentStyles.footer}>
              Name your price and pay with cash at the front desk!
            </Typography>
            <Typography>(See chart above for details)</Typography>
          </Box>
        </Stack>
      </DyosCard>
    </Grid2>
  );
}

function Payment() {
  return (
    <Box sx={paymentStyles.container}>
      <Container>
        <Box sx={paymentStyles.titleContainer}>
          <Typography variant="h6" sx={paymentStyles.subtitle}>
            {messages.subtitle}
          </Typography>
          <Typography variant="h3" sx={paymentStyles.title}>
            {messages.title}
          </Typography>
        </Box>
        <Box sx={paymentStyles.cardsContainer}>
          <Grid2 container columns={{ xs: 1, md: 2 }} spacing={4}>
            <PaymentOption data={ZELLE_DATA} />
            <CashOption />
            <PaymentOption data={VENMO_DATA} />
            <PaymentOption data={PAYPAL_DATA} />
          </Grid2>
          <Callout>
            Note: Recipient account names may read "Do Your Own Swing", "Riley
            Crozier", or "Michelle Crozier".{" "}
          </Callout>
        </Box>
      </Container>
    </Box>
  );
}

export default Payment;
