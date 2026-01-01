import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import signInStyles from "../sign_in.styles";
import { EVENTS } from "@/components/admin/sign_in/constants";
import messages from "@/components/admin/sign_in/messages";

function WhichEvents(props) {
  const [events, setEvents] = useState({
    [EVENTS.L1.id]: false,
    [EVENTS.L2.id]: false,
    [EVENTS.L3.id]: false,
    [EVENTS.L4.id]: false,
    [EVENTS.SOCIAL_ONLY.id]: false,
  });

  // If social only is checked, uncheck all other options.
  // If any other option is check, uncheck social only
  const handleChange = (event) => {
    let didClickSocialOnly = event.target.name === EVENTS.SOCIAL_ONLY.id;

    let newVal = {};
    for (const key in events) {
      newVal[key] = didClickSocialOnly ? false : events[key];
    }
    newVal[event.target.name] = event.target.checked;

    if (!didClickSocialOnly && event.target.checked) {
      newVal[EVENTS.SOCIAL_ONLY.id] = false;
    }

    setEvents(newVal);
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
                    checked={events[v.id]}
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
