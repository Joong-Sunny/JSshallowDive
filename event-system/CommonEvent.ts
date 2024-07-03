import EventType from './types/EventType';
import Handler from './types/Handler';
import ConcreteMethod from './types/method/ConcreteMethod';

abstract class CommonEvent {
  public uuid: string;
  public handlers: Handler[] = [];
  constructor(protected type: EventType) {
    this.uuid = `id-${Math.random() * 100000}`; //uuidv4();
  }
  getType = (): EventType => {
    return this.type;
  };
  getHandlers = () => {
    return this.handlers;
  };
  getMethods = () => {
    return this.handlers.map((handler, index) => ({
      handlerIndex: index,
      methods: handler.methods
    }));
  };
  updateHandler = (handlerIndex: number, handler: Handler) => {
    this.handlers[handlerIndex] = handler;
  };
  updateMethod = (
    handlerIndex: number,
    methodIndex: number,
    method: ConcreteMethod
  ) => {
    this.handlers[handlerIndex].methods[methodIndex] = method;
  };
  addHandler = (handler: Handler) => {
    this.handlers.push(handler);
  };
  addMethod = (handlerIndex: number, method: ConcreteMethod) => {
    this.handlers[handlerIndex].methods.push(method);
  };
  removeHandler = (handlerIndex: number) => {
    this.handlers.splice(handlerIndex, 1);
  };
  removeMethod = (handlerIndex: number, methodIndex: number) => {
    this.handlers[handlerIndex].methods.splice(methodIndex, 1);
  };
}

export default CommonEvent;
