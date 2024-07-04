export interface DecisionManager {
  createDecision(): void;
  deleteDecision(): void;
  addDecision(): void;
  fetchDecision(): void;
  findDecision(): void;
  updateDecision(): void;
}

// decision.store.ts

//Decision store{
// 핸들러스토어 감시중....
// 핸들러 스토어 변화시... autorun => decsion
//
// }


class DefaultDecisionManager implements DecisionManager {
  createDecision() {
    // 컴포넌트 단에서 호출됨
    // 모든 비즈니스 로직 추가...
    // const newDec = new Decision()
    // Decision 스토어에 newDec를 넣는 메소드 호출
  }
  deleteDecision() {
    //구현해야 할 로직
  }
  addDecision() {
    //구현해야 할 로직
  }
  fetchDecision() {
    //구현해야 할 로직
  }
  findDecision() {
    //구현해야 할 로직
  }
  updateDecision() {
    //구현해야 할 로직
  }

}


