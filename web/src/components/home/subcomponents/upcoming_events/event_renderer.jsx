import BoogieEventCard from "./event_cards/boogie_event_card";
import DYOSEventCard from "./event_cards/dyos_event_card";
import EventTypes from "@/common/event_types";
import TeacherTrainingEventCard from "./event_cards/teacher_training_event_card";

function EventRendererFactory(props) {
  let event = props.event;

  switch (event.type) {
    case EventTypes.DYOS:
      return <DYOSEventCard event={event} />;
    case EventTypes.Boogie:
      return <BoogieEventCard event={event} />;
    case EventTypes.TeacherTraining:
      return <TeacherTrainingEventCard event={event} />;
    default:
      return;
  }
}

export default EventRendererFactory;
