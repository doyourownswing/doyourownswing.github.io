import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import signInStyles from "../sign_in.styles";
import { PAYMENT_OPTIONS } from "@/components/admin/sign_in/constants";
import messages from "@/components/admin/sign_in/messages";
import { validateMoneyValue } from "@/components/admin/sign_in/utils";

function PaymentInput(props) {
  let required = props.required;

  return (
    <Box sx={signInStyles.inputContainer}>
      <Box sx={signInStyles.paymentContainer}>
        <FormControl required={required}>
          <FormLabel id="payment-method-label">
            {messages.paymentMethodLabel}
          </FormLabel>

          <RadioGroup
            row
            aria-labelledby="payment-method-label"
            name="payment-method"
            value={props.paymentMethodValue}
            onChange={props.onSelectPaymentMethod}
          >
            {Object.values(PAYMENT_OPTIONS).map((o) => (
              <FormControlLabel key={o} value={o} control={<Radio />} label={o}>
                {o}
              </FormControlLabel>
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl required={required}>
          <InputLabel htmlFor="payment-amount">
            {messages.paymentAmountLabel}
          </InputLabel>
          <OutlinedInput
            id="payment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label={messages.paymentAmountLabel}
            value={props.paymentAmountValue}
            onChange={props.onPaymentAmountChange}
            sx={signInStyles.paymentAmount}
            error={
              props.paymentAmountValue !== "" &&
              !validateMoneyValue(props.paymentAmountValue)
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default PaymentInput;
