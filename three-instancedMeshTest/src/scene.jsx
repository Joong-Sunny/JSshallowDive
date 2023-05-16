import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stats } from '@react-three/drei'
import * as THREE from "three";

function Cubes({ count, setCalls }) {
  const meshRef = useRef();
  const dummy = new THREE.Object3D();
  const cubes = useRef([]);
  const {gl} = useThree();
  
  // count가 변경될 때만 새 큐브를 생성합니다.
  useEffect(() => {
    for (let i = cubes.current.length; i < count; i++) {
      console.log("useEffect작동")
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      const z = Math.random() * 10 - 5;
      const rotation = Math.random() * Math.PI;
      const cube = { position: new THREE.Vector3(x, y, z), rotation };
      cubes.current.push(cube);
    }
  }, [count]);

  useFrame((state, delta) => {
    setCalls(gl.info.render.calls)
    if (meshRef.current) {
      cubes.current.forEach((cube, i) => {
        dummy.position.copy(cube.position);
        dummy.rotation.y = cube.rotation + delta * 0.5;
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        cube.rotation = dummy.rotation.y; // Update rotation for next frame
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial attach="material" color={"orange"} />
    </instancedMesh>
  );
}

function Scene() {
  const [count, setCount] = useState(0);
  const [calls, setCalls] = useState(0)
  


  const addCube = () => {
    setCount(count + 1000);
  };

  return (
    <div>
      <button onClick={addCube}>Add Cube</button>
      <p> Draw Calls(instancedMesh): {calls}</p>
      <p> Cubes(instancedMEsh): {count}개</p>
      <Canvas style={{ width: "40vw", height: "50vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[1, 1, 1]} />
        <Cubes count={count} setCalls={setCalls} />
        <Stats />
      </Canvas>
    </div>
  );
}

export default Scene;
