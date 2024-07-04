import Method from "../types/method/Method";
import Decision from "../types/Decision";
import Handler from "../types/Handler";


export interface HandlerManager {
  createHandler(decisions: Decision[], methods: Method[]): Handler;
  deleteHandler(handlerId: string): void;
  addHandler(handler: Handler): void;
  fetchHandler(handlerId: string): Handler;
}

class DefaultHandlerManager implements HandlerManager {
  createHandler(decisions: Decision[], methods: Method[]): Handler {
    // 구현해야 할 로직
    return { decisions, methods };
  }
  deleteHandler(handlerId: string): void {
    // 구현해야 할 로직
  }
  addHandler(handler: Handler): void {
    // 구현해야 할 로직
  }
  fetchHandler(handlerId: string): Handler {
    // 구현해야 할 로직
    return { decisions: [], methods: [] }; // Placeholder return
  }
}