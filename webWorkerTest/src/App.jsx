import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import spinner from './assets/spinner.svg'
import './App.css'
import { useState } from "react";
import { heavyCalculation } from "./heavyCalculation.js";

function App() {

  const [count, setCount] = useState(0);

  const handleHeavyCalculationOnWorker = () => {
    // console.log(new URL('./worker.js', import.meta.url))
    // console.log(import.meta.url)
    const worker = new Worker(new URL('./worker.js', import.meta.url));
    const worker2 = new Worker(new URL('./worker-api.js', import.meta.url));

    // const worker = new Worker('./worker.js', {type: 'module'});
    worker.postMessage(400000000);
    worker.onmessage = (e) => {
      console.log("worker 에서 돌아온결과....", e.data);
    };

    worker2.postMessage(22);
    worker2.onmessage = (e) => {
      console.log("worker2에서 돌아온결과....", e.data);
    }

    // some additional works here
    console.log("모든 작업 끝남")
  }

  const handleHeavyCalculationOnMain = () => {
    console.log("무거운작업 시작")
    const result = heavyCalculation(400000000)
    console.log("무거운작업 끝!", result)
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={spinner} className="nono" alt="spinnnn" width="60"/>
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>웹워커테스트</h1>
      <div className="card">
        <button onClick={handleHeavyCalculationOnMain}>
          일시키기 (메인스레드)
        </button>
        <button onClick={handleHeavyCalculationOnWorker}>
          일시키기 (워커)
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          햄버거먹기
        </button>
        <p>
          햄최몇? {count}개🍔 가능
        </p>
        <button onClick={() => {
          const aa = { james: "james", age: 22 }
          const bb = structuredClone(aa)
          console.log(bb)
        } }>
          temp
        </button>
      </div>
    </>
  )
}

export default App
