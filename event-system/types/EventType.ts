type ActionEventType = 'onClick' | 'onKeyDown';

type DerivedEventType = 'onCollision' | 'onOutOfBounds';

type EventType = ActionEventType | DerivedEventType;

export default EventType;

export type { ActionEventType, DerivedEventType };
