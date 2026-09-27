"use client";

import { useEffect, useState } from "react";

const digitalWorks = [
     {
    number: "01",
    title: "Where Mountains Dream",
    category: "LANDSCAPE · DIGITAL ART",
    image: "/digital-art-3.png",
  },
  {
    number: "02",
    title: "Between the Waves",
    category: "SEASCAPE · DIGITAL ART",
    image: "/digital-art-1.png",
  },
  {
    number: "03",
    title: "Coastal Reverie",
    category: "LANDSCAPE · DIGITAL ART",
    image: "/digital-art-2.png",
  },
  {
    number: "04",
    title: "Unspoken",
    category: "PORTRAIT · DIGITAL ART",
    image: "/digital-art-3-potrait.png",
  },
];

export default function DigitalWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("digital-works");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const value = Math.max(
        0,
        Math.min(1, -rect.top / scrollDistance)
      );

      setProgress(value);

      const index = Math.min(
        Math.floor(value * digitalWorks.length),
        digitalWorks.length - 1
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeWork = digitalWorks[activeIndex];

  return (
    <section
      id="digital-works"
      className="relative h-[400vh] bg-[#080808]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ATMOSPHERE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,155,103,0.06),transparent_55%)]" />

        {/* TOP LABEL */}
        <div className="absolute left-6 right-6 top-16 z-30 md:left-10 md:right-10 md:top-24">
          <div className="flex items-start justify-between">

            <div>
              <p className="mb-4 text-xs tracking-[0.35em] text-[#B89B67]">
                DIGITAL WORKS
              </p>

              <h2 className="max-w-3xl text-4xl leading-[0.95] tracking-[-0.03em] text-[#F2EEE7] md:text-7xl">
                Beyond the
                <br />
                physical canvas.
              </h2>
            </div>

            <span className="hidden pt-1 text-xs tracking-[0.25em] text-[#A9A39A] md:block">
              DIGITAL EXPRESSION
            </span>

          </div>
        </div>

        {/* DIGITAL CANVAS */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="relative h-[54vh] w-[76vw] max-w-6xl md:h-[62vh] md:w-[58vw]">

            {/* DIGITAL FRAME / SCREEN GLOW */}
            <div className="absolute -inset-6 rounded-[2px] bg-[#B89B67]/5 blur-2xl" />

            {/* ARTWORKS */}
            {digitalWorks.map((work, index) => {

              const isActive = index === activeIndex;

              const distance = index - activeIndex;

              return (
                <div
                  key={work.number}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0) scale(1)"
                      : `translateY(${distance > 0 ? 80 : -80}px) scale(0.94)`,
                    transition:
                      "opacity 900ms ease, transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
                    pointerEvents: isActive
                      ? "auto"
                      : "none",
                  }}
                >

                  {/* IMAGE */}
                  <div className="relative h-full w-full overflow-hidden bg-[#111111]">

                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-contain"
                      style={{
                        transform: isActive
                          ? `scale(${1.04 - progress * 0.015})`
                          : "scale(1.08)",
                        transition:
                          "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />

                    {/* DIGITAL SCAN / LIGHT */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `linear-gradient(
                          90deg,
                          transparent ${Math.max(
                            0,
                            progress * 100 - 20
                          )}%,
                          rgba(255,255,255,0.08) ${Math.min(
                            100,
                            progress * 100
                          )}%,
                          transparent ${Math.min(
                            100,
                            progress * 100 + 20
                          )}%
                        )`,
                        mixBlendMode: "screen",
                      }}
                    />

                    {/* EDGE */}
                    <div className="absolute inset-0 border border-white/10" />

                  </div>

                </div>
              );
            })}

            {/* FLOATING DIGITAL MARKER */}
            <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 md:block">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B89B67]/30">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B89B67]" />
              </div>

            </div>

          </div>
        </div>

        {/* ARTWORK INFO */}
        <div className="absolute bottom-16 left-6 z-30 md:bottom-20 md:left-10">

          <div
            key={activeWork.number}
            className="animate-[digitalText_700ms_ease-out]"
          >

            <p className="text-[9px] tracking-[0.3em] text-[#B89B67]">
              {activeWork.category}
            </p>

            <h3 className="mt-3 text-3xl tracking-[-0.02em] text-[#F2EEE7] md:text-5xl">
              {activeWork.title}
            </h3>

          </div>

        </div>

        {/* PROGRESS / COUNTER */}
        <div className="absolute bottom-8 left-6 right-6 z-30 md:left-10 md:right-10">

          <div className="flex items-center gap-4">

            <span className="text-[10px] tracking-[0.25em] text-[#A9A39A]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="h-px flex-1 bg-white/10">

              <div
                className="h-px bg-[#B89B67] transition-all duration-300"
                style={{
                  width: `${progress * 100}%`,
                }}
              />

            </div>

            <span className="text-[10px] tracking-[0.25em] text-[#A9A39A]">
              04
            </span>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes digitalText {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}