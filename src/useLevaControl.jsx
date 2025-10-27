// src/hooks/useCameraLevaControls.js
import { useControls, button } from "leva";

export const useCameraLevaControls = (controlsRef) => {
  useControls("Settings", {
    smoothTime: {
      value: 0.35,
      max: 2,
      min: 0.1,
      step: 0.1,
      onChange: (value) => {
        controlsRef.current.smoothTime = value;
      },
    },
  });
  useControls("Dolly", {
    in: button(() => controlsRef.current?.dolly(1, true)),
    out: button(() => controlsRef.current?.dolly(-1, true)),
  });

  useControls("Truck", {
    left: button(() => controlsRef.current?.truck(0.5, 0, true)),
    right: button(() => controlsRef.current?.truck(-0.5, 0, true)),
    up: button(() => controlsRef.current?.truck(0, 0.5, true)),
    down: button(() => controlsRef.current?.truck(0, -0.5, true)),
    diagonal: button(() => controlsRef.current?.truck(-0.5, 0.5, true)),
  });

  useControls("Rotate", {
    up: button(() => controlsRef.current?.rotate(0, 0.5, true)),
    down: button(() => controlsRef.current?.rotate(0, -0.5, true)),
    left: button(() => controlsRef.current?.rotate(0.5, 0, true)),
    right: button(() => controlsRef.current?.rotate(-0.5, 0, true)),
    diagonal: button(() => controlsRef.current?.rotate(-0.5, 1, true)),
  });

  useControls("Helper", {
    getLookAt: button(() => {
      const position = controlsRef.current.getPosition();
      const target = controlsRef.current.getTarget();
      console.log(...position, ...target);
    }),
  });
};
