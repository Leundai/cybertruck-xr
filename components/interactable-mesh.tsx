import { MeshProps } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BufferGeometry, Material, Mesh } from "three";
import { useColorStore } from "../store/store";
import { animated, useSpringValue } from "@react-spring/three";

type InteractableMeshProps = {
  name: string;
} & MeshProps;

const InteractableMesh = ({
  geometry,
  material,
  name,
  ...props
}: InteractableMeshProps) => {
  const materialColor = useSpringValue("#ffffff");
  const selectedColor = useColorStore((state) => state.selected);

  return (
    <animated.mesh
      onClick={() => materialColor.start(selectedColor || "#ffffff")}
      geometry={geometry}
      material={material}
      material-color={materialColor}
    />
  );
};

export default InteractableMesh;
