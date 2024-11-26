import { ThreeEvent } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Matrix4, Vector3 } from "three";

const matrixHitHelper = new Matrix4();
const positionOffset = new Vector3(0, 0, 0);
const matrixPositionHelper = new Matrix4();

export default function Draggable({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);
  const draggingPointerId = useRef<number | undefined>(undefined);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (draggingPointerId.current != null) {
      return;
    }
    draggingPointerId.current = e.pointerId;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    // set position offset based on the pointer position
    matrixHitHelper.copy(ref.current!.parent!.matrixWorld).invert();
    positionOffset
      .copy(e.point)
      .applyMatrix4(matrixHitHelper)
      .sub(ref.current!.position);
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (draggingPointerId.current == null || ref.current == null) {
      return;
    }
    matrixPositionHelper.copy(ref.current.parent!.matrixWorld).invert();
    ref.current.position
      .copy(e.point)
      .applyMatrix4(matrixPositionHelper)
      .sub(positionOffset);
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    if (draggingPointerId.current == null) {
      return;
    }
    (e.target as HTMLElement).releasePointerCapture(draggingPointerId.current);
    draggingPointerId.current = undefined;
  };

  return (
    <group
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {children}
    </group>
  );
}
