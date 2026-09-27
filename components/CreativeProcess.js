"use client";

import { useEffect, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "THE IDEA",
    description:
      "Every artwork begins with an idea, feeling or visual thought.",
  },
  {
    number: "02",
    title: "EXPLORATION",
    description:
      "Shapes, colors and compositions are explored before the final direction emerges.",
  },
  {
    number: "03",
    title: "THE PROCESS",
    description:
      "Layers of paint, texture and detail gradually build the visual world.",
  },
  {
    number: "04",
    title: "THE FINAL WORK",
    description:
      "The finished artwork becomes a complete expression of the original idea.",
  },
];

export default function CreativeProcess() {
  const [activeProcess, setActiveProcess] = useState(null);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("creative-process");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollDistance = sectionHeight - viewportHeight;

      if (scrollDistance <= 0) return;

      let progress = -rect.top / scrollDistance;

      progress = Math.max(0, Math.min(1, progress));

      /*
        01 → 0%
        02 → 20%
        03 → 40%
        04 → 60%
        Section ends → 70%
      */

      if (progress >= 0.60) {
        setVisibleCount(4);
      } else if (progress >= 0.40) {
        setVisibleCount(3);
      } else if (progress >= 0.20) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="creative-process"
      className="relative min-h-[115vh] overflow-hidden bg-[#0B0B0B] px-6 md:px-10"
    >
      <div className="sticky top-0 flex min-h-screen items-center py-20 md:py-28">

        <div className="mx-auto w-full max-w-7xl">

          {/* Heading */}
          <div className="mb-12 md:mb-16">

            <p className="mb-4 text-xs tracking-[0.35em] text-[#B89B67]">
              THE PROCESS
            </p>

            <h2 className="max-w-3xl text-4xl leading-tight tracking-[-0.02em] text-[#F2EEE7] md:text-7xl">
              From idea
              <br />
              to artwork.
            </h2>

          </div>

          {/* Process Boxes */}
          <div className="grid grid-cols-4 border-t border-white/10">

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                onMouseEnter={() => setActiveProcess(index)}
                onMouseLeave={() => setActiveProcess(null)}
                className={`group relative min-w-0 overflow-hidden border-b border-white/10 py-5 transition-all duration-700 ease-out md:py-7 ${
                  index !== 3
                    ? "border-r border-white/10"
                    : ""
                } ${
                  index < visibleCount
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >

                {/* Hover Background */}
                <div
                  className={`absolute inset-0 z-0 transition-all duration-500 ${
                    activeProcess === index
                      ? "bg-[#151515]"
                      : "bg-transparent"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10 px-4 md:px-6">

                  {/* Number */}
                  <span
                    className={`text-xs tracking-[0.2em] transition-colors duration-500 ${
                      activeProcess === index
                        ? "text-[#B89B67]"
                        : "text-[#55504A]"
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-8 text-lg tracking-[-0.01em] text-[#F2EEE7] transition-transform duration-500 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xs text-xs leading-5 text-[#A9A39A] md:text-sm">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-8 flex items-center">
                    <span className="text-xl text-[#B89B67] transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}