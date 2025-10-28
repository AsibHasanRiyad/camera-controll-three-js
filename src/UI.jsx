/* eslint-disable react-refresh/only-export-components */
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// ✅ All section data in one place
export const sections = ["front", "back", "top", "wheel", "glass"];

const sectionContent = {
  front: {
    title: "Ferrari SF90 Stradale",
    subtitle:
      "Where power meets precision. A sculpted front that slices through the air with intent.",
    justify: "justify-center", // 👈 controls vertical alignment
  },
  wheel: {
    title: "Carbon Performance",
    subtitle:
      "Forged wheels, lightweight and razor-sharp — engineered for total control at 211 mph.",
    justify: "justify-end",
  },
  glass: {
    title: "A View of Velocity",
    subtitle:
      "Seamless glass curves that merge luxury and aerodynamics — form serving function.",
    justify: "justify-end",
  },
  back: {
    title: "Pure Hybrid Power",
    subtitle:
      "Rear design channels 1000 horses through a hybrid heart — elegance meets brute force.",
    justify: "justify-end",
  },
  top: {
    title: "Born for Speed",
    subtitle:
      "From above, every line tells a story of dominance — crafted in Maranello for the future.",
    justify: "justify-center",
  },
};

const UI = ({ section, onSectionChange }) => {
  const [isInit, setIsInit] = useState(false);

  // 👇 Delay intro animation slightly for smoother entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsInit(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="absolute inset-0 flex flex-col p-4   pointer-events-none">
      <div className="flex items-center justify-between flex-1 text-white">
        {/* ⬅️ Left arrow */}
        <button
          className="transition-opacity duration-200 cursor-pointer pointer-events-auto hover:opacity-50"
          onClick={() =>
            onSectionChange(section === 0 ? sections.length - 1 : section - 1)
          }
        >
          <ArrowLeft className="text-white" />
        </button>

        {/* 🧩 Dynamic section content */}
        <div className="relative flex-1 h-full">
          {sections.map((key) => {
            const { title, subtitle, justify } = sectionContent[key];
            const isActive = sections[section] === key && isInit;

            return (
              <section
                key={key}
                className={`absolute inset-4 flex flex-col ${justify} text-center transition-opacity duration-1000 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-2xl font-medium text-stone-100">{title}</h1>
                <p
                  className={`text-white ${
                    key === "front"
                      ? "text-4xl font-extrabold md:text-6xl"
                      : "text-lg md:text-xl"
                  }`}
                >
                  {subtitle}
                </p>
              </section>
            );
          })}
        </div>

        {/* ➡️ Right arrow */}
        <button
          className="transition-opacity duration-200 cursor-pointer pointer-events-auto hover:opacity-50"
          onClick={() =>
            onSectionChange(section === sections.length - 1 ? 0 : section + 1)
          }
        >
          <ArrowRight className="text-white" />
        </button>
      </div>

      {/* 🔘 Navigation dots */}
      <div className="flex items-center justify-center gap-2">
        {sections.map((sectionItem, idx) => (
          <div
            key={sectionItem}
            className={`rounded-full border border-stone-100 w-3 h-3 flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 pointer-events-auto ${
              section === idx ? "bg-stone-100" : ""
            }`}
            onClick={() => onSectionChange(idx)}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default UI;
