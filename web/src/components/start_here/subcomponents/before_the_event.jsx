import { Box, Button, Container, Typography } from "@mui/material";
import messages from "../messages";
import startHereStyles from "../start_here.styles";
import { REGISTRATION_FORM_LINK } from "@/common/constants";
import DyosLink from "@/components/common/link";

function Step(props) {
  return (
    <Box sx={startHereStyles.beforeTheEventStepContainer}>
      <Typography sx={startHereStyles.stepPreTitle}>
        {props.pretitle}
      </Typography>
      <Typography variant="h6" sx={startHereStyles.stepTitle}>
        {props.title}
      </Typography>
      <Box sx={startHereStyles.stepDescription}>
        <Typography display="inline">{props.details}</Typography>
        <Typography display="inline">
          <DyosLink href={props.detailsLinkHref} openInNewTab>
            {props.detailsLinkText}
          </DyosLink>
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={startHereStyles.stepButton}
        target="_blank"
        href={props.href}
      >
        {props.callToAction}
      </Button>
    </Box>
  );
}

function BeforeTheEvent() {
  return (
    <Box sx={startHereStyles.subSectionContainer}>
      <Container>
        <Typography variant="h4" sx={startHereStyles.sectionTitle}>
          {messages.beforeTheEvent.title}
        </Typography>
        <Step
          pretitle={messages.beforeTheEvent.registration.pretitle}
          title={messages.beforeTheEvent.registration.title}
          details={messages.beforeTheEvent.registration.details}
          callToAction={messages.beforeTheEvent.registration.callToAction}
          href={REGISTRATION_FORM_LINK}
        ></Step>
        <Step
          pretitle={messages.beforeTheEvent.class.pretitle}
          title={messages.beforeTheEvent.class.title}
          details={messages.beforeTheEvent.class.details}
          detailsLinkText={messages.beforeTheEvent.class.detailsLink}
          detailsLinkHref={"/contact"}
          callToAction={messages.beforeTheEvent.class.callToAction}
          href="/classes"
        ></Step>
        <Step
          pretitle={messages.beforeTheEvent.review.pretitle}
          title={messages.beforeTheEvent.review.title}
          details={messages.beforeTheEvent.review.details}
          callToAction={messages.beforeTheEvent.review.callToAction}
          href="/code-of-conduct"
        ></Step>
      </Container>
    </Box>
  );
}

export default BeforeTheEvent;
