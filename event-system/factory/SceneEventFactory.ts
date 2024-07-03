import ActionEvent from '../ActionEvent';
import Decision from '../types/Decision';
import EventType from '../types/EventType';
import { ConcreteMethodNames } from '../types/method/ConcreteMethod';
import Method from '../types/method/Method';
import EventFactory from './EventFactory';
import Handler from '../types/Handler';
import { actionEventTypeGuard } from '../type-guard/eventTypeGuard';

class SceneEventFactory implements EventFactory {
  constructor() {}

  createEvent(eventType: EventType): ActionEvent {
    if (actionEventTypeGuard(eventType)) {
      return new ActionEvent(eventType);
    }
    throw new Error('Invalid event type');
  }

  createDecision(decision: Decision): Decision {
    return decision;
  }

  createHandler(
    decisions: Array<Decision>,
    methods: Method<unknown>[]
  ): Handler {
    const decisionsForHandler = decisions.map((decision) => {
      return decision;
    });

    return {
      decisions: decisionsForHandler,
      methods: methods
    };
  }

  createMethod<T>(methodName: ConcreteMethodNames, params: T): Method<T> {
    return {
      type: methodName,
      parameters: params
    };
  }
}

export default SceneEventFactory;
