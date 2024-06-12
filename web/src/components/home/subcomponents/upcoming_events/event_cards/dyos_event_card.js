import { Typography, Box } from "@mui/material";
import EventCard from "./event_card";
import dyosEventCardStyle from "./dyos_event_card.styles";

const DYOSEventCard = (props) => (
  <EventCard {...props.event}>
    {props.event.eventSchedule.map((event) => (
      <Box key={event.name} sx={dyosEventCardStyle.row}>
        <Typography sx={dyosEventCardStyle.left}>{event.time}</Typography>
        <Typography sx={dyosEventCardStyle.right}>{event.name}</Typography>
      </Box>
    ))}
  </EventCard>
);

export default DYOSEventCard;
