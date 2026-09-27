"use client";

import { useEffect, useState } from "react";

const collections = [
  {
    number: "01",
    title: "ABSTRACT",
    description: "Color, form and emotion.",
    image: "/inward.jpg",
  },
  {
    number: "02",
    title: "NATURE & LANDSCAPES",
    description: "Fragments of imagined worlds.",
    image: "/lake-of-dreams.jpg",
  },
  {
    number: "03",
    title: "DREAMSCAPES",
    description: "Between reality and imagination.",
    image: "/digital-art-3-potrait.png",
  },
  {
    number: "04",
    title: "CONTEMPORARY",
    description: "Experimental visual expressions.",
    image: "/blooming-in-the-dark.jpg",
  },
];

export default function Collections() {
  const [activeCollection, setActiveCollection] = useState(null);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("collections");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollableDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Actual progress through this section
      const progress = Math.max(
        0,
        Math.min(
          1,
          -rect.top / scrollableDistance
        )
      );

      /*
        4 items finish appearing by 70%.

        01 → 0%
        02 → 23%
        03 → 46%
        04 → 70%
      */

      if (progress >= 0.70) {
        setVisibleCount(4);
      } else if (progress >= 0.46) {
        setVisibleCount(3);
      } else if (progress >= 0.23) {
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
      id="collections"
      className="relative min-h-[300vh] bg-[#0B0B0B] px-6 md:px-10"
    >
      <div className="sticky top-0 flex min-h-screen items-center py-28 md:py-40">
        <div className="mx-auto w-full max-w-7xl">

          {/* Heading */}
          <div className="mb-20">
            <p className="mb-4 text-xs tracking-[0.35em] text-[#B89B67]">
              EXPLORE
            </p>

            <h2 className="max-w-3xl text-4xl leading-tight tracking-[-0.02em] text-[#F2EEE7] md:text-7xl">
              Collections
              <br />
              of visual worlds.
            </h2>
          </div>

          {/* Collection List */}
          <div className="grid grid-cols-4 border-t border-white/10">

            {collections.map((collection, index) => (
              <div
                key={collection.number}
                onMouseEnter={() =>
                  setActiveCollection(index)
                }
                onMouseLeave={() =>
                  setActiveCollection(null)
                }
                className={`group relative min-w-0 overflow-hidden border-b border-white/10 py-5 transition-all duration-700 ease-out md:py-7 ${
                  index !== 3
                    ? "border-r border-white/10"
                    : ""
                } ${
                  index < visibleCount
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >

                {/* Artwork inside card */}
                <div
                  className={`absolute inset-0 z-0 overflow-hidden transition-all duration-700 ease-out ${
                    activeCollection === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className={`h-full w-full object-cover transition-transform duration-1000 ease-out ${
                      activeCollection === index
                        ? "scale-100"
                        : "scale-110"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-[#0B0B0B]/10" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 md:px-6">

                  {/* Number */}
                  <span
                    className={`text-xs tracking-[0.2em] transition-colors duration-500 ${
                      activeCollection === index
                        ? "text-[#B89B67]"
                        : "text-[#55504A]"
                    }`}
                  >
                    {collection.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-8 text-lg tracking-[-0.01em] text-[#F2EEE7] transition-transform duration-500 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
                    {collection.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xs text-xs leading-5 text-[#A9A39A] md:text-sm">
                    {collection.description}
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