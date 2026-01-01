import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import signInStyles from "../sign_in.styles";
import SignInService from "../sign_in_service";
import { Refresh } from "@mui/icons-material";
import { sortPeopleAlphabetically } from "../utils";
import { DATA_STATE } from "@/components/admin/sign_in/constants";
import messages from "@/components/admin/sign_in/messages";

function PersonInput(props) {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState(DATA_STATE.NOT_STARTED);

  useEffect(() => {
    // If data is already being fetched, exit early
    if (dataState !== DATA_STATE.NOT_STARTED) return;

    const fetchPeopleData = async () => {
      setDataState(DATA_STATE.IN_PROGRESS);

      try {
        let people = await SignInService.fetchPeople();

        let peopleOptions = sortPeopleAlphabetically(people).map((p) => {
          let displayText = p.sponsor ? `${p.name} (sponsor)` : p.name;
          return { label: displayText, name: p.name };
        });

        setData(peopleOptions);
        setDataState(DATA_STATE.COMPLETE);
      } catch (e) {
        console.log(e);
        setDataState(DATA_STATE.ERROR);
      }
    };

    fetchPeopleData();
  }, [dataState]);

  function onClickRefresh() {
    setDataState(DATA_STATE.NOT_STARTED);
  }

  let isLoading = dataState === DATA_STATE.IN_PROGRESS;
  let isLoaded = dataState === DATA_STATE.COMPLETE;
  let hasError = dataState === DATA_STATE.ERROR;
  let canRefresh = isLoaded || hasError;

  // TODO upon selecting sponsor / volunteer, autopopulate fields
  // TODO include data like whether someone is already checked in today
  // TODO add a section below the input showing person details, if any

  return (
    <Box sx={signInStyles.inputContainer}>
      <Box sx={signInStyles.personSectionHeader}>
        <Typography sx={signInStyles.personSectionHeaderText}>
          {messages.personsCheckinHeader}
        </Typography>
        {isLoading && (
          <Box sx={signInStyles.loadingSpinner}>
            <CircularProgress size="1.25rem" />
          </Box>
        )}
        {canRefresh && (
          <Button
            onClick={onClickRefresh}
            startIcon={<Refresh />}
            variant="outlined"
            size="small"
          >
            {messages.refreshOptions}
          </Button>
        )}
      </Box>
      {hasError && <Typography>{messages.refreshError}</Typography>}
      <Autocomplete
        multiple
        options={data}
        sx={signInStyles.personInput}
        renderInput={(params) => (
          <TextField {...params} label={messages.personsLabel} required />
        )}
        disabled={!isLoaded}
        value={props.selectedPeople}
        onChange={(_, newValue) => props.onPeopleSelected(newValue)}
      />
    </Box>
  );
}

export default PersonInput;
