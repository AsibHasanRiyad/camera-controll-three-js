/* eslint-disable react-hooks/exhaustive-deps */
import { CameraControls, Environment, Gltf } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

import { useCameraLevaControls } from "./useLevaControl";
import { sections } from "./UI";

const Experience = ({ section }) => {
  const controls = useRef();
  const [introFinished, setIntroFinished] = useState(false);
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;
  useCameraLevaControls(controls);
  const cameraPositions = {
    front: isMobile
      ? [-0.03, 0.225, 3.8, 0.012, -0.038, 0.012, true] // Changed from 1.0 to 1.8
      : isTablet
      ? [-0.061, 0.33, 1.85, 0.023, -0.077, 0.024, true] // Changed from 1.5 to 1.85
      : [-0.061, 0.451, 2.015, 0.023, -0.077, 0.024, true],

    wheel: isMobile
      ? [0.46, 0.04, 2.45, 0.006, -0.015, -0.048, true]
      : isTablet
      ? [0.69, 0.06, 0.42, 0.009, -0.022, -0.072, true] // Changed from 0.33 to 0.42
      : [0.922, 0.082, 0.438, 0.012, -0.029, -0.096, true],

    glass: isMobile
      ? [0.24, 0.145, 2.15, 0.048, 0.022, 0.236, true] // Changed from -0.1 to 0.15
      : isTablet
      ? [0.36, 0.218, 0.05, 0.072, 0.033, 0.354, true] // Changed from -0.15 to 0.05
      : [0.479, 0.291, -0.201, 0.096, 0.043, 0.473, true],

    back: isMobile
      ? [0.378, 0.228, 1.3, -0.128, -0.011, 0.21, true] // Changed from -0.574 to -0.3
      : isTablet
      ? [0.567, 0.342, -0.65, -0.191, -0.017, 0.315, true] // Changed from -0.861 to -0.65
      : [0.756, 0.456, -1.148, -0.255, -0.022, 0.421, true],

    top: isMobile
      ? [0.146, 1.4, 1.073, -0.007, -0.056, 0.17, true] // Changed from 1.113 to 1.4
      : isTablet
      ? [0.219, 1.85, 0.109, -0.011, -0.084, 0.255, true] // Changed from 1.67 to 1.85
      : [0.292, 2.226, 0.145, -0.015, -0.112, 0.34, true],
  };
  const intro = async () => {
    controls.current.setLookAt(0, 0, 3, 0, 0, 0, false);
    await controls.current.dolly(-0.5, true);

    await controls.current.setLookAt(
      -1.2779157854869645,
      0.2718603785808995,
      2.038852847178999,
      0.3478262105019402,
      -0.023047940893941122,
      -0.03646230694790907,
      true
    );
    setIntroFinished(true);
    playTransition();
  };
  const playTransition = () => {
    controls.current.setLookAt(...cameraPositions[sections[section]], true);
  };
  useEffect(() => {
    intro();
  }, []);
  useEffect(() => {
    if (!introFinished) {
      return;
    }
    playTransition();
  }, [section]);
  return (
    <>
      <color args={["black"]} attach={"background"} />
      <CameraControls
        ref={controls}
        mouseButtons={{
          middle: 0,
          left: 0,
          right: 0,
          wheel: 0,
        }}
        touches={{
          one: 0,
          two: 0,
          three: 0,
        }}
      />
      <Gltf
        scale={0.3}
        // rotation={[degToRad(15), degToRad(40), degToRad(0)]}
        position={[0, -0.1, 0]}
        src="/models/ferrari_sf90_stradale.compressed.glb"
      />
      <group>
        <Environment rotation-y={Math.PI} preset="warehouse" blur />
      </group>
    </>
  );
};

export default Experience;
