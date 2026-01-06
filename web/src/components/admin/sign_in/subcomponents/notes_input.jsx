import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import signInStyles from "../sign_in.styles";
import messages from "@/components/admin/sign_in/messages";

function NotesInput(props) {
  let required = props.required;

  return (
    <Box sx={signInStyles.inputContainer}>
      <FormControl required={required}>
        <InputLabel htmlFor="additional-notes">
          {messages.additionalNotesLabel}
        </InputLabel>
        <OutlinedInput
          id="additional-notes"
          label={messages.additionalNotesLabel}
          multiline
          sx={signInStyles.additionalNotesInput}
          rows={4}
          value={props.value}
          onChange={props.onSetAdditionalNotes}
        />
      </FormControl>
    </Box>
  );
}

export default NotesInput;
