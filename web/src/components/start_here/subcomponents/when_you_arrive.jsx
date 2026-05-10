import { Box, Container, List, ListItem, Typography } from "@mui/material";
import startHereStyles from "../start_here.styles";
import messages from "../messages";

function Masks() {
  return (
    <Box>
      <Typography>{messages.whenYouArrive.masks.purchase}</Typography>
      <List sx={startHereStyles.list}>
        <ListItem sx={startHereStyles.listItem2}>
          {messages.whenYouArrive.masks.oneDollar}
        </ListItem>
        <ListItem sx={startHereStyles.listItem2}>
          {messages.whenYouArrive.masks.twoDollars}
        </ListItem>
      </List>
    </Box>
  );
}

function Acquire() {
  let dash = <Typography display="inline"> - </Typography>;

  return (
    <Box>
      <Typography>{messages.whenYouArrive.acquire.station}</Typography>
      <List sx={startHereStyles.list}>
        {messages.whenYouArrive.acquire.items.map((item) => (
          <ListItem sx={startHereStyles.listItem}>
            <Typography display="inline" sx={startHereStyles.semiBold}>
              {item.item}
            </Typography>
            {dash}
            <Typography display="inline">{item.description}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function WhenYouArrive() {
  return (
    <Box sx={startHereStyles.subSectionContainer}>
      <Container>
        <Typography variant="h4" sx={startHereStyles.sectionTitle}>
          {messages.whenYouArrive.title}
        </Typography>

        <Box sx={startHereStyles.whenYouArriveStepContainer}>
          <Typography sx={startHereStyles.stepPreTitle}>STEP 1</Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            Check in
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            Check in at the DYOS station at the front desk of Studio M. They
            will confirm you're registered and collect payment or confirm your
            sponsorship is active. High filtration masks are required for class,
            but if you don't have one, a mask can be purchased from the front
            desk for $1
          </Typography>
        </Box>

        <Box sx={startHereStyles.whenYouArriveStepContainer}>
          <Typography sx={startHereStyles.stepPreTitle}>STEP 2</Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            Gear up
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            <Acquire />
          </Typography>
        </Box>

        <Box sx={startHereStyles.whenYouArriveStepContainer}>
          <Typography sx={startHereStyles.stepPreTitle}>STEP 3</Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            Start dancing!
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            {messages.whenYouArrive.proceed}
          </Typography>
        </Box>
        {/* 
        <List sx={startHereStyles.list}>
          <ListItem sx={startHereStyles.listItem}>
            {messages.whenYouArrive.checkIn}
          </ListItem>
          <ListItem sx={startHereStyles.listItem}>
            <Masks />
          </ListItem>
          <ListItem sx={startHereStyles.listItem}>
            <Acquire />
          </ListItem>
          <ListItem sx={startHereStyles.listItem}>
            {messages.whenYouArrive.proceed}
          </ListItem>
        </List> */}
      </Container>
    </Box>
  );
}

export default WhenYouArrive;
