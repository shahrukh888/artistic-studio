"use client";

import { useState } from "react";

const spaces = [
  {
    number: "01",
    title: "LIVING SPACE",
    artwork: "BEYOND THE HORIZON",
    description:
      "Beyond the Horizon imagined within a refined contemporary living environment.",
    image: "/beyond-horizon-living.jpg",
  },
  {
    number: "02",
    title: "PRIVATE SPACE",
    artwork: "INWARD",
    description:
      "Inward placed within a quiet private setting where art becomes part of everyday life.",
    image: "/inward-private.jpg",
  },
  {
    number: "03",
    title: "GALLERY SPACE",
    artwork: "MOON OVER THE WAVES",
    description:
      "Moon Over the Waves presented within a minimal gallery environment.",
    image: "/moon-waves-gallery.jpg",
  },
  {
    number: "04",
    title: "BOTANICAL SPACE",
    artwork: "BLOOMING IN THE DARK",
    description:
      "Blooming in the Dark brought into a natural interior surrounded by greenery.",
    image: "/blooming-dark-botanical.jpg",
  },
  {
    number: "05",
    title: "NATURE RETREAT",
    artwork: "LAKE OF DREAMS",
    description:
      "Lake of Dreams imagined within a peaceful retreat inspired by nature.",
    image: "/lake-dreams-retreat.jpg",
  },
];

export default function ArtInSpace() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSpace = spaces[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#111111] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl md:mb-20">

          <p className="mb-4 text-xs tracking-[0.35em] text-[#B89B67]">
            ART IN SPACE
          </p>

          <h2 className="text-4xl leading-tight tracking-[-0.02em] text-[#F2EEE7] md:text-7xl">
            Art beyond
            <br />
            the canvas.
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#A9A39A]">
            Explore how selected artworks can transform different
            environments and become part of the space around them.
          </p>

        </div>


        {/* MAIN SPACE */}
        <div className="relative overflow-hidden bg-[#181818]">

          {/* Main Image */}
          <div className="relative h-[65vh] min-h-[500px] overflow-hidden md:h-[75vh]">

            {spaces.map((space, index) => (
              <img
                key={space.number}
                src={space.image}
                alt={space.title}
                className={`absolute inset-0 h-full w-full object-contain transition-all duration-1000 ease-out ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.06] opacity-0"
                }`}
              />
            ))}

            {/* Dark cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />


            {/* Number */}
            <div className="absolute right-6 top-6 md:right-10 md:top-10">

              <span className="text-xs tracking-[0.3em] text-[#F2EEE7]/80">
                {activeSpace.number} /{" "}
                {String(spaces.length).padStart(2, "0")}
              </span>

            </div>


            {/* Main Information */}
            <div
              key={activeSpace.number}
              className="absolute bottom-6 left-6 max-w-xl md:bottom-10 md:left-10"
            >

              <p className="text-[10px] tracking-[0.3em] text-[#B89B67]">
                {activeSpace.artwork}
              </p>

              <h3 className="mt-3 text-3xl tracking-[-0.02em] text-[#F2EEE7] md:text-5xl">
                {activeSpace.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#F2EEE7]/70">
                {activeSpace.description}
              </p>

            </div>

          </div>


          {/* Thumbnail Navigation */}
          <div className="border-t border-white/10 bg-[#111111] p-4 md:p-5">

            <div className="flex gap-3 overflow-x-auto pb-1">

              {spaces.map((space, index) => {

                const isActive = activeIndex === index;

                return (
                  <button
                    key={space.number}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex min-w-[150px] flex-1 overflow-hidden text-left transition-all duration-500 md:min-w-0 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-45 hover:opacity-80"
                    }`}
                  >

                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#181818]">

                      <img
                        src={space.image}
                        alt={space.title}
                        className={`h-full w-full object-cover transition-transform duration-700 ${
                          isActive
                            ? "scale-105"
                            : "scale-100 group-hover:scale-105"
                        }`}
                      />

                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          isActive
                            ? "bg-black/10"
                            : "bg-black/35"
                        }`}
                      />

                    </div>


                    {/* Thumbnail Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">

                      <div className="flex items-center justify-between">

                        <span className="text-[9px] tracking-[0.2em] text-[#F2EEE7]">
                          {space.number}
                        </span>

                        {isActive && (
                          <span className="h-px w-8 bg-[#B89B67]" />
                        )}

                      </div>

                      <p className="mt-1 text-[9px] tracking-[0.15em] text-[#F2EEE7]/80">
                        {space.title}
                      </p>

                    </div>

                  </button>
                );
              })}

            </div>

          </div>

        </div>


        {/* Bottom Detail */}
        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
            SELECT A SPACE TO EXPLORE
          </p>

          <div className="flex items-center gap-3">

            <span className="text-xs text-[#A9A39A]">
              {activeSpace.title}
            </span>

            <span className="text-[#B89B67]">
              →
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}