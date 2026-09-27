"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutArtist() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const value = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageY = (progress - 0.5) * -45;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

        {/* ARTIST IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#151515]">
          <img
            ref={imageRef}
            src="/mine 3.jpg"
            alt="Shahrukh Azhar"
            className="h-full w-full object-cover will-change-transform"
            style={{
              transform: `scale(1.06) translateY(${imageY}px)`,
            }}
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* TEXT */}
        <div
          style={{
            transform: `translateY(${(0.5 - progress) * 25}px)`,
          }}
          className="will-change-transform"
        >
          <p className="mb-5 text-xs tracking-[0.35em] text-[#B89B67]">
            ABOUT THE ARTIST
          </p>

          <h2 className="text-4xl leading-tight tracking-[-0.02em] text-[#F2EEE7] md:text-6xl">
            Shahrukh
            <br />
            Azhar
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#A9A39A]">
            An artist exploring painting, imagination and visual
            storytelling through contemporary artwork.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#A9A39A]">
            Through color, atmosphere and expressive forms, each
            artwork becomes an opportunity to create a different
            visual experience.
          </p>

          {/* ARTIST DETAILS */}
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-white/10 pt-8">

            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
                PRACTICE
              </p>

              <p className="mt-2 text-sm text-[#F2EEE7]">
                Painting & Visual Art
              </p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
                EDUCATION
              </p>

              <p className="mt-2 text-sm text-[#F2EEE7]">
                Textile Designing
              </p>
            </div>

          </div>

          <div className="mt-8">
            <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
              BASED IN
            </p>

            <p className="mt-2 text-sm text-[#F2EEE7]">
              Pakistan
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}