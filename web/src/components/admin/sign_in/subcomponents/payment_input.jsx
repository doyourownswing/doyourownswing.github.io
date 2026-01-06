import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
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
          <InputLabel id="payment-method-label">
            {messages.paymentMethodLabel}
          </InputLabel>
          <Select
            labelId="payment-method-label"
            value={props.paymentMethodValue}
            label="Payment method"
            onChange={props.onSelectPaymentMethod}
            sx={signInStyles.input}
          >
            <MenuItem value="">
              <em>{messages.none}</em>
            </MenuItem>
            {Object.values(PAYMENT_OPTIONS).map((o) => (
              <MenuItem value={o}>{o}</MenuItem>
            ))}
          </Select>
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
