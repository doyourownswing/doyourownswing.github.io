import { Box, Button, Container, Stack, Typography } from "@mui/material";
import volunteerStyles from "./volunteer.styles";
import messages from "./messages";
import RileyTeaching from "@/assets/images/riley-teaching.jpg";
import BetsyAdamWill from "@/assets/images/betsy-adam-will.jpg";
import theme from "@/common/theme";
import { forwardRef } from "react";

// TODO: replace this with a form or something for more protection from bad actors.
const doorVolunteerLink =
  "https://docs.google.com/spreadsheets/d/1xShbXzthXebT5oTHvB77HGHUBHOC3EyrIx05clzhVzI/edit?gid=0#gid=0";
const volunteerInstructorLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSc4FWAT2LXWlYFa6EyH_wTk-Zd8FTCLyAkeq5_KYTNhCtuX_g/viewform";

const doorVolunteerData = {
  title: messages.doorVolunteer,
  description: messages.doorVolunteerDescription,
  discountInfo: [
    messages.doorVolunteerOneShift,
    messages.doorVolunteerTwoShifts,
  ],
  ctaText: messages.doorVolunteerSignUp,
  ctaLink: doorVolunteerLink,
  image: BetsyAdamWill,
};

const introVolunteerData = {
  title: messages.introClassVolunteer,
  description: messages.introClassVolunteerDescription,
  discountInfo: [messages.introClassVolunteerEntry],
  ctaText: messages.introClassVolunteerSignUp,
  ctaLink: volunteerInstructorLink,
  image: RileyTeaching,
};

function CallToAction(props) {
  return (
    <Button
      variant="contained"
      color={theme.palette.secondary.name}
      sx={volunteerStyles.button}
      size="large"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </Button>
  );
}

function VolunteerRole(props) {
  let data = props.data;

  return (
    <Box>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={volunteerStyles.roleContainer}
      >
        <Box sx={volunteerStyles.roleTextContainer}>
          <Typography variant="h4" sx={volunteerStyles.roleTitle}>
            {data.title}
          </Typography>
          <Typography>{data.description}</Typography>
          <Box sx={volunteerStyles.discountSection}>
            <Typography variant="h6">{messages.discount}</Typography>
            {data.discountInfo.map((info, i) => (
              <Typography key={i}>{info}</Typography>
            ))}
          </Box>
          <CallToAction link={data.ctaLink}>{data.ctaText}</CallToAction>
        </Box>
        <Box component="img" src={data.image} sx={volunteerStyles.image}></Box>
      </Stack>
    </Box>
  );
}

const Volunteer = forwardRef(function Volunteer({}, ref) {
  return (
    <Box sx={volunteerStyles.container} ref={ref}>
      <Container>
        <Box>
          <Typography variant="h3" sx={volunteerStyles.title}>
            Volunteer Opportunities
          </Typography>
        </Box>
        <Box sx={volunteerStyles.content}>
          <VolunteerRole data={doorVolunteerData} />
          <VolunteerRole data={introVolunteerData} />
        </Box>
      </Container>
    </Box>
  );
});

export default Volunteer;
