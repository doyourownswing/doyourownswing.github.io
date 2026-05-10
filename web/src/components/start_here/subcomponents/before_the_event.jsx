import {
  Box,
  Button,
  Chip,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import messages from "../messages";
import startHereStyles from "../start_here.styles";
import FeatureFlags from "@/infra/feature_flags";
import { Text, Space } from "@/components/common/typography";
import DyosLink from "@/components/common/link";
import { REGISTRATION_FORM_LINK } from "@/common/constants";

function Review() {
  let showCodeOfConduct = FeatureFlags.showCodeOfConductTab;
  let showHealthPolicy = FeatureFlags.showHealthTab;

  return (
    <Box>
      <Text>{messages.beforeTheEvent.review.our}</Text>
      {!!showCodeOfConduct && [
        <Space />,
        <Link
          href="/code-of-conduct"
          target="__blank"
          rel="noopener noreferrer"
        >
          <Text>{messages.beforeTheEvent.review.codeOfConduct}</Text>
        </Link>,
      ]}
      {!!(showCodeOfConduct && showHealthPolicy) && [
        <Space />,
        <Text>{messages.beforeTheEvent.review.and}</Text>,
      ]}
      {!!showHealthPolicy && [
        <Space />,
        <Link href="/health" target="__blank" rel="noopener noreferrer">
          <Text>{messages.beforeTheEvent.review.healthPolicy}</Text>
        </Link>,
      ]}
    </Box>
  );
}

function RegistrationForm() {
  return (
    <Box>
      <Text>{messages.beforeTheEvent.registration.fillOut}</Text>
      <Space />
      <DyosLink href={REGISTRATION_FORM_LINK}>
        <Text>{messages.beforeTheEvent.registration.registrationForm}</Text>
      </DyosLink>
      <Space />
      <Text>{messages.endSentence}</Text>
      <Text>{messages.beforeTheEvent.registration.doLater}</Text>
    </Box>
  );
}

function ClassDescription(props) {
  let classInfo = props.class;

  return (
    <Box>
      <Typography sx={startHereStyles.semiBold}>{classInfo.class}</Typography>
      {classInfo.description.map((d, i) => (
        <Typography key={i} paragraph>
          {d}
        </Typography>
      ))}
    </Box>
  );
}

function ChooseClass() {
  return (
    <Box>
      <Text>{messages.beforeTheEvent.class.choose}</Text>
      {FeatureFlags.showScheduleTab && [
        <Text>{messages.beforeTheEvent.class.moreInfo}</Text>,
        // TODO make sure we update this when we update the tab.
        <Link href="/schedule" target="__blank" rel="noopener noreferrer">
          <Text>{messages.beforeTheEvent.class.here}</Text>
        </Link>,
        <Text>{messages.endSentence}</Text>,
      ]}
      <List sx={startHereStyles.list}>
        {messages.beforeTheEvent.class.classOptions.map((c, i) => (
          <ListItem sx={startHereStyles.listItem2} key={i}>
            <ClassDescription class={c} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function BeforeTheEvent() {
  let showReview =
    FeatureFlags.showCodeOfConductTab || FeatureFlags.showHealthTab;

  return (
    <Box sx={startHereStyles.subSectionContainer}>
      <Container>
        <Typography variant="h4" sx={startHereStyles.sectionTitle}>
          {messages.beforeTheEvent.title}
        </Typography>

        <Box sx={startHereStyles.beforeTheEventStepContainer}>
          <Typography sx={startHereStyles.stepPreTitle}>STEP 1</Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            Review our Code of Conduct
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            At Do Your Own Swing, we want to create a safe environment, so we
            take our Code of Conduct seriously
          </Typography>
          <Button
            variant="contained"
            sx={startHereStyles.stepButton}
            target="_blank"
            href="/code-of-conduct"
          >
            Read our Code of Conduct
          </Button>
        </Box>

        <Box sx={startHereStyles.beforeTheEventStepContainer}>
          <Typography sx={startHereStyles.stepPreTitle}>STEP 2</Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            Fill out our one-time registration form
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            You can also do this when you arrive, but doing it ahead of time
            makes things easier.
          </Typography>
          <Button
            variant="contained"
            sx={startHereStyles.stepButton}
            target="_blank"
            href={REGISTRATION_FORM_LINK}
          >
            Register here
          </Button>
        </Box>

        <Box sx={startHereStyles.beforeTheEventStepContainer}>
          <Typography sx={startHereStyles.stepPreTitle}>STEP 3</Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            Find which classes are best for you
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            We offer four different classes, each designed to challenge dancers
            of different skill levels. Take a look at the classes and see which
            ones might be best for you. If you're not sure, send us a message!
          </Typography>
          <Button
            variant="contained"
            sx={startHereStyles.stepButton}
            target="_blank"
            href="/classes"
          >
            See our classes
          </Button>
        </Box>
        {/* 
        <List sx={startHereStyles.list}>
          {showReview && (
            <ListItem sx={startHereStyles.listItem}>
              <Review />
            </ListItem>
          )}
          <ListItem sx={startHereStyles.listItem}>
            <RegistrationForm />
          </ListItem>
          <ListItem sx={startHereStyles.listItem}>
            <ChooseClass />
          </ListItem>
        </List> */}
      </Container>
    </Box>
  );
}

export default BeforeTheEvent;
