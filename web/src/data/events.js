/**
 * Exposes a function to get the details of the next [numEvents] [Event]s.
 *
 * Callers are expected to check the [type] of the [Event] and handle rendering.
 * Other [EventTypes] should be added to the const list. The [Event] class
 * can also be extended to allow adding additional details (i.e. schedule, pricing,
 * etc.) And should be handled be the caller to be rendered properly.
 */
import messages from "../common/messages";
import { createDate } from "utils/date_utils";

const DEFAULT_LOCATION = "Studio M Ballroom, San Jose, CA";
const DEFAULT_PRICE = "$10 - 40";
const MINI_DYOS_PRICE = "$10-$20";

const dayjs = require("dayjs");

const EventTypes = Object.freeze({
  DYOS: Symbol("DYOS"),
});

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
  { time: "7:30pm - 8:15pm", name: "Connection, Rhythm, and Flow" },
  { time: "8:15pm - 9:00pm", name: "You, Me, and the Music" },
  { time: "8:45pm - 9:30pm", name: "WCS Foundations" },
  { time: "9:00pm - 11:30pm", name: "Social Dancing" },
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
    // TODO: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("07/11/2024"),
    defaultDyosSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // TODO: add details
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
    // todo: add details
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
    // TODO: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("08/08/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("08/15/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("08/22/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.miniDyos,
    createDate("08/29/2024"),
    miniDyosSchedule,
    DEFAULT_LOCATION,
    MINI_DYOS_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("09/05/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("09/12/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("09/19/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("09/26/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("10/03/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("10/10/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("10/17/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("10/24/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("10/31/2024"),
    updatedDyosClassNameSchedule,
    DEFAULT_LOCATION,
    DEFAULT_PRICE
    // todo: add details
  ),
];

function getNextEvents(numEvents) {
  let beginningOfToday = dayjs(new Date().setHours(0, 0, 0, 0));

  return events
    .filter((event) => event.date >= beginningOfToday)
    .slice(0, numEvents);
}

export default getNextEvents;
