// Note to self: we want to do this:
//
// https://www.youtube.com/watch?v=42R-fVmB4WM
// https://developers.google.com/apps-script/guides/web

// https://script.google.com/macros/s/AKfycbxpbsemRgN3vjFOkuR1UoUew3CNCWTe1oy_Uimutyig3Sj5Avtg4cg8gNGHmvaQcYrl/exec

import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DyosLink from "components/common/link";
import { useEffect, useState } from "react";
import signInStyles from "./sign_in.styles";
import theme from "common/theme";
import SignInService from "./sign_in_service";
import { Refresh } from "@mui/icons-material";
import { sortPeopleAlphabetically } from "./utils";

const EXEMPTION = {
  NONE: "N/A",
  SPONSOR: "Sponsor",
  VOLUNTEER_15: "15 min Volunteer",
  VOLUNTEER_30: "30+ min Volunteer",
  ALL_STAR: "WSDC All-Star",
  OTHER: "Other",
};

const PAYMENT_OPTIONS = {
  CASH: "Cash",
  VENMO: "Venmo",
  ZELLE: "Zelle",
  PAYPAL: "PayPal",
};

const EVENTS = {
  L2: { id: "L2", displayName: "7:30pm - Level 2: Beyond the Basics" },
  L3: { id: "L3", displayName: "8:05pm - Level 3: Skill & Drills" },
  L1: { id: "L1", displayName: "8:30pm - Level 1: Welcome to WCS" },
  L4: { id: "L4", displayName: "8:40pm - Level 4: Artistic Application" },
  SOCIAL: { id: "Social", displayName: "9:15pm - Social Dancing" },
};

const DATA_STATE = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

function PersonInput(props) {
  const [data, setData] = useState(null);
  const [dataState, setDataState] = useState(DATA_STATE.NOT_LOADED);

  useEffect(() => {
    // If data is already being fetched, exit early
    if (dataState !== DATA_STATE.NOT_LOADED) return;

    const fetchPeopleData = async () => {
      setDataState(DATA_STATE.LOADING);

      try {
        let people = await SignInService.fetchPeople();

        let peopleOptions = sortPeopleAlphabetically(people).map((p) => {
          return { label: p.name };
        });

        setData(peopleOptions);
        setDataState(DATA_STATE.LOADED);
      } catch (e) {
        console.log(e);
        setDataState(DATA_STATE.ERROR);
      }
    };

    fetchPeopleData();
  }, [dataState]);

  function onClickRefresh() {
    setDataState(DATA_STATE.NOT_LOADED);
  }

  let isLoading = dataState === DATA_STATE.LOADING;
  let isLoaded = dataState === DATA_STATE.LOADED;
  let hasError = dataState === DATA_STATE.ERROR;
  let canRefresh = isLoaded || hasError;

  // TODO add support for additional people
  // TODO upon selecting sponsor / volunteer, autopopulate fields
  // TODO include data like whether someone is already checked in today

  return (
    <Box sx={signInStyles.inputContainer}>
      <Box sx={signInStyles.personSectionHeader}>
        <Typography sx={signInStyles.personSectionHeaderText}>
          Who is checking in
        </Typography>
        {isLoading && (
          <Box sx={signInStyles.loadingSpinner}>
            <CircularProgress size="1.25rem" />
          </Box>
        )}
        {canRefresh && (
          <Tooltip title="Refresh options" placement="right">
            <IconButton onClick={onClickRefresh}>
              <Refresh />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      {hasError && (
        <Typography>
          Something is wrong, please try again. Get Jessee if it still won't
          work.
        </Typography>
      )}
      <Autocomplete
        options={data}
        sx={signInStyles.input}
        renderInput={(params) => (
          <TextField {...params} label="Name" required />
        )}
        disabled={!isLoaded}
        value={props.selectedPerson}
        onChange={(_, newValue) => props.onPersonSelected(newValue)}
      />
    </Box>
  );
}

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
      <Typography sx={signInStyles.formHeader}>Payment</Typography>

      <FormControl>
        <InputLabel id="exemption-label">Exemption</InputLabel>
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
        label="Purchasing Mask"
      />
    </Box>
  );
}

function PaymentInput(props) {
  return (
    <Box sx={signInStyles.inputContainer}>
      <Box sx={signInStyles.paymentContainer}>
        <FormControl required>
          <InputLabel id="payment-method-label">Payment method</InputLabel>
          <Select
            labelId="payment-method-label"
            value={props.paymentMethodValue}
            label="Payment method"
            onChange={props.onSelectPaymentMethod}
            sx={signInStyles.input}
          >
            <MenuItem value={PAYMENT_OPTIONS.CASH}>
              {PAYMENT_OPTIONS.CASH}
            </MenuItem>
            <MenuItem value={PAYMENT_OPTIONS.PAYPAL}>
              {PAYMENT_OPTIONS.PAYPAL}
            </MenuItem>
            <MenuItem value={PAYMENT_OPTIONS.VENMO}>
              {PAYMENT_OPTIONS.VENMO}
            </MenuItem>
            <MenuItem value={PAYMENT_OPTIONS.ZELLE}>
              {PAYMENT_OPTIONS.ZELLE}
            </MenuItem>
          </Select>
        </FormControl>

        {/* TODO add validation */}
        <FormControl required>
          <InputLabel htmlFor="payment-amount">Payment Amount</InputLabel>
          <OutlinedInput
            id="payment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Payment Amount"
            value={props.paymentAmountValue}
            onChange={props.onPaymentAmountChange}
            sx={signInStyles.paymentAmount}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

function WhichEvents(props) {
  const [events, setEvents] = useState({
    [EVENTS.L1.id]: false,
    [EVENTS.L2.id]: false,
    [EVENTS.L3.id]: false,
    [EVENTS.L4.id]: false,
    [EVENTS.SOCIAL.id]: false,
  });

  function notifyParent(newVal) {
    props.onSetEventsAttendingChange(
      Object.keys(EVENTS)
        .filter((e) => newVal[EVENTS[e].id])
        .map((e) => e.id)
    );
  }

  const handleChange = (event) => {
    let newVal = {
      ...events,
      [event.target.name]: event.target.checked,
    };

    setEvents(newVal);
    notifyParent(newVal);
  };

  function areAllSelected() {
    return Object.values(events).every((e) => e);
  }

  function areAllDeselected() {
    return Object.values(events).every((e) => !e);
  }

  function areSomeSelected() {
    return !areAllSelected() && !areAllDeselected();
  }

  const handleSelectAllChange = () => {
    let checked = !areAllSelected();
    let newVal = {};

    for (const key in events) {
      newVal[key] = checked;
    }

    setEvents(newVal);
    notifyParent(newVal);
  };

  let allSelected = areAllSelected();
  let someSelected = areSomeSelected();

  return (
    <Box sx={signInStyles.inputContainer}>
      <FormControl component="fieldset" variant="standard" required>
        <FormLabel component="legend" sx={signInStyles.formHeader}>
          Which events will they attend
        </FormLabel>
        <FormControlLabel
          label="Select all"
          control={
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleSelectAllChange}
            />
          }
        />
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
        {/* <FormHelperText>You can display an error</FormHelperText> */}
      </FormControl>
    </Box>
  );
}

function NotesInput(props) {
  return (
    <Box sx={signInStyles.inputContainer}>
      <FormControl>
        <InputLabel htmlFor="additional-notes">Additional Notes</InputLabel>
        <OutlinedInput
          id="additional-notes"
          label="Additional Notes"
          multiline
          sx={signInStyles.additionalNotesInput}
          rows={4}
          value={props.additionalNotes}
          onChange={props.onSetAddtionalNotes}
        />
      </FormControl>
    </Box>
  );
}

// TODO add validation for someone who has already been entered today
function SignIn() {
  const [person, setPerson] = useState(null);
  const [exemption, setExemption] = useState(EXEMPTION.NONE);
  const [buyingMask, setBuyingMask] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [eventsAttending, setEventsAttending] = useState([]);

  const onSelectExemption = (event) => {
    setExemption(event.target.value);
  };

  const onMaskPurchaseChange = (event) => {
    setBuyingMask(event.target.checked);
  };

  const onSelectPaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const onSetPaymentAmount = (event) => {
    setPaymentAmount(event.target.value);
  };

  const onSetAddtionalNotes = (event) => {
    setAdditionalNotes(event.target.value);
  };

  const onSubmit = async () => {
    console.log("Submitted. Add the data here to verify correctness.");
    await SignInService.fetchPeople();
  };

  const isPaymentAmountValid = () => {
    // Matches ints or floats with 2 decimal points
    let pattern = /^(\d+|\d+\.\d{2})$/;

    try {
      if (!pattern.test(paymentAmount)) {
        return false;
      }

      let number = parseFloat(paymentAmount);

      return number > 0;
    } catch {
      return false;
    }
  };

  let shouldShowPayment =
    exemption === EXEMPTION.NONE ||
    exemption === EXEMPTION.VOLUNTEER_15 ||
    buyingMask;

  let formValid =
    person !== null &&
    (!shouldShowPayment ||
      (paymentMethod !== null && isPaymentAmountValid())) &&
    eventsAttending.length > 0;

  return (
    <Box sx={signInStyles.container}>
      <Container sx={signInStyles.contentContainer}>
        <Box sx={signInStyles.contentCard}>
          <Typography variant="h4" sx={signInStyles.title}>
            Admin - sign in
          </Typography>
          <Box sx={signInStyles.section}>
            <Typography variant="h5">
              Have they filled out the registration form?
            </Typography>
            <Typography>If not, have them fill out this form</Typography>
            <DyosLink href="https://forms.gle/2kbGxh399PQ2seEe7" openInNewTab>
              One time-registration form
            </DyosLink>
          </Box>
          <Box sx={signInStyles.section}>
            <Typography variant="h5">Check In</Typography>
            {/* TODO add refresh data button */}
            <PersonInput selectedPerson={person} onPersonSelected={setPerson} />
            <Stack direction={{ lg: "row" }} gap={{ xs: 4, lg: 8 }}>
              <Box sx={signInStyles.formLeft}>
                <ExemptionInput
                  value={exemption}
                  onSelectExemption={onSelectExemption}
                />

                {shouldShowPayment && (
                  <PaymentInput
                    paymentMethodValue={paymentMethod}
                    onSelectPaymentMethod={onSelectPaymentMethod}
                    paymentAmountValue={paymentAmount}
                    onPaymentAmountChange={onSetPaymentAmount}
                  />
                )}

                <MaskInput
                  checked={buyingMask}
                  onMaskPurchaseChange={onMaskPurchaseChange}
                />

                <NotesInput
                  value={additionalNotes}
                  onSetAddtionalNotes={onSetAddtionalNotes}
                />
              </Box>
              <Box>
                <WhichEvents onSetEventsAttendingChange={setEventsAttending} />
              </Box>
            </Stack>
            <Box sx={signInStyles.inputContainer}>
              <Button
                variant="contained"
                sx={signInStyles.submitButton}
                color={theme.palette.buttonBlue.name}
                onClick={onSubmit}
                disabled={!formValid}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
