"use client";

import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    number: "01",
    title: "Beyond the Horizon",
    category: "LANDSCAPE",
    image: "/beyond-the-horizon.jpg",
    position: "left-[5%] top-[22%]",
    size: "w-[25vw] md:w-[20vw]",
    rotate: "-rotate-2",
  },
  {
    number: "02",
    title: "Inward",
    category: "ABSTRACT",
    image: "/inward.jpg",
    position: "left-[37%] top-[12%]",
    size: "w-[21vw] md:w-[17vw]",
    rotate: "rotate-1",
  },
  {
    number: "03",
    title: "Lake of Dreams",
    category: "NATURE & LANDSCAPES",
    image: "/lake-of-dreams.jpg",
    position: "right-[5%] top-[18%]",
    size: "w-[25vw] md:w-[20vw]",
    rotate: "rotate-2",
  },
  {
    number: "04",
    title: "Moon Over the Waves",
    category: "NATURE & LANDSCAPES",
    image: "/moon-over-the-waves.jpg",
    position: "left-[17%] bottom-[8%]",
    size: "w-[23vw] md:w-[18vw]",
    rotate: "rotate-1",
  },
  {
    number: "05",
    title: "Blooming in the Dark",
    category: "BOTANICAL",
    image: "/blooming-in-the-dark.jpg",
    position: "right-[22%] bottom-[9%]",
    size: "w-[22vw] md:w-[17vw]",
    rotate: "-rotate-2",
  },
  {
    number: "06",
    title: "Whispers of the Valley",
    category: "NATURE & LANDSCAPES",
    image: "/whispers-of-the-valley.jpeg",
    position: "left-[25%] top-[28%]",
    size: "w-[19vw] md:w-[15vw]",
    rotate: "rotate-2",
  },
  {
    number: "07",
    title: "Under Open Skies",
    category: "NATURE & LANDSCAPES",
    image: "/under-open-skies.jpg",
    position: "right-[12%] top-[34%]",
    size: "w-[18vw] md:w-[14vw]",
    rotate: "-rotate-1",
  },
  {
    number: "08",
    title: "The Red Vessel",
    category: "SEASCAPE / MARITIME",
    image: "/the-red-vessel.jpg",
    position: "left-[45%] bottom-[8%]",
    size: "w-[17vw] md:w-[13vw]",
    rotate: "rotate-2",
  },
];

export default function ImmersiveGallery() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollRange = Math.max(
        section.offsetHeight - window.innerHeight,
        1
      );

      let value = -rect.top / scrollRange;

      value = Math.max(0, Math.min(1, value));

      setProgress(value);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxValues = [
    progress * -70,
    progress * 55,
    progress * -45,
    progress * 75,
    progress * -60,
    progress * 40,
    progress * -50,
    progress * 65,
  ];

  const activeIndex = Math.min(
    Math.floor(progress * galleryItems.length),
    galleryItems.length - 1
  );

  const activeArtwork = galleryItems[activeIndex];

  return (
    <section
      id="immersive-gallery"
      ref={sectionRef}
      className="relative bg-[#0B0B0B]"
      style={{
        height: "400vh",
      }}
    >
      <div className="sticky top-0 min-h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[#0B0B0B]" />

        {/* Gallery atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_65%)]" />

        {/* Heading */}
        <div className="absolute left-4 right-4 top-12 z-40 sm:left-6 sm:right-6 sm:top-16 md:left-10 md:right-10 md:top-24">
          <div className="flex items-start justify-between">
            <div>
              <p className="mb-2 text-[8px] tracking-[0.3em] text-[#B89B67] sm:mb-4 sm:text-xs sm:tracking-[0.35em]">
                THE GALLERY
              </p>

              <h2 className="text-[30px] leading-none tracking-[-0.03em] text-[#F2EEE7] sm:text-4xl md:text-7xl">
                A visual journey.
              </h2>
            </div>

            <span className="hidden pt-1 text-xs tracking-[0.25em] text-[#A9A39A] md:block">
              SELECTED WORKS
            </span>
          </div>
        </div>

        {/* =========================
            MOBILE GALLERY WALL
        ========================== */}
        <div className="absolute inset-0 md:hidden">

          {galleryItems.map((artwork, index) => {
            const distance = Math.abs(activeIndex - index);
            const isActive = activeIndex === index;

            const mobilePositions = [
              "left-[4%] top-[25%]",
              "right-[6%] top-[21%]",
              "left-[31%] top-[34%]",
              "right-[8%] top-[43%]",
              "left-[7%] bottom-[18%]",
              "right-[31%] bottom-[13%]",
              "left-[17%] bottom-[29%]",
              "right-[5%] bottom-[31%]",
            ];

            const mobileSizes = [
              "w-[38vw]",
              "w-[31vw]",
              "w-[35vw]",
              "w-[29vw]",
              "w-[32vw]",
              "w-[28vw]",
              "w-[30vw]",
              "w-[27vw]",
            ];

            const mobileRotations = [
              "-rotate-3",
              "rotate-2",
              "rotate-1",
              "-rotate-2",
              "rotate-2",
              "-rotate-3",
              "rotate-2",
              "-rotate-1",
            ];

            const translateY =
              parallaxValues[index] * 0.45;

            const scale = isActive ? 1.16 : 1;

            return (
              <a
                key={artwork.number}
                href={`/art/${artwork.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className={`absolute ${mobilePositions[index]} ${mobileSizes[index]} ${mobileRotations[index]} group`}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  zIndex: isActive
                    ? 50
                    : 20 - distance,
                  opacity:
                    distance > 2
                      ? 0.28
                      : distance === 2
                      ? 0.55
                      : 1,
                  transition:
                    "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease",
                }}
              >
                {/* Painting */}
                <div
                  className={`relative overflow-hidden bg-[#111111] p-[3px] shadow-[0_18px_45px_rgba(0,0,0,0.65)] transition-all duration-700 ${
                    isActive
                      ? "ring-1 ring-[#B89B67]/50"
                      : ""
                  }`}
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className={`block h-auto w-full object-contain transition-transform duration-[1400ms] ease-out ${
                      isActive
                        ? "scale-[1.03]"
                        : "scale-100"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive
                        ? "bg-black/0"
                        : "bg-black/20"
                    }`}
                  />
                </div>

                {/* Small gallery label */}
                <div
                  className={`mt-1.5 flex items-center justify-between transition-opacity duration-700 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  <p className="truncate text-[6px] tracking-[0.18em] text-[#B89B67]">
                    {artwork.category}
                  </p>

                  <span className="ml-2 text-[6px] tracking-[0.2em] text-[#A9A39A]">
                    {artwork.number}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* =========================
            DESKTOP GALLERY WALL
        ========================== */}
        <div className="absolute inset-0 hidden md:block">
          {galleryItems.map((artwork, index) => {
            const distance =
              Math.abs(activeIndex - index);

            const isActive =
              activeIndex === index;

            const scale = isActive ? 1.08 : 1;

            const translateY =
              parallaxValues[index];

            return (
              <a
                key={artwork.number}
                href={`/art/${artwork.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className={`absolute ${artwork.position} ${artwork.size} ${artwork.rotate} group`}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  zIndex: isActive
                    ? 30
                    : 10 - distance,
                  transition:
                    "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease",
                  opacity:
                    distance > 2
                      ? 0.45
                      : 1,
                }}
              >
                <div
                  className={`relative overflow-hidden bg-[#171717] p-2 shadow-[0_25px_70px_rgba(0,0,0,0.45)] transition-all duration-700 ${
                    isActive
                      ? "ring-1 ring-[#B89B67]/40"
                      : ""
                  }`}
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className={`w-full object-cover transition-transform duration-[1400ms] ease-out ${
                      isActive
                        ? "scale-[1.03]"
                        : "scale-100"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive
                        ? "bg-black/0"
                        : "bg-black/15"
                    }`}
                  />
                </div>

                <div
                  className={`mt-3 flex items-center justify-between transition-all duration-700 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-60"
                  }`}
                >
                  <div>
                    <p className="text-[8px] tracking-[0.25em] text-[#B89B67] md:text-[9px]">
                      {artwork.category}
                    </p>

                    <h3 className="mt-1 text-xs tracking-wide text-[#F2EEE7] md:text-sm">
                      {artwork.title}
                    </h3>
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-[#A9A39A]">
                    {artwork.number}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Active Artwork Information */}
        <div
          className="absolute bottom-20 left-4 z-40 sm:left-6 md:bottom-24 md:left-10"
          key={activeArtwork.number}
        >
          <p className="text-[8px] tracking-[0.3em] text-[#B89B67] md:text-[10px]">
            {activeArtwork.category}
          </p>

          <h3 className="mt-2 text-xl tracking-[-0.02em] text-[#F2EEE7] md:mt-3 md:text-5xl">
            {activeArtwork.title}
          </h3>

          <a
            href={`/art/${activeArtwork.title
              .toLowerCase()
              .replaceAll(" ", "-")}`}
            className="mt-3 inline-flex items-center gap-2 text-[8px] tracking-[0.25em] text-[#F2EEE7] md:mt-5 md:gap-3 md:text-xs"
          >
            VIEW WORK

            <span className="text-[#B89B67]">
              →
            </span>
          </a>
        </div>

        {/* Progress */}
        <div className="absolute bottom-7 left-4 right-4 z-40 sm:left-6 sm:right-6 md:bottom-8 md:left-10 md:right-10">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-[8px] tracking-[0.25em] text-[#A9A39A] md:text-[10px]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="h-px flex-1 bg-white/10">
              <div
                className="h-px bg-[#B89B67]"
                style={{
                  width: `${progress * 100}%`,
                }}
              />
            </div>

            <span className="text-[8px] tracking-[0.25em] text-[#A9A39A] md:text-[10px]">
              08
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}