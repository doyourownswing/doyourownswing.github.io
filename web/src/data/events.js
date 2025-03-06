/**
 * Exposes a function to get the details of the next [numEvents] [Event]s.
 *
 * Callers are expected to check the [type] of the [Event] and handle rendering.
 * Other [EventTypes] should be added to the const list. The [Event] class
 * can also be extended to allow adding additional details (i.e. schedule, pricing,
 * etc.) And should be handled be the caller to be rendered properly.
 */
import messages from "../common/messages";
import { createDate, getBeginningOfTodayDate } from "utils/date_utils";
import EventTypes from "common/event_types";

const DEFAULT_LOCATION = "Studio M Ballroom, San Jose, CA";
const DEFAULT_PRICE = "$10 - 40";
const MINI_DYOS_PRICE = "$10 - 20";

// TODO(jesseezhang): the param list scales poorly with events with different types of information.
// Refactor this to be more scalable.
class Event {
  constructor(
    type,
    title,
    date,
    eventSchedule = [],
    location = "",
    price = "",
    externalLinks = undefined
  ) {
    this.type = type;
    this.title = title;
    this.date = date;
    this.eventSchedule = eventSchedule;
    this.location = location;
    this.price = price;
    this.externalLinks = externalLinks;
  }
}

const defaultDyosSchedule = [
  { time: "7:30pm - 8:15pm", name: "Building Blocks" },
  { time: "8:15pm - 9:00pm", name: "Creative Expressions" },
  { time: "8:45pm - 9:30pm", name: "Welcome to WCS" },
  { time: "9:00pm - 11:30pm", name: "Social Dancing" },
];

const updatedDyosClassNameSchedule = [
  { time: "7:30pm - 8:15pm", name: "Connection, Rhythm, and Flow (Level 2)" },
  { time: "8:25pm - 9:15pm", name: "You, Me, and the Music (Level 3)" },
  { time: "8:30pm - 9:15pm", name: "WCS Foundations (Level 1)" },
  { time: "9:15pm - 11:30pm", name: "Social Dancing" },
];

// latest schedule starting 02/20/2025
const feb2025Schedule = [
  { time: "7:30pm - 8:00pm", name: "Beyond the Basics (Level 2)" },
  { time: "8:05pm - 8:35pm", name: "Skill & Drills (Level 3)" },
  { time: "8:30pm - 9:15pm", name: "Welcome to WCS (Level 1)" },
  { time: "8:40pm - 9:10pm", name: "Artistic Application (Level 4)" },
  { time: "9:15pm - 11:30pm", name: "Social Dancing" },
];

const miniDyosSchedule = [
  { time: "8:30pm - 9:15pm", name: "WCS Foundations" },
  { time: "9:15pm - 10:00pm", name: "Beginner-friendly Practice/Q&A" },
];

/**
 * Hardcoded database of all of the events.
 *
 * Keep ordered by date ascending.
 */
const events = [
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("05/16/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("05/23/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1471380160454652",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "Do Your Own Swing feat. DJ Andrew Roth!",
    createDate("05/30/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/812141927505563",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("06/06/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS: Slingshot from Any Hand",
    createDate("06/13/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/976640170426321",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS: Wraps and Rolls Galore!",
    createDate("06/20/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/476321498262098",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "Do Your Own Swing - Pride Party!",
    createDate("06/27/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/457255416887420",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS: 4th of July!",
    createDate("07/04/2024"),
    [
      { time: "8:45pm - 9:30pm", name: "Welcome to WCS" },
      { time: "9:00pm - 9:30pm", name: "Social Dancing" },
    ],
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("07/11/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("07/18/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1650813662363514",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("07/25/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.miniDyos,
    createDate("08/01/2024"),
    [
      { time: "8:45pm - 9:30pm", name: "Welcome to WCS" },
      { time: "9:00pm - 9:30pm", name: "Social Dancing" },
    ],
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("08/08/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("08/15/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("08/22/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.miniDyos,
    createDate("08/29/2024"),
    miniDyosSchedule,
    DEFAULT_LOCATION,
    MINI_DYOS_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - Switch Spins",
    createDate("09/05/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - Switch Tucks",
    createDate("09/12/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - Switch Whips",
    createDate("09/19/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - Choreo Night",
    createDate("09/26/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - styling",
    createDate("10/03/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.Boogie,
    "Boogie by the Bay",
    createDate("10/10/2024"),
    /* eventSchedule = */ null,
    "Hyatt Regency Airport Hotel, Burlingame, CA"
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - styling",
    createDate("10/17/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS - Common Dips & How to Not",
    createDate("10/24/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS Halloween Party!!!",
    createDate("10/31/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS feat. Natasha & Joel!",
    createDate("11/07/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS feat. Natasha & Joel!",
    createDate("11/14/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS Holiday Party !!! + Farewell, 2024",
    createDate("11/21/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.TeacherTraining,
    "Teacher Training Part 1",
    createDate("12/05/2024"),
    /* eventSchedule = */ null,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/544603031710636",
    }
  ),
  new Event(
    EventTypes.TeacherTraining,
    "Teacher Training Part 2",
    createDate("12/12/2024"),
    /* eventSchedule = */ null,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/949202813796366",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "First Class of 2025!",
    createDate("01/09/2025"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1330100964838453",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("01/16/2025"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1111515506847041",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS ft. Natasha & Joel",
    createDate("01/23/2025"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1410368940368922",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS ft. Natasha",
    createDate("01/30/2025"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1111716973536171",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS ft. Natasha & Joel!",
    createDate("02/06/2025"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/614664831193904",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS feat. Alison + Joel!",
    createDate("02/13/2025"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/539457109110882",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS: New Schedule!",
    createDate("02/20/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1524689911505024",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("02/27/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("03/06/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1710547873218845/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("03/13/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/983027693778198/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS: Happy Equinox!",
    createDate("03/20/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1426661538204036/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS ft. Alison & Joel!",
    createDate("03/27/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/918253483541720/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("04/03/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1167904950863891/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("04/10/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/984227936988025/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "DYOS: Riley's Birthday!",
    createDate("04/17/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/1201456921338933/",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("04/24/2025"),
    feb2025Schedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE,
    {
      facebookLink: "https://www.facebook.com/events/4023605991297703/",
    }
  ),
];

function getNextEvents(numEvents) {
  let beginningOfToday = getBeginningOfTodayDate();

  return events
    .filter((event) => event.date >= beginningOfToday)
    .slice(0, numEvents);
}

export default getNextEvents;
