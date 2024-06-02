/**
 * Exposes a function to get the details of the next [numEvents] [Event]s.
 *
 * Callers are expected to check the [type] of the [Event] and handle rendering.
 * Other [EventTypes] should be added to the const list. The [Event] class
 * can also be extended to allow adding additional details (i.e. schedule, pricing,
 * etc.) And should be handled be the caller to be rendered properly.
 */
import messages from "../common/messages";

const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const EventTypes = Object.freeze({
  DYOS: Symbol("DYOS"),
});

class Event {
  constructor(type, title, date, eventSchedule, externalLinks) {
    this.type = type;
    this.title = title;
    this.date = date;
    this.eventSchedule = eventSchedule;
    this.externalLinks = externalLinks;
  }
}

const defaultDyosSchedule = [
  { time: "7:30pm - 8:15pm", name: "Building Blocks" },
  { time: "8:15pm - 9:00pm", name: "Creative Expressions" },
  { time: "8:45pm - 9:30pm", name: "Welcome to WCS" },
  { time: "9:00pm - 11:30pm", name: "Social Dancing" },
];

function createDate(dateString) {
  return dayjs(dateString, "MM/DD/YYYY");
}

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
    defaultDyosSchedule
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("05/23/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "https://www.facebook.com/events/1471380160454652",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "Do Your Own Swing feat. DJ Andrew Roth!",
    createDate("05/30/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "https://www.facebook.com/events/812141927505563",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("06/06/2024"),
    defaultDyosSchedule
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("06/13/2024"),
    defaultDyosSchedule
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("06/20/2024"),
    defaultDyosSchedule
  ),
  new Event(
    EventTypes.DYOS,
    "Do Your Own Swing - Pride Party!",
    createDate("06/27/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "https://www.facebook.com/events/457255416887420",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    createDate("07/11/2024"),
    defaultDyosSchedule
  ),
];

function getNextEvents(numEvents) {
  let beginningOfToday = dayjs(new Date().setHours(0, 0, 0, 0));

  return events
    .filter((event) => event.date >= beginningOfToday)
    .slice(0, numEvents);
}

export default getNextEvents;
