import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export function Ground(props) {
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightgrey" />
    </mesh>
  );
}
