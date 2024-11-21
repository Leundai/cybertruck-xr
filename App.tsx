import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import {
  Bvh,
  Environment,
  Grid,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei";
import { createXRStore, XR } from "@react-three/xr";
import { Mesh } from "three";
import ControlledXROrigin from "./components/controlled-position";
import TeslaModel from "./components/tesla-model";
import { ColorPicker } from "./components/color-picker";
import { Ground } from "./components/ground";

export default function App() {
  const store = createXRStore({
    emulate: { inject: true },
    hand: {
      grabPointer: false,
      touchPointer: false,
      rayPointer: { minDistance: 0 },
    },
    controller: { grabPointer: false, rayPointer: { minDistance: 0 } },
  });

  return (
    <>
      <button
        style={{ position: "absolute", zIndex: "1" }}
        onClick={() => store.enterVR()}
      >
        Enter VR
      </button>
      <Canvas style={{ position: "absolute", inset: "0", touchAction: "none" }}>
        <XR store={store}>
          <Environment preset="park" />
          <Sky sunPosition={[100, 20, 100]} />
          <PerspectiveCamera makeDefault position={[1, 0, 2]} fov={90} />
          <Ground />
          <group position={[0, 0, 0]} scale={1.4}>
            <TeslaModel />
          </group>
          <ColorPicker />
          <ControlledXROrigin />
        </XR>
      </Canvas>
    </>
  );
}

function MyComponent() {
  const [red, setRed] = useState(true);
  const ref = useRef<Mesh>(null);
  useFrame(() => ref.current?.rotateY(0.01));
  return (
    <mesh ref={ref} onClick={() => setRed(!red)} position={[0, 0, 0]}>
      <boxGeometry />
      <meshBasicMaterial color={red ? "red" : "blue"} />
    </mesh>
  );
}
