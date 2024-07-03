import CommonEvent from './CommonEvent';
import Decision from './types/Decision';
import Handler from './types/Handler';
import ConcreteMethod from './types/method/ConcreteMethod';
import Method from './types/method/Method';

abstract class InteractionFactory {
  abstract createEvent(): CommonEvent;
  abstract createDecision(): Decision;
  abstract createHandler(): Handler;
  abstract createMethod(): Method<ConcreteMethod>;
}

export default InteractionFactory;
