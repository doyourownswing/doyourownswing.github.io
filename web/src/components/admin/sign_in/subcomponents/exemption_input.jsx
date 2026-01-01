import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import signInStyles from "../sign_in.styles";
import { EXEMPTION } from "@/components/admin/sign_in/constants";
import messages from "@/components/admin/sign_in/messages";

function ExemptionInput(props) {
  function createMenuItem(exemptionType, key) {
    return (
      <MenuItem value={exemptionType} key={key} sx={signInStyles.dropdownItem}>
        {exemptionType}
      </MenuItem>
    );
  }

  return (
    <Box sx={signInStyles.inputContainer}>
      <FormControl>
        <InputLabel id="exemption-label">{messages.exemptionLabel}</InputLabel>
        <Select
          labelId="exemption-label"
          value={props.value}
          label="Exemption"
          onChange={props.onSelectExemption}
          sx={signInStyles.input}
        >
          {Object.values(EXEMPTION).map((e, i) => createMenuItem(e, i))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ExemptionInput;
