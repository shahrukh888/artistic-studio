"use client";

const availableWorks = [
  {
    number: "01",
    title: "Beyond the Horizon",
    medium: "Acrylic",
    size: "3 × 2 ft",
    image: "/beyond-the-horizon.jpg",
  },
  {
    number: "02",
    title: "Inward",
    medium: "Acrylic",
    size: "2 × 2.5 ft",
    image: "/inward.jpg",
  },
  {
    number: "03",
    title: "Lake of Dreams",
    medium: "Acrylic",
    size: "2 × 3 ft",
    image: "/lake-of-dreams.jpg",
  },
  {
    number: "04",
    title: "Blooming in the Dark",
    medium: "Acrylic",
    size: "1.5 × 1.5 ft",
    image: "/blooming-in-the-dark.jpg",
  },
];

export default function AvailableWorks() {
  return (
    <section className="relative bg-[#0B0B0B] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-4 text-xs tracking-[0.35em] text-[#B89B67]">
              AVAILABLE WORKS
            </p>

            <h2 className="text-4xl tracking-[-0.03em] text-[#F2EEE7] md:text-7xl">
              Original
              <br />
              artworks.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#A9A39A] md:text-right">
            Selected original works currently available for
            collectors and private spaces.
          </p>

        </div>


        {/* Artwork Grid */}
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 md:gap-y-20">

          {availableWorks.map((work) => (
            <div
              key={work.number}
              className="group"
            >

              {/* Artwork Image */}
              <div className="relative overflow-hidden bg-[#151515]">

                <div className="aspect-[4/3]">

                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                  />

                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />

                {/* Number */}
                <div className="absolute left-5 top-5">
                  <span className="text-[10px] tracking-[0.25em] text-[#F2EEE7]/70">
                    {work.number}
                  </span>
                </div>

                {/* Available Label */}
                <div className="absolute right-5 top-5">
                  <span className="border border-white/20 bg-black/30 px-3 py-2 text-[9px] tracking-[0.2em] text-[#F2EEE7] backdrop-blur-sm">
                    AVAILABLE
                  </span>
                </div>

              </div>


              {/* Information */}
              <div className="mt-6">

                <div className="flex items-start justify-between gap-6">

                  <div>

                    <p className="text-[9px] tracking-[0.3em] text-[#B89B67]">
                      ORIGINAL WORK
                    </p>

                    <h3 className="mt-2 text-2xl tracking-[-0.02em] text-[#F2EEE7] md:text-3xl">
                      {work.title}
                    </h3>

                  </div>

                  <a
                    href="#contact"
                    className="mt-1 shrink-0 text-xs tracking-[0.2em] text-[#F2EEE7] transition-all duration-300 hover:text-[#B89B67]"
                  >
                    ENQUIRE →
                  </a>

                </div>


                {/* Metadata */}
                <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4">

                  <span className="text-xs text-[#A9A39A]">
                    {work.medium}
                  </span>

                  <span className="h-3 w-px bg-white/15" />

                  <span className="text-xs text-[#A9A39A]">
                    {work.size}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* Bottom Note */}
        <div className="mt-20 flex items-center gap-5 border-t border-white/10 pt-8">

          <div className="h-px w-12 bg-[#B89B67]" />

          <p className="text-[10px] tracking-[0.3em] text-[#55504A]">
            ORIGINAL ARTWORKS · AVAILABLE FOR ENQUIRY
          </p>

        </div>

      </div>
    </section>
  );
}