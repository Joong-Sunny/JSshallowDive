import ActionEvent from '../ActionEvent';
import Decision from '../types/Decision';
import EventType from '../types/EventType';
import {DecisionManager} from "../Manager/DecisionManager";
import {MethodManager} from "../Manager/MethodManager";
import {HandlerManager} from "../Manager/HandlerManager";


class SceneEventFactory {
  private eventCreator: EventCreator;
  private methodManager: MethodManager;
  private handlerManager: HandlerManager;
  private decisionManager: DecisionManager;

  constructor(eventCreator: EventCreator, methodManager: MethodManager, handlerManager: HandlerManager) {
    this.eventCreator = eventCreator;
    this.methodManager = methodManager;
    this.handlerManager = handlerManager;
  }

  createEvent(eventType: EventType): CommonEvent {
    return this.eventCreator.createEvent(eventType);
  }

  manageMethod(): MethodManager {
    return this.methodManager;
  }

  manageHandler(): HandlerManager {
    return this.handlerManager;
  }
}

export default SceneEventFactory;
