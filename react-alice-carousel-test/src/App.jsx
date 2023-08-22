import { useState } from 'react'
import Gallery from './AliceCarouselTestComponent.jsx'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <Gallery markedNumber={number}/>
      <button onClick={() => setNumber(1)}> 1번이 작아지는 버튼</button>
      <button onClick={() => setNumber(2)}> 2번이 작아지는 버튼</button>
      <button onClick={() => setNumber(3)}> 3번이 작아지는 버튼</button>
    </>
  )
}

export default App
