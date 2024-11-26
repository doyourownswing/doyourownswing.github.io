import { Typography } from "@mui/material";
import EventCard from "./event_card";
import DyosLink from "components/common/link";

const boogieLink = "https://boogiebythebay.com/";

const BoogieEventCard = (props) => (
  <EventCard {...props.event}>
    <Typography>No class today, see you at Boogie!</Typography>
    <Typography>See more details at </Typography>
    <DyosLink href={boogieLink} openInNewTab>
      {boogieLink}
    </DyosLink>
  </EventCard>
);

export default BoogieEventCard;
