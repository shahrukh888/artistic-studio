"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
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

  const heroHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;

  const progress = Math.min(scrollY / heroHeight, 1);

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen w-full cursor-zoom-in overflow-hidden bg-[#0B0B0B]"
        onClick={() => setImageOpen(true)}
      >
        {/* HERO IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/hero-shafeeq-1995.png')",
            transform: `scale(${1.1 - progress * 0.1}) translateY(${
              progress * -8
            }px)`,
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/40 transition-opacity duration-300"
          style={{
            opacity: 0.4 + progress * 0.2,
          }}
        />

        {/* HERO CONTENT */}
        <div
          className="relative z-10 flex min-h-screen w-full flex-col justify-end px-5 pb-10 will-change-transform sm:px-6 sm:pb-12 md:px-10 md:pb-16"
          style={{
            transform: `translateY(${progress * -80}px)`,
            opacity: 1 - progress * 0.8,
          }}
        >
          <div
            className={`w-full max-w-5xl transform transition-all duration-1000 ease-out ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-4 text-[9px] tracking-[0.3em] text-[#F2EEE7]/80 sm:text-xs sm:tracking-[0.35em]">
              ARTISTIC STUDIO · VISUAL ART
            </p>

            <h1 className="max-w-[95%] text-4xl leading-[0.95] tracking-[-0.035em] text-[#F2EEE7] sm:text-5xl md:max-w-4xl md:text-7xl lg:text-8xl">
              Art that speaks
              <br />
              beyond the canvas.
            </h1>
          </div>

          {/* BOTTOM INFO */}
          <div
            className={`mt-10 flex w-full items-end justify-between gap-6 transform transition-all delay-300 duration-1000 ease-out sm:mt-12 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="min-w-0">
              <p className="max-w-[250px] text-xs leading-5 text-[#F2EEE7]/70 sm:max-w-xs sm:text-sm sm:leading-6">
                A visual journey through paintings,
                imagination and artistic expression.
              </p>

              <p className="mt-3 text-[8px] tracking-[0.18em] text-[#F2EEE7]/50 sm:mt-4 sm:text-[10px] sm:tracking-[0.2em]">
                LANDSCAPE — SHAFEEQ · 1995
              </p>
            </div>

            {/* DESKTOP EXPLORE */}
            <a
              href="#works"
              onClick={(event) => event.stopPropagation()}
              className="group hidden shrink-0 items-center gap-4 md:flex"
            >
              <span className="text-xs tracking-[0.25em] text-[#F2EEE7]">
                EXPLORE WORKS
              </span>

              <span className="text-lg text-[#B89B67] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* MOBILE EXPLORE */}
        <a
          href="#works"
          onClick={(event) => event.stopPropagation()}
          className={`absolute bottom-5 right-5 z-20 text-[9px] tracking-[0.2em] text-[#F2EEE7] transition-all delay-500 duration-700 sm:bottom-6 sm:right-6 sm:text-xs ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          } md:hidden`}
        >
          EXPLORE ↓
        </a>
      </section>

      {/* FULL IMAGE POPUP */}
      {imageOpen && (
        <div
          className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen items-center justify-center bg-black"
          onClick={() => setImageOpen(false)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setImageOpen(false);
            }}
            aria-label="Close artwork"
            className="absolute right-4 top-4 z-[10001] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-[#F2EEE7]"
          >
            ×
          </button>

          {/* FULL IMAGE */}
          <div
            className="flex h-full w-full items-center justify-center px-3 py-12 sm:px-6 sm:py-16"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src="/hero-shafeeq-1995.png"
              alt="Landscape — Shafeeq, 1995"
              className="block h-auto w-auto object-contain"
              style={{
                maxWidth: "96vw",
                maxHeight: "88dvh",
              }}
            />
          </div>

          {/* LABEL */}
          <div className="absolute bottom-4 left-4 z-[10001] text-[8px] tracking-[0.25em] text-[#F2EEE7]/60 sm:bottom-6 sm:left-6 sm:text-[9px]">
            LANDSCAPE — SHAFEEQ · 1995
          </div>
        </div>
      )}
    </>
  );
}