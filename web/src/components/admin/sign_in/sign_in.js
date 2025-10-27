// Note to self: we want to do this:
//
// https://www.youtube.com/watch?v=42R-fVmB4WM
// https://developers.google.com/apps-script/guides/web

import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DyosLink from "components/common/link";
import { useState } from "react";
import signInStyles from "./sign_in.styles";
import theme from "common/theme";

const dummyPeopleSelection = [
  { label: "Jessee Zhang" },
  { label: "Emily Chern" },
  { label: "Makenzie Smith" },
  { label: "Jake Rehwoldt" },
  { label: "Riley Crozier" },
  { label: "Jen Xiao" },
  { label: "Saumya Bhandarker" },
];

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

function PersonInput(props) {
  // TODO add support for additional people
  // TODO upon selecting sponsor / volunteer, autopopulate fields
  return (
    <Box sx={signInStyles.inputContainer}>
      <Autocomplete
        options={dummyPeopleSelection}
        sx={signInStyles.input}
        renderInput={(params) => (
          <TextField {...params} label="Name" required />
        )}
        value={props.selectedPerson}
        onChange={(_, newValue) => props.onPersonSelected(newValue)}
      />
    </Box>
  );
}

function ExemptionInput(props) {
  return (
    <Box sx={signInStyles.inputContainer}>
      <Typography sx={signInStyles.formHeader}>
        Something about exemption includes things like sponsors, volunteers etc
      </Typography>

      <FormControl>
        <InputLabel id="exemption-label">Exemption</InputLabel>
        <Select
          labelId="exemption-label"
          value={props.value}
          label="Exemption"
          onChange={props.onSelectExemption}
          sx={signInStyles.input}
        >
          <MenuItem value={EXEMPTION.NONE}>{EXEMPTION.NONE}</MenuItem>
          <MenuItem value={EXEMPTION.SPONSOR}>{EXEMPTION.SPONSOR}</MenuItem>
          <MenuItem value={EXEMPTION.VOLUNTEER_15}>
            {EXEMPTION.VOLUNTEER_15}
          </MenuItem>
          <MenuItem value={EXEMPTION.VOLUNTEER_30}>
            {EXEMPTION.VOLUNTEER_30}
          </MenuItem>
          <MenuItem value={EXEMPTION.ALL_STAR}>{EXEMPTION.ALL_STAR}</MenuItem>
          <MenuItem value={EXEMPTION.OTHER}>{EXEMPTION.OTHER}</MenuItem>
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

  const handleChange = (event) => {
    let newVal = {
      ...events,
      [event.target.name]: event.target.checked,
    };

    setEvents(newVal);

    props.onSetEventsAttendingChange(
      Object.keys(EVENTS)
        .filter((e) => newVal[EVENTS[e].id])
        .map((e) => e.id)
    );
  };

  return (
    <Box>
      <FormControl component="fieldset" variant="standard" required>
        <FormLabel component="legend" sx={signInStyles.formHeader}>
          Which events will they attend
        </FormLabel>
        <FormGroup>
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

  const onSubmit = () => {
    console.log("Submitted. Add the data here to verify correctness.");
  };

  const isPaymentAmountValid = () => {
    try {
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
      <Container>
        <Typography variant="h4" sx={signInStyles.title}>
          Admin - sign in
        </Typography>
      </Container>
      <Container>
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
              <MaskInput
                checked={buyingMask}
                onMaskPurchaseChange={onMaskPurchaseChange}
              />
              {shouldShowPayment && (
                <PaymentInput
                  paymentMethodValue={paymentMethod}
                  onSelectPaymentMethod={onSelectPaymentMethod}
                  paymentAmountValue={paymentAmount}
                  onPaymentAmountChange={onSetPaymentAmount}
                />
              )}
            </Box>
            <Box>
              <WhichEvents onSetEventsAttendingChange={setEventsAttending} />
            </Box>
          </Stack>
          <NotesInput
            value={additionalNotes}
            onSetAddtionalNotes={onSetAddtionalNotes}
          />
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
      </Container>
    </Box>
  );
}

export default SignIn;
