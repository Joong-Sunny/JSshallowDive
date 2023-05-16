import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Cubes({ count }) {
  const meshRef = useRef();
  const dummy = new THREE.Object3D();
  const cubes = useRef([]);

  // count가 변경될 때만 새 큐브를 생성합니다.
  useEffect(() => {
    for (let i = cubes.current.length; i < count; i++) {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      const z = Math.random() * 10 - 5;
      const rotation = Math.random() * Math.PI;
      const cube = { position: new THREE.Vector3(x, y, z), rotation };
      cubes.current.push(cube);
    }
  }, [count]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      cubes.current.forEach((cube, i) => {
        dummy.position.copy(cube.position);
        dummy.rotation.y = cube.rotation + delta * 0.05;
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        cube.rotation = dummy.rotation.y; // Update rotation for next frame
      });
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
