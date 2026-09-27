export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] px-6 pb-8 pt-20 md:px-10 md:pt-28">

      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2">

          {/* Brand */}
          <div>
            <p className="text-sm tracking-[0.3em] text-[#F2EEE7]">
              ARTISTIC STUDIO
            </p>

            <p className="mt-2 text-[9px] tracking-[0.3em] text-[#A9A39A]">
              BY SHAHRUKH AZHAR
            </p>

            <p className="mt-8 max-w-sm text-sm leading-7 text-[#A9A39A]">
              Contemporary art, original works and visual
              experiences created through painting and imagination.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:ml-auto md:w-64">

            <div>
              <p className="mb-5 text-[10px] tracking-[0.25em] text-[#55504A]">
                EXPLORE
              </p>

              <nav className="flex flex-col gap-4">
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
            </div>

            <div>
              <p className="mb-5 text-[10px] tracking-[0.25em] text-[#55504A]">
                CONNECT
              </p>

              <nav className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
                >
                  INSTAGRAM
                
                </a>

                <a
                  href="#"
                  className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
                >
                  BEHANCE
                </a>

                <a
                  href="mailto:ssrk576@gmail.com"
                  className="text-xs tracking-[0.2em] text-[#F2EEE7] transition-opacity duration-300 hover:opacity-50"
                >
                  EMAIL
                </a>
              </nav>
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">

          <p className="text-[10px] tracking-[0.2em] text-[#55504A]">
            © 2026 ARTISTIC STUDIO BY SHAHRUKH AZHAR
          </p>

          {/* Developer Signature */}
          <p className="text-[10px] tracking-[0.2em] text-[#A9A39A]">
            Developer by{" "}
            <span className="text-[#B89B67]">
              Shahrukh Azhar
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}