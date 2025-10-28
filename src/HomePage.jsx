import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useRef, useState } from "react";
import UI from "./UI";
import { Leva } from "leva";
import { View } from "@react-three/drei";

const HomePage = () => {
  const [section, setSection] = useState(0);
  const threeContainer = useRef();
  const viewContainer = useRef();
  return (
    <main ref={threeContainer}>
      <Leva hidden />
      <Canvas
        eventSource={threeContainer}
        className="canvas"
        camera={{ position: [0, 0, 3], fov: 30 }}
      >
        <color attach={"background"} args={["#000000"]} />

        <View track={viewContainer}>
          <Experience section={section} />
        </View>
      </Canvas>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          pointerEvents: "auto",
        }}
        ref={viewContainer}
      >
        <UI section={section} onSectionChange={setSection} />
      </div>
      {/* Scrollable content below */}
      <section className="bg-red-600 h-screen flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Next Section</h2>
      </section>

      <section className="bg-blue-600 h-screen flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Another Section</h2>
      </section>
    </main>
  );
};

export default HomePage;
