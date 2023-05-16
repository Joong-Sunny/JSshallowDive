import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { Box } from '@react-three/drei'

function Cube({ position, rotationSpeed, setCalls }) {
  const ref = useRef()
  const {gl} = useThree();

  useFrame((state, delta) => {
    setCalls(gl.info.render.calls);
    ref.current.rotation.y += rotationSpeed
  })

  return (
    <Box args={[0.1, 0.1, 0.1]} ref={ref} position={position} >
      <meshStandardMaterial attach="material" color="hotpink" />
    </Box>
  )
}

function Scene() {
  const [cubes, setCubes] = useState([])
  const [calls, setCalls] = useState(0)

  const addCube =  () => {

    const temp = []

    for (let i = 0; i < 1000 ; i++){
    const x = Math.random() * 10 - 5
    const y = Math.random() * 10 - 5
    const z = Math.random() * 10 - 5
    const position = [x, y, z]
    const rotationSpeed = Math.random() * 0.02
    temp.push ({ position, rotationSpeed })
  }
  
  setCubes([...cubes, ...temp])

  }

  return (
    <div>
      <button onClick={addCube}>Add Cube</button>
      <p> Draw Calls: {calls}</p>
      <p> Cubes: {cubes.length}개</p>
      <Canvas style={{ width: "40vw", height: "50vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[1, 1, 1]} />
        {cubes.map((cube, i) => (
          <Cube key={i} position={cube.position} rotationSpeed={cube.rotationSpeed} setCalls = {setCalls} />
        ))}
      </Canvas>
    </div>
  )
}

export default Scene
