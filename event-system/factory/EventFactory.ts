import CommonEvent from '../CommonEvent';
import Decision from '../types/Decision';
import EventType from '../types/EventType';
import Handler from '../types/Handler';
import { ConcreteMethodNames } from '../types/method/ConcreteMethod';
import Method from '../types/method/Method';

abstract class EventFactory {
  abstract createEvent(eventType: EventType): CommonEvent;
  abstract createDecision(decision: Decision): Decision; // 어떤 함수가 될 지 몰라서 일단,,,
  abstract createHandler(
    decisions: Array<Decision>,
    methods: Method<unknown>[]
  ): Handler;
  abstract createMethod<T>(
    methodName: ConcreteMethodNames,
    params: T
  ): Method<T>;
}

export default EventFactory;
