import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Sky } from "@react-three/drei";
import { createXRStore, XR } from "@react-three/xr";
import ControlledXROrigin from "./components/controlled-position";
import TeslaModel from "./components/tesla-model";
import ColorPicker from "./components/color-picker";
import Ground from "./components/ground";
import { DEFAULT_CAMERA_POSITION } from "./utils/defaults";

export default function App() {
  const store = createXRStore({
    emulate: { inject: true },
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
          <Ground />
          <PerspectiveCamera
            makeDefault
            position={DEFAULT_CAMERA_POSITION.clone()}
            fov={90}
          />
          <group position={[2, 0, 2]} scale={1.4}>
            <TeslaModel />
          </group>
          <ColorPicker />
          <ControlledXROrigin />
        </XR>
      </Canvas>
    </>
  );
}
