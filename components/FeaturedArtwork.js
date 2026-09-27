"use client";

import { useEffect, useState } from "react";

export default function FeaturedArtwork() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    const section = document.getElementById("featured-work");

    if (!section) return;

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setMouse({
        x,
        y,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMouse((prev) => ({
        ...prev,
        active: false,
      }));
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (imageOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [imageOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setImageOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =================================================
          FEATURED ARTWORK
      ================================================= */}

      <section
        id="featured-work"
        className="
          relative
          overflow-hidden
          bg-[#0B0B0B]

          md:h-screen
          md:cursor-zoom-in
        "
        onClick={() => setImageOpen(true)}
      >

        {/* =================================================
            MOBILE IMAGE
            Full horizontal image — no crop / no black space
        ================================================= */}

        <div className="relative block w-full md:hidden">

          <img
            src="/beyond-the-horizon.jpg"
            alt="Beyond the Horizon"
            className="block h-auto w-full object-contain"
          />

          {/* MOBILE DARK OVERLAY */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          {/* MOBILE CONTENT */}

          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5">

            <p className="text-[8px] tracking-[0.3em] text-[#B89B67]">
              FEATURED WORK
            </p>

            <h2 className="mt-2 text-[25px] leading-none tracking-[-0.03em] text-[#F2EEE7]">
              Beyond the Horizon
            </h2>

            <p className="mt-2 text-[8px] tracking-[0.15em] text-[#F2EEE7]/60">
              LANDSCAPE · 2026
            </p>

          </div>

        </div>


        {/* =================================================
            DESKTOP PAINTING
      ================================================= */}

        <div className="absolute inset-0 hidden md:block">

          {/* BASE IMAGE */}

          <img
            src="/beyond-the-horizon.jpg"
            alt="Beyond the Horizon"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          {/* SPOTLIGHT REVEAL */}

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: mouse.active ? 1 : 0,
              transition: "opacity 100ms ease",
              maskImage: `radial-gradient(
                circle 30% at ${mouse.x}% ${mouse.y}%,
                black 0%,
                black 40%,
                transparent 100%
              )`,
              WebkitMaskImage: `radial-gradient(
                circle 10% at ${mouse.x}% ${mouse.y}%,
                black 0%,
                black 55%,
                transparent 100%
              )`,
            }}
          >
            <img
              src="/beyond-the-horizon.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* DARK OVERLAY */}

          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          {/* DESKTOP CONTENT */}

          <div className="relative z-10 flex h-full items-end px-6 pb-10 md:px-10 md:pb-14">

            <div>

              <p className="text-xs tracking-[0.35em] text-[#B89B67]">
                FEATURED WORK
              </p>

              <h2 className="mt-4 text-4xl tracking-[-0.03em] text-[#F2EEE7] md:text-7xl">
                Beyond the Horizon
              </h2>

              <p className="mt-4 text-sm tracking-[0.15em] text-[#F2EEE7]/60">
                LANDSCAPE · 2026
              </p>

            </div>

          </div>

          {/* CURSOR SPOTLIGHT */}

          {mouse.active && (
            <div
              className="pointer-events-none absolute z-20 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              style={{
                left: `${mouse.x}%`,
                top: `${mouse.y}%`,
              }}
            />
          )}

        </div>

      </section>


      {/* =================================================
          FULLSCREEN ARTWORK POPUP
      ================================================= */}

      {imageOpen && (
        <div
          className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen items-center justify-center bg-black"
          onClick={() => setImageOpen(false)}
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setImageOpen(false);
            }}
            aria-label="Close artwork"
            className="
              absolute
              right-4
              top-4
              z-[10001]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/50
              text-2xl
              text-[#F2EEE7]
            "
          >
            ×
          </button>


          {/* FULL ORIGINAL IMAGE */}

          <div
            className="flex h-full w-full items-center justify-center px-3 py-12 sm:px-6 sm:py-16"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src="/beyond-the-horizon.jpg"
              alt="Beyond the Horizon — 2026"
              className="
                block
                h-auto
                w-auto
                object-contain
              "
              style={{
                maxWidth: "96vw",
                maxHeight: "88dvh",
              }}
            />

          </div>


          {/* LABEL */}

          <div className="absolute bottom-4 left-4 z-[10001] text-[8px] tracking-[0.25em] text-[#F2EEE7]/60 sm:bottom-6 sm:left-6 sm:text-[9px]">
            BEYOND THE HORIZON · 2026
          </div>

        </div>
      )}
    </>
  );
}