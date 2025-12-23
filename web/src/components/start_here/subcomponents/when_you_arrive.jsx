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
          <ListItem sx={startHereStyles.listItem2}>
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
        <Typography variant="h6" sx={startHereStyles.sectionTitle}>
          {messages.whenYouArrive.title}
        </Typography>
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
        </List>
      </Container>
    </Box>
  );
}

export default WhenYouArrive;
