import EventType from "../types/EventType";
import CommonEvent from "../CommonEvent";
import {actionEventTypeGuard} from "../type-guard/eventTypeGuard";
import ActionEvent from "../ActionEvent";

export interface EventCreator {
  createEvent(eventType: EventType): CommonEvent;
}

// Concrete implementations for each feature
class SimpleEventCreator implements EventCreator {
  createEvent(eventType: EventType): CommonEvent {
    if (actionEventTypeGuard(eventType)) {
      return new ActionEvent(eventType);
    }

    throw new Error('이벤트 잘못 들어옴');
  }
}
