import theme from "@/common/theme";
import DyosCard from "@/components/common/card";
import eventCardStyles from "@/components/home/subcomponents/upcoming_events_v2/event_card.styles";
import messages from "@/components/home/subcomponents/upcoming_events_v2/messages";
import { formatDate } from "@/utils/date_utils";
import {
  Apple as AppleIcon,
  Google as GoogleIcon,
  Microsoft as MicrosoftIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  google as createGoogleEvent,
  ics as createAppleEvent,
  outlook as createOutlookEvent,
} from "calendar-link";
import { useState } from "react";

const addToCalendarOptions = [
  {
    text: messages.google,
    icon: GoogleIcon,
    eventCreator: createGoogleEvent,
  },
  {
    text: messages.apple,
    icon: AppleIcon,
    eventCreator: createAppleEvent,
  },
  {
    text: messages.outlook,
    icon: MicrosoftIcon,
    eventCreator: createOutlookEvent,
  },
];

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

function createCalendarEvent(event) {
  let dyosStart = event.date.clone().hour(19).minute(30);
  let dyosEnd = event.date.clone().hour(23).minute(30);

  let eventsText = Object.values(messages.classDetails)
    .map((e) => {
      let levelOrEmptyString = !!e.level ? `${e.level} - ` : "";

      return (
        `${levelOrEmptyString}${e.displayName}\n` +
        `    ${e.time} @ ${e.location}`
      );
    })
    .join("\n\n");

  return {
    title: "Do Your Own Swing",
    location: "3550 Stevens Creek Blvd #130, San Jose, CA 95117",
    start: formatDate(dyosStart),
    end: formatDate(dyosEnd),
    description:
      `<b>${event.title}</b>\n` +
      `${event.subtitle}\n\n` +
      "<b>Schedule</b>\n" +
      eventsText +
      "\n\n" +
      "For more details, visit https://doyourownswing.com\n\n" +
      "See you soon!",
  };
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

  const calendarEvent = createCalendarEvent(event);

  // TODO MAKE THESE DO SOMETHING
  // https://www.npmjs.com/package/calendar-link

  function createMenuItem(option) {
    let IconComponent = option.icon;

    return (
      <MenuItem onClick={handleClose} sx={eventCardStyles.addToCalItem}>
        <Link
          href={option.eventCreator(calendarEvent)}
          target="_blank"
          rel="noreferrer"
          sx={eventCardStyles.addToCalItemLink}
        >
          <ListItemIcon>
            <IconComponent fontSize="small" />
          </ListItemIcon>
          {option.text}
        </Link>
      </MenuItem>
    );
  }

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
      {addToCalendarOptions.map(createMenuItem)}
    </Menu>,
  ];
}

function EventCard(props) {
  let event = props.event;

  let cardStyles = event.noDyos
    ? eventCardStyles.cardNoDyos
    : eventCardStyles.card;

  return (
    <DyosCard contentSx={cardStyles}>
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

            {!event.noDyos && (
              <Box>
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
            )}
          </Box>
        </Box>
        {!event.noDyos && (
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
        )}
      </Box>
    </DyosCard>
  );
}

export default EventCard;
