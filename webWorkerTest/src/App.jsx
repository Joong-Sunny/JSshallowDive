import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import spinner from './assets/spinner.svg'
import './App.css'
import { useState } from "react";
// import { heavyCalculation } from "./heavyCalculation.js";
// import www from './worker.js'

function App() {

  const [count, setCount] = useState(0);

  const handleHeavyCalculation = () => {
    // console.log(new URL('./worker.js', import.meta.url))
    // console.log(import.meta.url)
    const worker = new Worker(new URL('./worker.js', import.meta.url));
    // const worker = new Worker('./worker.js', {type: 'module'});
    worker.postMessage(100000);
    worker.onmessage = (e) => {
      console.log("돌아온결과....", e.data);
    };
  }

  // const handleHeavyCalculation = () => {
  //   const result = heavyCalculation(1000000000)
  //   console.log(result)
  // }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={spinner} className="nono" alt="spinnnn" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WebWorkerTest</h1>
      <div className="card">
        <button onClick={handleHeavyCalculation}>
          heavy calculation
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          eat burger
        </button>
        <p>
          햄최몇? I can eat {count} 🍔
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
