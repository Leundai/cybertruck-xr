import { Vector3, Group } from "three";
import { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const positionHelper = new Vector3();

export function Billboard({ children }: { children?: ReactNode }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current == null) {
      return;
    }
    ref.current.lookAt(state.camera.getWorldPosition(positionHelper));
    ref.current.rotation.x = 0;
    ref.current.rotation.z = 0;
  });

  return (
    <group ref={ref} rotation-order="YXZ">
      {children}
    </group>
  );
}
