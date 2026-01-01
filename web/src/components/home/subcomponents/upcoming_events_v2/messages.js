import { formatDate } from "@/utils/date_utils";

const messages = {
  // TODO put these details in a common location
  classDetails: {
    level1: {
      level: "Level 1",
      displayName: "West Coast Swing Foundations",
      location: "Sky Ballroom (second floor, use of stairs required)",
      time: "8:30pm - 9:15pm",
    },
    level2: {
      level: "Level 2",
      displayName: "Beyond the Basics",
      location: "Spotlight Ballroom",
      time: "7:30pm - 8:00pm",
    },
    level3: {
      level: "Level 3",
      displayName: "Skills and Drills",
      location: "Spotlight Ballroom",
      time: "8:05pm - 8:35pm",
    },
    level4: {
      level: "Level 4",
      displayName: "Artistic Application",
      location: "Spotlight Ballroom",
      time: "8:40pm - 9:10pm",
    },
    social: {
      displayName: "Social Dancing!",
      location: "Main Ballroom",
      time: "9:15pm - 11:30pm",
    },
  },
  title: "Upcoming Events",
  joinUs: "Join us on Thursday",
  studioM: "Studio M Ballroom Club in San Jose, CA",
  thursdayScheduleHeader: "Schedule",
  classesCta: "Learn more about our classes",
  startHereCta: "Read the know-before-you-go guide",
  getMonthEventsHeader: (date) => `${formatDate(date, "MMMM")} Schedule`,
  rsvpOnFacebook: "RSVP on Facebook",
  addToCalendar: "Add to calendar",
  google: "Google",
  apple: "Apple",
  outlook: "Outlook",
  advanceTopicHeader: "L3/L4 class topic: ",
  levelOneTopicHeader: "Intro class topic: ",
  djHeader: "Social Dance DJ: ",
  introCallout: {
    prefix: "Note: ",
    message:
      "Intro class topics may change to better fit the experience levels of the attendees",
  },
};

export default messages;
