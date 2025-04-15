import { OrbitControls, ScrollControls } from "@react-three/drei";
import { PrinterHouse } from "./PrinterHouse";
import { AmbientLight } from "three";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <mesh>
        <ScrollControls pages={3} damping={0.25}>
          <Overlay />
          <PrinterHouse />
        </ScrollControls>
        <ambientLight intensity={1.75} />
      </mesh>
    </>
  );
};
