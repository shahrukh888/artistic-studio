"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-5 md:px-10">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="group">
          <div className="text-sm tracking-[0.25em] text-[#F2EEE7]">
            ARTISTIC STUDIO
          </div>

          <div className="mt-1 text-[9px] tracking-[0.3em] text-[#A9A39A]">
            BY SHAHRUKH AZHAR
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#works"
            className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
          >
            WORKS
          </a>

          <a
            href="#collections"
            className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
          >
            COLLECTIONS
          </a>

          <a
            href="#about"
            className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Open menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-[#F2EEE7]" />
            <span className="block h-px w-6 bg-[#F2EEE7]" />
          </div>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0B0B0B]">
          
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-6 text-sm tracking-[0.2em] text-[#F2EEE7]"
          >
            CLOSE
          </button>

          <nav className="flex flex-col items-center gap-8">
            <a
              href="#works"
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.2em] text-[#F2EEE7]"
            >
              WORKS
            </a>

            <a
              href="#collections"
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.2em] text-[#F2EEE7]"
            >
              COLLECTIONS
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.2em] text-[#F2EEE7]"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.2em] text-[#F2EEE7]"
            >
              CONTACT
            </a>
          </nav>

        </div>
      )}
    </header>
  );
}