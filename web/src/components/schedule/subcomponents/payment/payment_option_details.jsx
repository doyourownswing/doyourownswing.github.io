import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import paymentStyles from "./payment.styles";
import messages from "./messages";
import DyosCard from "@/components/common/card";
import ZelleLogo from "@/assets/images/payment_logos/zelle-logo.png";
import VenmoLogo from "@/assets/images/payment_logos/venmo-logo.png";
import PaypalLogo from "@/assets/images/payment_logos/paypal-logo.png";
import Callout from "@/components/common/callout";
import QRCode from "react-qr-code";
import {
  PAYPAL_LINK,
  PAYPAL_QR_LINK,
  VENMO_LINK,
  VENMO_QR_LINK,
  ZELLE_LINK,
} from "@/common/constants";

const ZELLE_DATA = {
  title: ZelleLogo,
  titleAltText: messages.zelle,
  titleStyles: { height: "3.5rem" },
  isPreferred: true,
  qrCode: ZELLE_LINK,
  associatedAccount: messages.sharedSwingSpacesAccount,
  footer: messages.scanZelle,
  buttonText: messages.payWithZelle,
  buttonLink: ZELLE_LINK,
  buttonColor: "#6D1ED4", // Zelle logo color
};

const VENMO_DATA = {
  title: VenmoLogo,
  titleAltText: messages.venmo,
  titleStyles: { height: "2.5rem" },
  isPreferred: false,
  qrCode: VENMO_QR_LINK,
  associatedAccount: messages.venmoHandle,
  buttonText: messages.openVenmo,
  buttonLink: VENMO_LINK,
  buttonColor: "#008cff", // Venmo logo color
};

const PAYPAL_DATA = {
  title: PaypalLogo,
  titleAltText: messages.paypal,
  titleStyles: { height: "3rem" },
  isPreferred: false,
  qrCode: PAYPAL_QR_LINK,
  associatedAccount: messages.sharedSwingSpacesAccount,
  buttonText: messages.openPaypal,
  buttonLink: PAYPAL_LINK,
  buttonColor: "#002b87", // PayPal logo color
};

function PreferredEmbellishment() {
  return <Box sx={paymentStyles.embellishment}>{messages.preferred}</Box>;
}

function PaymentOption(props) {
  let data = props.data;

  let titleLogoStyles = { ...paymentStyles.logo, ...data.titleStyles };

  return (
    <Grid size={1}>
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
            <QRCode style={paymentStyles.qrCode} value={data.qrCode}></QRCode>
            <Typography>{data.associatedAccount}</Typography>
          </Box>
          {!!data.footer && (
            <Typography sx={paymentStyles.footer}>{data.footer}</Typography>
          )}
          {!!data.buttonText && (
            <Box sx={paymentStyles.cardButton}>
              <Button
                variant="outlined"
                sx={paymentStyles.buildButtonStyles(data.buttonColor)}
                href={data.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.buttonText}
              </Button>
            </Box>
          )}
        </Stack>
      </DyosCard>
    </Grid>
  );
}

function CashOption() {
  return (
    <Grid size={1}>
      <DyosCard sx={paymentStyles.card}>
        <PreferredEmbellishment />
        <Stack sx={paymentStyles.cardContent}>
          <Box>
            <Typography>{messages.payUsing}</Typography>
            <Typography variant="h3" sx={paymentStyles.cashTitle}>
              {messages.cash}
            </Typography>
          </Box>
          <Box>
            <Typography sx={paymentStyles.dollarSign}>$</Typography>
          </Box>
          <Box sx={paymentStyles.cardBody}>
            <Typography sx={paymentStyles.footer}>
              {messages.payWithCash}
            </Typography>
            <Typography>{messages.seeChart}</Typography>
          </Box>
        </Stack>
      </DyosCard>
    </Grid>
  );
}

function PaymentOptionDetails() {
  return (
    <Box sx={paymentStyles.cardsContainer}>
      <Grid container columns={{ xs: 1, md: 2 }} spacing={4}>
        <PaymentOption data={ZELLE_DATA} />
        <CashOption />
        <PaymentOption data={VENMO_DATA} />
        <PaymentOption data={PAYPAL_DATA} />
      </Grid>
      <Callout>{messages.accountsNote}</Callout>
    </Box>
  );
}

export default PaymentOptionDetails;
