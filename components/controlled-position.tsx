import { useXRControllerLocomotion, XROrigin } from "@react-three/xr";
import { useRef } from "react";
import { DEFAULT_CAMERA_POSITION } from "../utils/defaults";

type Props = {};

const ControlledXROrigin = ({}: Props) => {
  const ref = useRef(null);
  useXRControllerLocomotion(ref, { speed: 5 });
  return <XROrigin ref={ref} position={DEFAULT_CAMERA_POSITION} />;
};

export default ControlledXROrigin;
