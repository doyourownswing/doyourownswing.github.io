import eventCardStyles from "./event_card.styles";
import { Box, Divider, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const HeaderDetails = (props) => (
  <Box>
    {props.date && (
      <Box sx={eventCardStyles.details}>
        <AccessTimeIcon sx={eventCardStyles.icon} />
        <Typography>{props.date.toString()}</Typography>
      </Box>
    )}
    {props.location && (
      <Box sx={eventCardStyles.details}>
        <FmdGoodOutlinedIcon sx={eventCardStyles.icon} />
        <Typography>{props.location}</Typography>
      </Box>
    )}
  </Box>
);

const Footer = (props) => (
  <Box>
    <Divider sx={eventCardStyles.divider} />
    <Box sx={eventCardStyles.footerBox}>
      {props.price && (
        <Box>
          <Typography sx={eventCardStyles.priceLabel}>Price:</Typography>
          <Typography sx={eventCardStyles.price}>{props.price}</Typography>
        </Box>
      )}
      {props.link && (
        <Button
          sx={eventCardStyles.button}
          variant="contained"
          rel="noreferrer noopener"
          href={props.link}
          target="_blank"
        >
          {"View Details"}
        </Button>
      )}
    </Box>
  </Box>
);

const EventCard = (props) => {
  let link;

  if (props.externalLinks && props.externalLinks.facebookLink)
    link = props.externalLinks.facebookLink;

  return (
    <Box sx={eventCardStyles.card}>
      <Typography sx={eventCardStyles.title}>{props.title}</Typography>
      <HeaderDetails date={props.date} location={props.location} />
      {props.children && (
        <Box>
          <Divider sx={eventCardStyles.divider} />
          {props.children}
        </Box>
      )}
      {(props.price || link) && <Footer price={props.price} link={link} />}
    </Box>
  );
};

export default EventCard;
