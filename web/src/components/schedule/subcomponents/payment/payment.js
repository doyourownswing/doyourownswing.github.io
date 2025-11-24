import { Box, Container, Typography } from "@mui/material";
import paymentStyles from "./payment.styles";
import messages from "./messages";
import PaymentOptionDetails from "./payment_option_details";

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
        <Box sx={paymentStyles.paymentOptionsContainer}>
          <PaymentOptionDetails />
        </Box>
      </Container>
    </Box>
  );
}

export default Payment;
