import CommonEvent from './CommonEvent';
import { ActionEventType } from './types/EventType';
import Handler from './types/Handler';

class ActionEvent extends CommonEvent {
  public handlers: Handler[] = [];
  constructor(type: ActionEventType) {
    super(type);
  }
}

export default ActionEvent;
