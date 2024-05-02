import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import spinner from './assets/spinner.svg'
import './App.css'
import { useState } from "react";
import { heavyCalculation } from "./heavyCalculation.js";

function App() {

  const [count, setCount] = useState(0);

  const handleHeavyCalculationOnWorker = async () => {
    const response = await fetch('/rabbit.png');
    const blob = await response.blob();
    const worker = new Worker(new URL('./worker.js', import.meta.url));

    const startTime = performance.now();
    worker.onmessage = (e) => {
      const endTime = performance.now();
      console.log("리사이즈이미지", e.data);
      console.log(`시간 ${endTime - startTime}ms 걸림`);
    };
    worker.onerror = (err) => {
      console.error('Worker error:', err);
    };
    worker.postMessage({image: blob});
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
