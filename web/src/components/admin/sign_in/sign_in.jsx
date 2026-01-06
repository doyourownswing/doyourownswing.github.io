import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DyosLink from "@/components/common/link";
import { useState } from "react";
import signInStyles from "./sign_in.styles";
import SignInService from "./sign_in_service";
import { isPaymentRequired, validateForm } from "./utils";
import { REGISTRATION_FORM_LINK } from "@/common/constants";
import Callout from "@/components/common/callout";
import {
  EXEMPTION,
  EVENTS,
  DATA_STATE,
  BASE_EVENTS_VALUE,
} from "@/components/admin/sign_in/constants";
import PersonInput from "@/components/admin/sign_in/subcomponents/person_input";
import ExemptionInput from "@/components/admin/sign_in/subcomponents/exemption_input";
import PaymentInput from "@/components/admin/sign_in/subcomponents/payment_input";
import MaskInput from "@/components/admin/sign_in/subcomponents/mask_input";
import NotesInput from "@/components/admin/sign_in/subcomponents/notes_input";
import WhichEvents from "@/components/admin/sign_in/subcomponents/which_events_input";
import messages from "@/components/admin/sign_in/messages";

// TODO add validation for someone who has already been entered today
function SignIn() {
  const [people, setPeople] = useState([]);
  const [exemption, setExemption] = useState(EXEMPTION.NONE);
  const [buyingMask, setBuyingMask] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [eventsAttending, setEventsAttending] = useState(BASE_EVENTS_VALUE);

  const [submitState, setSubmitState] = useState(DATA_STATE.NOT_STARTED);

  const reset = function () {
    setPeople([]);
    setExemption(EXEMPTION.NONE);
    setBuyingMask(false);
    setPaymentMethod("");
    setPaymentAmount("");
    setAdditionalNotes("");
    setEventsAttending(BASE_EVENTS_VALUE);
  };

  const onSubmit = async () => {
    setSubmitState(DATA_STATE.IN_PROGRESS);

    try {
      let results = await SignInService.checkIn({
        // Note: it's important to keep these key names aligned with the backend
        persons: people.map((p) => p.name),
        exemption: exemption === EXEMPTION.NONE ? null : exemption,
        mask: buyingMask,
        paymentMethod: paymentMethod,
        amountPaid: paymentAmount,
        notes: additionalNotes,
        l1: eventsAttending[EVENTS.L1.id],
        l2: eventsAttending[EVENTS.L2.id],
        l3: eventsAttending[EVENTS.L3.id],
        l4: eventsAttending[EVENTS.L4.id],
        socialOnly: eventsAttending[EVENTS.SOCIAL_ONLY.id],
      });

      setSubmitState(DATA_STATE.COMPLETE);
      reset();
    } catch (e) {
      console.log(e);
      setSubmitState(DATA_STATE.ERROR);
    }
  };

  let submitInProgress = submitState === DATA_STATE.IN_PROGRESS;
  let submittedSuccessfully = submitState === DATA_STATE.COMPLETE;
  let submitError = submitState === DATA_STATE.ERROR;

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
    eventsAttending
  );
  let formValid = unfilledRequiredFields.length === 0;

  return (
    <Box sx={signInStyles.container}>
      <Container sx={signInStyles.contentContainer}>
        <Box sx={signInStyles.contentCard}>
          <Typography variant="h4" sx={signInStyles.title}>
            {messages.title}
          </Typography>
          <Box sx={signInStyles.section}>
            <Typography variant="h5" sx={signInStyles.sectionHeader}>
              {messages.registrationHeader}
            </Typography>
            <Typography display="inline">{messages.fillOutThisForm}</Typography>
            <DyosLink
              href={REGISTRATION_FORM_LINK}
              openInNewTab
              fontWeight="bold"
            >
              {messages.registrationForm}
            </DyosLink>
            <Typography display="inline">
              {messages.refreshAfterForm}
            </Typography>
          </Box>
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
                <Typography sx={signInStyles.formHeader}>Payment</Typography>
                <ExemptionInput
                  value={exemption}
                  onSelectExemption={onSelectExemption}
                />

                <PaymentInput
                  paymentMethodValue={paymentMethod}
                  onSelectPaymentMethod={onSelectPaymentMethod}
                  paymentAmountValue={paymentAmount}
                  onPaymentAmountChange={onSetPaymentAmount}
                  required={isPaymentRequired(exemption, buyingMask)}
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
              <WhichEvents
                value={eventsAttending}
                onSetEventsAttendingChange={setEventsAttending}
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
                  loading={submitInProgress}
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
            {submittedSuccessfully && (
              <Box sx={signInStyles.inputContainer}>
                <Callout sx={signInStyles.successCallout}>
                  {messages.submitSuccess}
                </Callout>
              </Box>
            )}
            {submitError && (
              <Box sx={signInStyles.inputContainer}>
                <Callout sx={signInStyles.errorCallout}>
                  {messages.submitError}
                </Callout>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
