/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Lexyc16 (https://sketchfab.com/Lexyc16)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tesla-cybertruck-f12e67159f75486bb21213e573520612
Title: Tesla Cybertruck
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import InteractableMesh from "./interactable-mesh";

type Props = {};

function TeslaModel({}: Props) {
  const { nodes, materials } = useGLTF("assets/cybertruck/scene.gltf");
  return (
    <group dispose={null}>
      <group position={[1.848, 0.859, 0.807]} scale={0.452}>
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          name="body"
          material={materials.Material}
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.001"]}
          name="windows"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Material.002"]}
          name="windowsTrim"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Material.003"]}
          name="lowerTrim"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["Material.004"]}
          name="frontLight"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["Material.005"]}
          name="backLight"
        />
      </group>
      <group
        position={[2.345, 0.455, -0.249]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.244, 0.263, 0.244]}
      >
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials["Material.006"]}
          name="backLeftWheel"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials["Material.007"]}
          name="backLeftWheelRim"
        />
      </group>
      <group
        position={[2.345, 0.455, 1.869]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.244, 0.263, 0.244]}
      >
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Material.006"]}
          name="frontLeftWheel"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["Material.007"]}
          name="frontLeftWheelRim"
        />
      </group>
      <group
        position={[1.348, 0.455, 1.869]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.244, 0.263, 0.244]}
      >
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials["Material.006"]}
          name="frontRightWheel"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials["Material.007"]}
          name="frontRightWheelRim"
        />
      </group>
      <group
        position={[1.348, 0.455, -0.249]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.244, 0.263, 0.244]}
      >
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials["Material.006"]}
          name="backRightWheel"
        />
        <InteractableMesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials["Material.007"]}
          name="backRightWheelRim"
        />
      </group>
    </group>
  );
}
export default TeslaModel;