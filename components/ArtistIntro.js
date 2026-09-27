"use client";

import { useEffect, useState } from "react";

export default function ArtistIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("artist-intro");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true);
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
      id="artist-intro"
      className="relative overflow-hidden bg-[#0B0B0B] px-3 py-8 sm:px-6 sm:py-12 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div
          className={`relative overflow-hidden border border-white/10 bg-[#111111] transition-all duration-[1200ms] ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >

          {/* =================================================
              MOBILE + DESKTOP WRAPPER
          ================================================= */}

          <div className="relative min-h-[390px] md:grid md:min-h-[680px] md:grid-cols-[0.85fr_1.15fr]">


            {/* =================================================
                LEFT — ARTIST TEXT
            ================================================= */}

            <div
              className="
                relative z-30
                flex
                h-[390px]
                w-[49%]
                flex-col
                justify-center
                px-4
                py-6
                sm:px-7
                md:h-auto
                md:w-auto
                md:px-12
                md:py-14
                lg:px-16
              "
            >

              <p className="text-[7px] tracking-[0.28em] text-[#B89B67] sm:text-[10px] md:text-xs md:tracking-[0.35em]">
                THE ARTIST
              </p>

              <h2 className="mt-3 text-[30px] leading-[0.9] tracking-[-0.04em] text-[#F2EEE7] sm:text-5xl md:mt-6 md:max-w-md md:text-7xl">
                Shahrukh
                <br />
                Azhar
              </h2>

              <p className="mt-4 max-w-[170px] text-[8px] leading-[1.55] text-[#A9A39A] sm:max-w-xs sm:text-xs sm:leading-6 md:mt-7 md:max-w-md md:text-sm md:leading-7">
                I'm a visual artist driven by emotion, nature
                and the stories hidden in ordinary moments.
                My work explores color, texture and depth —
                turning feelings into visual experiences.
              </p>

              <a
                href="#about"
                className="
                  group mt-4
                  inline-flex w-fit
                  items-center gap-2
                  border border-white/20
                  px-3 py-2
                  text-[7px]
                  tracking-[0.2em]
                  text-[#F2EEE7]
                  transition-all duration-300
                  hover:border-[#B89B67]
                  hover:bg-[#B89B67]
                  hover:text-[#0B0B0B]
                  sm:mt-6
                  sm:gap-4
                  sm:px-5 sm:py-3
                  sm:text-[9px]
                  md:mt-7
                "
              >
                LEARN MORE

                <span className="text-[#B89B67] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0B0B0B]">
                  →
                </span>
              </a>

              <div className="mt-6 sm:mt-10 md:mt-20">

                <div className="h-px w-12 bg-[#B89B67] sm:w-20 md:w-24" />

                <p className="mt-2 text-[6px] tracking-[0.2em] text-[#55504A] sm:mt-3 sm:text-[8px] md:mt-4 md:text-[9px] md:tracking-[0.3em]">
                  PAINTING · VISUAL ART
                </p>

              </div>

            </div>


            {/* =================================================
                RIGHT — MOBILE COLLAGE / DESKTOP GALLERY
            ================================================= */}

            <div
              className="
                absolute
                right-0
                top-0
                h-[390px]
                w-[58%]
                overflow-hidden
                bg-[#171717]

                md:relative
                md:h-auto
                md:min-h-[650px]
                md:w-auto
              "
            >

              {/* ATMOSPHERE */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(184,155,103,0.12),transparent_55%)]" />


              {/* =================================================
                  ARTWORK 01
              ================================================= */}

              <div
                className="
                  absolute
                  left-[2%]
                  top-[10%]
                  z-20
                  w-[28%]
                  rotate-[-5deg]
                  overflow-hidden
                  border border-white/15
                  bg-[#111111]
                  p-[2px]
                  shadow-2xl
                  transition-all duration-500
                  hover:z-50
                  hover:rotate-0
                  hover:scale-105

                  md:left-[6%]
                  md:top-[10%]
                  md:w-[29%]
                  md:p-1
                "
              >

                <img
                  src="/intro 3.jpeg"
                  alt="Artwork"
                  className="aspect-[3/4] w-full object-cover"
                />

              </div>


              {/* =================================================
                  MAIN ARTIST PORTRAIT
              ================================================= */}

              <div
                className="
                  absolute
                  right-[7%]
                  top-[7%]
                  z-30
                  h-[67%]
                  w-[54%]
                  overflow-hidden
                  bg-[#202020]
                  shadow-[0_20px_50px_rgba(0,0,0,0.55)]
                  transition-transform duration-700
                  hover:scale-[1.015]

                  md:right-[9%]
                  md:top-[6%]
                  md:h-[78%]
                  md:w-[54%]
                  md:shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                "
              >

                <img
                  src="/mine 4.jpg"
                  alt="Shahrukh Azhar"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              </div>


              {/* =================================================
                  ARTWORK 02
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[8%]
                  left-[8%]
                  z-40
                  w-[32%]
                  rotate-[4deg]
                  overflow-hidden
                  border border-white/15
                  bg-[#111111]
                  p-[2px]
                  shadow-2xl
                  transition-all duration-500
                  hover:z-50
                  hover:rotate-0
                  hover:scale-105

                  md:bottom-[8%]
                  md:left-[14%]
                  md:w-[33%]
                  md:p-1
                "
              >

                <img
                  src="/intro 4.jpeg"
                  alt="Artwork"
                  className="aspect-[4/3] w-full object-cover"
                />

              </div>


              {/* =================================================
                  ARTWORK 03
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[4%]
                  right-[3%]
                  z-50
                  w-[29%]
                  rotate-[-5deg]
                  overflow-hidden
                  border border-white/15
                  bg-[#111111]
                  p-[2px]
                  shadow-2xl
                  transition-all duration-500
                  hover:rotate-0
                  hover:scale-105

                  md:bottom-[5%]
                  md:right-[5%]
                  md:w-[31%]
                  md:p-1
                "
              >

                <img
                  src="/intro 2.jpeg"
                  alt="Artwork"
                  className="aspect-[3/4] w-full object-cover"
                />

              </div>


              {/* =================================================
                  LABEL
              ================================================= */}

              <div className="absolute bottom-3 left-3 z-50 sm:bottom-5 sm:left-6">

                <p className="text-[6px] tracking-[0.22em] text-[#F2EEE7]/50 sm:text-[8px] sm:tracking-[0.25em] md:text-[9px] md:tracking-[0.3em]">
                  ARTISTIC STUDIO
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}