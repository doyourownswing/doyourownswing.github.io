import { Typography, Box } from "@mui/material";
import EventCard from "./event_card";
import dyosEventCardStyle from "./dyos_event_card.styles";

const callToAction = [
  "Learn how to effectively teach West Coast Swing!",
  "You'll gain valuable insights into teaching methodologies, movement principles, and class structure.",
  "By volunteering to teach or assist in intro classes, you'll contribute to making DYOS more accessible to new dancers.",
  "Feel free to attend even if you don't plan on teaching - this class can help fill in any gaps in your understanding or even help your own learning process.",
];

const time = "7:30pm - 9:00pm";

const TeacherTrainingEventCard = (props) => {
  let event = props.event;

  console.log(event);

  return (
    <EventCard {...event}>
      <Box sx={dyosEventCardStyle.row}>
        <Typography sx={dyosEventCardStyle.left}>{time}</Typography>
      </Box>
      <Box>
        {callToAction.map((sentence, i) => (
          <Typography key={i} sx={{ paddingTop: "16px" }}>
            {sentence}
          </Typography>
        ))}
      </Box>
    </EventCard>
  );
};

export default TeacherTrainingEventCard;
