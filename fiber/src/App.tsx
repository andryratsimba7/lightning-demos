import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

//TODO Defining the box component like any React component
function Box() {
  const ref = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial attach="material-0" color="red" />
      <meshBasicMaterial attach="material-1" color="green" />
      <meshBasicMaterial attach="material-2" color="blue" />
      <meshBasicMaterial attach="material-3" color="cyan" />
      <meshBasicMaterial attach="material-4" color="magenta" />
      <meshBasicMaterial attach="material-5" color="yellow" />
    </mesh>
  );
}

//TODO Rendering the 3D scene like any React component
function App() {
  return (
    <Canvas
      style={{ width: 640, height: 480 }}
      camera={{ position: [0, 0, -1.66] }}
    >
      <Box />
      <color attach="background" args={["black"]} />
    </Canvas>
  );
}

export default App;
