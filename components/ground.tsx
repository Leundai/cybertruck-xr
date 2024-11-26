export default function Ground() {
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightgrey" />
    </mesh>
  );
}
