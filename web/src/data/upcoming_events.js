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
  constructor(type, date, externalLinks) {
    this.type = type;
    this.date = date;
    this.externalLinks = externalLinks;
  }
}

/** Hardcoded database of all of the events. */
const events = [
  Event(EventTypes.DYOS, new Date("05/16/2024", { facebookLink: "test.com" })),
  Event(EventTypes.DYOS, new Date("05/23/2024", { facebookLink: "test.com" })),
  Event(EventTypes.DYOS, new Date("05/30/2024", { facebookLink: "test.com" })),
  Event(EventTypes.DYOS, new Date("06/06/2024", { facebookLink: "test.com" })),
  {},
];

function getNextEvents(numEvents) {
  let beginningOfToday = new Date(new Date().setHours(0, 0, 0, 0));

  return events
    .filter((event) => event.date >= beginningOfToday)
    .splice(0, numEvents);
}

export default getNextEvents;
