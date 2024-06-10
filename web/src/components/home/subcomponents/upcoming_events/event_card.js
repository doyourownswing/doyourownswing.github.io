import eventCardStyles from "./event_card.styles";
import { Box, Divider, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const EventCard = (props) => (
  <Box sx={eventCardStyles.card}>
    <Typography sx={eventCardStyles.title}>{props.title}</Typography>
    <Box sx={eventCardStyles.details}>
      <AccessTimeIcon sx={eventCardStyles.icon} />
      <Typography>{props.date}</Typography>
    </Box>
    <Box sx={eventCardStyles.details}>
      <FmdGoodOutlinedIcon sx={eventCardStyles.icon} />
      <Typography>{props.location}</Typography>
    </Box>
    <Divider sx={eventCardStyles.divider} />
    {props.children}
    <Divider sx={eventCardStyles.divider} />
    {props.price && (
      <Box sx={eventCardStyles.priceContainer}>
        <Typography sx={eventCardStyles.priceLabel}>Price:</Typography>
        <Typography sx={eventCardStyles.price}>{props.price}</Typography>
      </Box>
    )}
    <Button sx={eventCardStyles.button} variant="contained">
      {"View Details"}
    </Button>
  </Box>
);

export default EventCard;
