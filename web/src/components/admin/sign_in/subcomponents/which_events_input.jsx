import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import signInStyles from "../sign_in.styles";
import { EVENTS } from "@/components/admin/sign_in/constants";
import messages from "@/components/admin/sign_in/messages";

function WhichEvents(props) {
  // If social only is checked, uncheck all other options.
  // If any other option is check, uncheck social only
  const handleChange = (event) => {
    let didClickSocialOnly = event.target.name === EVENTS.SOCIAL_ONLY.id;

    let newVal = {};
    for (const key in EVENTS) {
      newVal[key] = didClickSocialOnly ? false : props.value[key];
    }
    newVal[event.target.name] = event.target.checked;

    if (!didClickSocialOnly && event.target.checked) {
      newVal[EVENTS.SOCIAL_ONLY.id] = false;
    }

    props.onSetEventsAttendingChange(newVal);
  };

  return (
    <Box sx={signInStyles.inputContainer}>
      <FormControl component="fieldset" variant="standard" required>
        <FormLabel component="legend" sx={signInStyles.formHeader}>
          {messages.whichClassesHeader}
        </FormLabel>
        <FormGroup sx={signInStyles.eventsCheckboxGroup}>
          {Object.values(EVENTS).map((v) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.value[v.id]}
                    onChange={handleChange}
                    name={v.id}
                  />
                }
                label={v.displayName}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default WhichEvents;
