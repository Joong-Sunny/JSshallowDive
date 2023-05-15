import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import * as THREE from "three";

function Cubes({ count }) {
  const meshRef = useRef();
  const dummy = new THREE.Object3D();

  useFrame((state, delta) => {
    if (meshRef.current) {
      let i = 0;
      while (i < count) {
        const x = Math.random() * 10 - 5;
        const y = Math.random() * 10 - 5;
        const z = Math.random() * 10 - 5;
        const rotation = Math.random() * Math.PI;
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, 0, rotation);
        dummy.rotateY(delta * 0.001);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        i++;
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"orange"} />
    </instancedMesh>
  );
}

function Scene() {
  const [count, setCount] = useState(0);

  const addCube = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={addCube}>Add Cube</button>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[1, 1, 1]} />
        <Cubes count={count} />
      </Canvas>
    </div>
  );
}

export default Scene;
