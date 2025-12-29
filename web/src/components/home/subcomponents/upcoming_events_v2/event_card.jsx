import theme from "@/common/theme";
import DyosCard from "@/components/common/card";
import eventCardStyles from "@/components/home/subcomponents/upcoming_events_v2/event_card.styles";
import messages from "@/components/home/subcomponents/upcoming_events_v2/messages";
import { formatDate } from "@/utils/date_utils";
import { Apple, Google, Microsoft } from "@mui/icons-material";
import {
  Box,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

function EventCardDetail(props) {
  let { detail, description } = props;
  let isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  let detailsComponent = isSmallScreen ? "p" : "span";

  return (
    <Typography component="div" sx={eventCardStyles.eventDetail}>
      <Typography
        component={detailsComponent}
        sx={eventCardStyles.eventDetailName}
      >
        {detail}
      </Typography>
      <Typography
        component={detailsComponent}
        sx={eventCardStyles.eventDetailDescription}
      >
        {description}
      </Typography>
    </Typography>
  );
}

function AddToCalendar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let event = props.event;

  // TODO MAKE THESE DO SOMETHING
  // https://www.npmjs.com/package/calendar-link

  return [
    <Button
      variant="outlined"
      sx={eventCardStyles.button}
      id="add-to-cal-button"
      aria-controls={isMenuOpen ? "add-to-cal-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={isMenuOpen ? "true" : undefined}
      onClick={handleClick}
    >
      {messages.addToCalendar}
    </Button>,
    <Menu
      id="add-to-cal-menu"
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleClose}
      slotProps={{
        list: {
          "aria-labelledby": "add-to-cal-button",
        },
      }}
    >
      <MenuItem onClick={handleClose} sx={eventCardStyles.addToCalItem}>
        <ListItemIcon>
          <Google fontSize="small" />
        </ListItemIcon>
        {messages.google}
      </MenuItem>
      <MenuItem onClick={handleClose} sx={eventCardStyles.addToCalItem}>
        <ListItemIcon>
          <Apple fontSize="small" />
        </ListItemIcon>
        {messages.apple}
      </MenuItem>
      <MenuItem onClick={handleClose} sx={eventCardStyles.addToCalItem}>
        <ListItemIcon>
          <Microsoft fontSize="small" />
        </ListItemIcon>
        {messages.outlook}
      </MenuItem>
    </Menu>,
  ];
}

function EventCard(props) {
  let event = props.event;

  return (
    <DyosCard contentSx={eventCardStyles.card}>
      <Box sx={eventCardStyles.contentContainer}>
        <Box sx={eventCardStyles.contentLeftContainer}>
          <Box sx={eventCardStyles.dateContainer}>
            <Typography sx={eventCardStyles.month}>
              {formatDate(event.date, "MMMM")}
            </Typography>
            <Typography sx={eventCardStyles.date}>
              {formatDate(event.date, "D")}
            </Typography>
          </Box>
          <Box sx={eventCardStyles.detailsContainer}>
            <Box sx={eventCardStyles.titleContainer}>
              <Typography sx={eventCardStyles.title} variant="h6">
                {event.title}
              </Typography>
              <Typography sx={eventCardStyles.subtitle}>
                {event.subtitle}
              </Typography>
            </Box>

            {!!event.advanceTopic && (
              <EventCardDetail
                detail={messages.advanceTopicHeader}
                description={event.advanceTopic}
              />
            )}
            <EventCardDetail
              detail={messages.levelOneTopicHeader}
              description={event.levelOneTopic}
            />
            <EventCardDetail
              detail={messages.djHeader}
              description={!!event.dj ? event.dj : "DJ Riley"}
            />
          </Box>
        </Box>
        <Box sx={eventCardStyles.ctaContainer}>
          {!!event.facebookLink && (
            <Button
              variant="contained"
              href={event.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={eventCardStyles.button}
            >
              {messages.rsvpOnFacebook}
            </Button>
          )}
          <AddToCalendar event={event} />
        </Box>
      </Box>
    </DyosCard>
  );
}

export default EventCard;
