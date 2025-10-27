import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useState } from "react";
import UI from "./UI";
import { Leva } from "leva";

const App = () => {
  const [section, setSection] = useState(0);
  return (
    <>
      <Leva hidden />
      <Canvas
        style={{
          overflow: "hidden",
        }}
        camera={{ position: [0, 0, 3], fov: 30 }}
      >
        <color attach={"background"} args={["#000000"]} />
        <Experience section={section} />
      </Canvas>
      <UI section={section} onSectionChange={setSection} />
    </>
  );
};

export default App;
