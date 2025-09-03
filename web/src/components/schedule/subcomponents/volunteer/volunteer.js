import { Box, Button, Container, Stack, Typography } from "@mui/material";
import volunteerStyles from "./volunteer.styles";
import messages from "./messages";

function DoorVolunteer() {
  return (
    <Box>
      <Stack>
        <Box>
          <Typography>Door volunteer</Typography>
          <Typography>
            Take payments, check vaccination status (false?), and sell high
            filtration masks as needed
          </Typography>
          <Box>
            <Typography>Discount</Typography>
            <Typography>One 15 minute shift = $5 entry</Typography>
            <Typography>Two or more 15 minute shifts = free entry</Typography>
          </Box>
          <Button>Sign up as a door volunteer</Button>
        </Box>
        <Box>image here</Box>
      </Stack>
    </Box>
  );
}

function TeacherVolunteer() {
  return (
    <Box>
      <Stack>
        <Box>
          <Typography>Intro class volunteer</Typography>
          <Typography>
            Join the rotation of teachers for the intro to west coast swing
            class from 8:30pm - 9:15pm on Thursday nights
          </Typography>
          <Box>
            <Typography>Discount</Typography>
            <Typography>Free entry the night you teach</Typography>
          </Box>
          <Button>Sign up as a volunteer instructor</Button>
        </Box>
        <Box>image here</Box>
      </Stack>
    </Box>
  );
}

function Volunteer() {
  return (
    <Box>
      <Container>
        <Box>
          <Typography>Volunteer Opportunities</Typography>
        </Box>
        <Box>
          <DoorVolunteer />
          <TeacherVolunteer />
        </Box>
      </Container>
    </Box>
  );
}

export default Volunteer;
