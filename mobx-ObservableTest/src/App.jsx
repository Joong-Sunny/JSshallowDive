import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MetaObject from "./MetaObject.js";
import OriginalMetaObject from "./MetaObjectOriginal.js";

function App() {
  // const originalMeta = new OriginalMetaObject()
  // const newMeta = new MetaObject()


  const handleClick = () => {
    console.log("clicked")
    const meta = new OriginalMetaObject()
    console.log(meta)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mobx Test</h1>
      <div className="card">
        <button onClick={handleClick}>
          클릭시 오브젝트 생성
        </button>
      </div>
    </>
  )
}

export default App
