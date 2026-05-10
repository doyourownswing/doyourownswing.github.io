import { Box, Container, List, ListItem, Typography } from "@mui/material";
import startHereStyles from "../start_here.styles";
import messages from "../messages";

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
          <Typography sx={startHereStyles.stepPreTitle}>
            {messages.whenYouArrive.checkIn.pretitle}
          </Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            {messages.whenYouArrive.checkIn.title}
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            {messages.whenYouArrive.checkIn.details}
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
          <Typography sx={startHereStyles.stepPreTitle}>
            {messages.whenYouArrive.proceed.pretitle}
          </Typography>
          <Typography variant="h6" sx={startHereStyles.stepTitle}>
            {messages.whenYouArrive.proceed.title}
          </Typography>
          <Typography sx={startHereStyles.stepDescription}>
            {messages.whenYouArrive.proceed.details}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default WhenYouArrive;
