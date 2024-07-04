import EventType from "../types/EventType";
import CommonEvent from "../CommonEvent";
import {ConcreteMethodNames} from "../types/method/ConcreteMethod";
import Method from "../types/method/Method";
import Decision from "../types/Decision";
import Handler from "../types/Handler";

interface EventCreator {
  createEvent(eventType: EventType): CommonEvent;
}

export interface MethodManager {
  createMethod<T>(methodName: ConcreteMethodNames, params: T): Method<T>;
  changeMethod<T>(methodName: ConcreteMethodNames, params: T): Method<T>;
  deleteMethod(methodName: ConcreteMethodNames): void;
}

class BasicMethodManager implements MethodManager {
  createMethod<T>(methodName: ConcreteMethodNames, params: T): Method<T> {
    return { type: methodName, parameters: params };
  }
  changeMethod<T>(methodName: ConcreteMethodNames, params: T): Method<T> {
    // 구현해야 할 로직
    return { type: methodName, parameters: params };
  }
  deleteMethod(methodName: ConcreteMethodNames): void {
    // 구현해야 할 로직
  }
}