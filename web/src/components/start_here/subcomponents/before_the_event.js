import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import messages from "../messages";
import startHereStyles from "../start_here.styles";
import FeatureFlags from "infra/feature_flags";

function Text(props) {
  return <Typography display="inline">{props.children}</Typography>;
}

function Space() {
  return <Text>&nbsp;</Text>;
}

function Review() {
  let showCodeOfConduct = FeatureFlags.showCodeOfConductTab;
  let showHealthPolicy = FeatureFlags.showHealthTab;

  return (
    <Box>
      <Text>{messages.beforeTheEvent.review.our}</Text>
      {!!showCodeOfConduct && [
        <Space />,
        <Link href="#/code" target="__blank" rel="noopener noreferrer">
          <Text>{messages.beforeTheEvent.review.codeOfConduct}</Text>
        </Link>,
      ]}
      {!!(showCodeOfConduct && showHealthPolicy) && [
        <Space />,
        <Text>{messages.beforeTheEvent.review.and}</Text>,
      ]}
      {!!showHealthPolicy && [
        <Space />,
        <Link href="#/health" target="__blank" rel="noopener noreferrer">
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
      <Link
        href="https://forms.gle/2kbGxh399PQ2seEe7"
        target="__blank"
        rel="noopener noreferrer"
      >
        <Text>{messages.beforeTheEvent.registration.registrationForm}</Text>
      </Link>
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
        <Link href="#/schedule" target="__blank" rel="noopener noreferrer">
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
        <Typography variant="h6" sx={startHereStyles.sectionTitle}>
          {messages.beforeTheEvent.title}
        </Typography>
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
        </List>
      </Container>
    </Box>
  );
}

export default BeforeTheEvent;
