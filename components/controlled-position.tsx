import { useXRControllerLocomotion, XROrigin } from "@react-three/xr";
import { useRef } from "react";

type Props = {};

const ControlledXROrigin = ({}: Props) => {
  const ref = useRef(null);
  useXRControllerLocomotion(ref, { speed: 5 });
  return <XROrigin ref={ref} position={[2, 0, 2]} />;
};

export default ControlledXROrigin;
