import { Box, Checkbox, FormControlLabel } from "@mui/material";
import signInStyles from "../sign_in.styles";
import messages from "@/components/admin/sign_in/messages";

function MaskInput(props) {
  return (
    <Box sx={signInStyles.inputContainer}>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.checked}
            onChange={props.onMaskPurchaseChange}
          />
        }
        label={messages.maskLabel}
      />
    </Box>
  );
}

export default MaskInput;
