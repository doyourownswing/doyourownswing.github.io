import BoogieEventCard from "./event_cards/boogie_event_card";
import DYOSEventCard from "./event_cards/dyos_event_card";
import EventTypes from "common/event_types";

function EventRendererFactory(props) {
  let event = props.event;

  switch (event.type) {
    case EventTypes.DYOS:
      return <DYOSEventCard event={event} />;
    case EventTypes.Boogie:
      return <BoogieEventCard event={event} />;
  }
}

export default EventRendererFactory;
