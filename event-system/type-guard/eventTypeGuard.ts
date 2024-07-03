import { ActionEventType, DerivedEventType } from '../types/EventType';

const actionEventTypeList: Array<ActionEventType> = ['onClick', 'onKeyDown'];

const actionEventTypeGuard = (
  eventType: string
): eventType is ActionEventType => {
  return eventType in actionEventTypeList;
};

const derivedEventTypeList: Array<DerivedEventType> = [
  'onCollision',
  'onOutOfBounds'
];

const derivedEventTypeGuard = (eventType: string): eventType is string => {
  return eventType in derivedEventTypeList;
};

export { actionEventTypeGuard, derivedEventTypeGuard };
