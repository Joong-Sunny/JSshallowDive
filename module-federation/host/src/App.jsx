import "./App.css";

import Button from "remoteApp/Button";
import useCount from "remoteApp/store";

function App() {
  const [count, setCount] = useCount(0);

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
