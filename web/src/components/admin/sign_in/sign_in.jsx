import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import signInStyles from "./sign_in.styles";
import SignInService from "./sign_in_service";
import { isPaymentRequired, validateForm } from "./utils";
import Callout from "@/components/common/callout";
import {
  EXEMPTION,
  EVENTS,
  DATA_STATE,
  BASE_EVENTS_VALUE,
  SOCIAL_ONLY_HOURS_CUTOFF,
  SOCIAL_ONLY_EVENTS_VALUE,
} from "@/components/admin/sign_in/constants";
import { VolunteerInstructions } from "@/components/admin/sign_in/subcomponents/volunteer_instructions";
import PersonInput from "@/components/admin/sign_in/subcomponents/person_input";
import ExemptionInput from "@/components/admin/sign_in/subcomponents/exemption_input";
import PaymentInput from "@/components/admin/sign_in/subcomponents/payment_input";
import MaskInput from "@/components/admin/sign_in/subcomponents/mask_input";
import NotesInput from "@/components/admin/sign_in/subcomponents/notes_input";
import WhichEvents from "@/components/admin/sign_in/subcomponents/which_events_input";
import messages from "@/components/admin/sign_in/messages";

// TODO add validation for someone who has already been entered today
function SignIn() {
  // Current state of the form inputs, which are fully controlled
  const [people, setPeople] = useState([]);
  const [exemption, setExemption] = useState(EXEMPTION.NONE);
  const [buyingMask, setBuyingMask] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [eventsAttending, setEventsAttending] = useState(BASE_EVENTS_VALUE);

  // State relating to the user submitting the form
  const [lastSubmittedPersons, setLastSubmittedPersons] = useState("");
  const [submitState, setSubmitState] = useState(DATA_STATE.NOT_STARTED);
  const [errorData, setErrorData] = useState([]);

  const reset = function () {
    setPeople([]);
    setExemption(EXEMPTION.NONE);
    setBuyingMask(false);
    setPaymentMethod("");
    setPaymentAmount("");
    setAdditionalNotes("");

    if (new Date().getHours() >= SOCIAL_ONLY_HOURS_CUTOFF) {
      setEventsAttending(SOCIAL_ONLY_EVENTS_VALUE);
    } else {
      setEventsAttending(BASE_EVENTS_VALUE);
    }
  };

  const onSubmit = () => {
    setSubmitState(DATA_STATE.IN_PROGRESS);

    const submittedData = {
      // Note: it's important to keep these key names aligned with the backend
      persons: people.map((p) => p.name),
      paymentMethod: paymentMethod,
      amountPaid: paymentAmount,
      exemption: exemption === EXEMPTION.NONE ? null : exemption,
      mask: buyingMask,
      notes: additionalNotes,
      l1: eventsAttending[EVENTS.L1.id],
      l2: eventsAttending[EVENTS.L2.id],
      l3: eventsAttending[EVENTS.L3.id],
      l4: eventsAttending[EVENTS.L4.id],
      socialOnly: eventsAttending[EVENTS.SOCIAL_ONLY.id],
    };

    // avoid awaiting this promise on purpose, in order to immediately reset the form
    SignInService.checkIn(submittedData)
      .then(() => {
        setLastSubmittedPersons(people.map((p) => p.name).join(", "));
        setSubmitState(DATA_STATE.COMPLETE);
      })
      .catch((e) => {
        console.error(e);
        setErrorData([...errorData, { error: e.message, ...submittedData }]);
        setSubmitState(DATA_STATE.ERROR);
      });
    reset();
  };

  let submitInProgress = submitState === DATA_STATE.IN_PROGRESS;
  let submittedSuccessfully = submitState === DATA_STATE.COMPLETE;

  const onSelectPersons = (persons) => {
    setPeople(persons);

    // Auto-select sponsor if the only person selected is a sponsor
    if (
      persons.length === 1 &&
      persons[0].sponsor &&
      exemption === EXEMPTION.NONE
    ) {
      setExemption(EXEMPTION.SPONSOR);
    }
  };

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

  const onSetAdditionalNotes = (event) => {
    setAdditionalNotes(event.target.value);
  };

  let unfilledRequiredFields = validateForm(
    people,
    exemption,
    buyingMask,
    paymentAmount,
    paymentMethod,
    eventsAttending,
    additionalNotes,
  );
  let formValid = unfilledRequiredFields.length === 0;

  return (
    <Box sx={signInStyles.container}>
      <Container sx={signInStyles.contentContainer}>
        <Box sx={signInStyles.contentCard}>
          <Typography variant="h4" sx={signInStyles.title}>
            {messages.title}
          </Typography>

          <VolunteerInstructions />

          <Box sx={signInStyles.section}>
            <Typography variant="h5" sx={signInStyles.sectionHeader}>
              {messages.checkInTitle}
            </Typography>
            <Box sx={signInStyles.inputSection}>
              <PersonInput
                selectedPeople={people}
                onPeopleSelected={onSelectPersons}
              />
            </Box>
            <Stack
              direction={{ lg: "row" }}
              gap={{ xs: 4, lg: 8 }}
              sx={signInStyles.inputSection}
            >
              <Box sx={signInStyles.formLeft}>
                <Typography sx={signInStyles.formHeader}>
                  {messages.paymentHeader}
                </Typography>

                <Typography sx={signInStyles.formExplainer}>
                  {messages.paymentExplainer}
                </Typography>

                <PaymentInput
                  paymentMethodValue={paymentMethod}
                  onSelectPaymentMethod={onSelectPaymentMethod}
                  paymentAmountValue={paymentAmount}
                  onPaymentAmountChange={onSetPaymentAmount}
                  required={isPaymentRequired(exemption, buyingMask)}
                />

                <Box sx={signInStyles.section}>
                  <Typography sx={signInStyles.formHeader}>
                    Additional information
                  </Typography>

                  <ExemptionInput
                    value={exemption}
                    onSelectExemption={onSelectExemption}
                  />

                  <MaskInput
                    checked={buyingMask}
                    onMaskPurchaseChange={onMaskPurchaseChange}
                  />

                  <NotesInput
                    value={additionalNotes}
                    onSetAdditionalNotes={onSetAdditionalNotes}
                    required={exemption === EXEMPTION.OTHER}
                  />
                </Box>
              </Box>
              <WhichEvents
                value={eventsAttending}
                onSetEventsAttendingChange={setEventsAttending}
                required={exemption !== EXEMPTION.TEACHER}
              />
            </Stack>
            <Box sx={signInStyles.inputContainer}>
              {!formValid && (
                <Box sx={{ paddingBottom: "1rem" }}>
                  <Typography display="inline" fontWeight="bold">
                    {messages.requiredFieldsUnset}
                  </Typography>

                  <Typography display="inline">
                    {unfilledRequiredFields.join(", ")}
                  </Typography>
                </Box>
              )}
              <Box sx={signInStyles.buttonsContainer}>
                <Button
                  variant="contained"
                  sx={signInStyles.submitButton}
                  onClick={onSubmit}
                  disabled={!formValid}
                >
                  {messages.submit}
                </Button>
                <Button
                  variant="outlined"
                  sx={signInStyles.submitButton}
                  onClick={reset}
                  disabled={submitInProgress}
                >
                  {messages.clear}
                </Button>
              </Box>
            </Box>
            {submitInProgress && (
              <Box sx={signInStyles.inputContainer}>
                <Callout sx={signInStyles.inProgressCallout}>
                  {messages.submitInProgress}
                </Callout>
              </Box>
            )}
            {submittedSuccessfully && (
              <Box sx={signInStyles.inputContainer}>
                <Callout sx={signInStyles.successCallout}>
                  {messages.submitSuccess} {lastSubmittedPersons}
                </Callout>
              </Box>
            )}
            {errorData.map((data) => (
              <Box
                sx={signInStyles.inputContainer}
                key={data.persons.join(",")}
              >
                <Callout sx={signInStyles.errorCallout}>
                  {messages.resubmitPrompt}

                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </Callout>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
