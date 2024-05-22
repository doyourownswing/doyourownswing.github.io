import messages from "../common/messages";

/**
 * Exposes a function to get the details of the next [numEvents] [Event]s.
 *
 * Callers are expected to check the [type] of the [Event] and handle rendering.
 * Other [EventTypes] should be added to the const list. The [Event] class
 * can also be extended to allow adding additional details (i.e. schedule, pricing,
 * etc.) And should be handled be the caller to be rendered properly.
 */

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
  { time: "9:00pm - 9:30pm", name: "Welcome to WCS" },
  { time: "9:00pm - 11:30pm", name: "Social Dancing" },
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
    new Date("05/16/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "test.com",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    new Date("05/23/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "https://www.facebook.com/events/1471380160454652",
    }
  ),
  new Event(
    EventTypes.DYOS,
    "Do Your Own Swing feat. DJ Andrew Roth!",
    new Date("05/30/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "https://www.facebook.com/events/812141927505563",
    }
  ),
  new Event(
    EventTypes.DYOS,
    messages.doYourOwnSwing,
    new Date("06/06/2024"),
    defaultDyosSchedule,
    {
      facebookLink: "test.com",
    }
  ),
];

function getNextEvents(numEvents) {
  let beginningOfToday = new Date(new Date().setHours(0, 0, 0, 0));

  return events
    .filter((event) => event.date >= beginningOfToday)
    .slice(0, numEvents);
}

export default getNextEvents;
