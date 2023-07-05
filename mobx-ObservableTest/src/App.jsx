import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { observable } from "mobx";
import { observer } from "mobx-react";
import OriginalMetaObject from "./MetaObjectOriginal.js";
import * as THREE from "three";

const metaObjects = observable([]);


const App = observer(() => {
  const [state, setState] = React.useState(0);
  const handleClick1 = () => {
    const newMetaObjects = Array.from({length: 10}, (_, i) =>
      new OriginalMetaObject());
    metaObjects.replace(newMetaObjects);

    setState(1);
    console.log(metaObjects)
  }

  const handleClick2 = () => {
    console.log(metaObjects[0])
    metaObjects[0].moveX()

  }


  const handleClick3 = () => {
    console.log(metaObjects[1])
    metaObjects[1].moveX()
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
        <button onClick={handleClick1}>
          metaObject 10개 만들기
        </button>
        <button onClick={handleClick2}>
          1번 Metaobject 값 1더하기
        </button>
        <button onClick={handleClick3}>
          2번 Metaobject 값 1더하기
        </button>
      </div>
      <p>
        변해야할값: group.position.x { state &&  metaObjects[0].group.position.x}
      </p>
      <p>
        변해야할값: group.position.x { state &&  metaObjects[1].group.position.x}
      </p>
    </>
  )
})

export default App
