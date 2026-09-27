const commissionImages = [
  "/comission 1.jpg",
  "/comission 2.jpg",
  "/comission 3.jpg",
  "/comission 4.jpg",
];

const commissionSteps = [
  {
    number: "01",
    title: "PERSONALIZED",
    description:
      "An original artwork developed around your idea, space and story.",
  },
  {
    number: "02",
    title: "ANY SIZE",
    description:
      "Choose the dimensions that work naturally within your space.",
  },
  {
    number: "03",
    title: "ANY THEME",
    description:
      "From landscapes and abstracts to completely personal concepts.",
  },
];

export default function CustomCommissions() {
  return (
    <section className="relative overflow-hidden bg-[#151515] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="grid gap-12 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-4 text-xs tracking-[0.35em] text-[#B89B67]">
              COMMISSIONS
            </p>

            <h2 className="text-4xl leading-[1.02] tracking-[-0.03em] text-[#F2EEE7] md:text-7xl">
              Commission a
              <br />
              Custom Artwork.
            </h2>
          </div>

          <div className="md:ml-auto md:max-w-md">
            <p className="text-sm leading-7 text-[#A9A39A]">
              Create an original artwork designed around your
              vision, your space and the story you want to tell.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-4 text-xs tracking-[0.25em] text-[#F2EEE7]"
            >
              START YOUR COMMISSION

              <span className="text-[#B89B67] transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>

        </div>

        {/* COLLAGE */}
        <div className="mt-16 md:mt-20">

          <div className="relative h-[380px] overflow-hidden border border-white/10 bg-[#0B0B0B] md:h-[520px]">

            {/* IMAGE 01 */}
            <div className="absolute left-[8%] top-[12%] z-10 w-[34%] rotate-[-4deg] overflow-hidden border border-white/15 bg-[#151515] shadow-2xl transition-transform duration-700 hover:z-50 hover:rotate-0 hover:scale-105 md:w-[27%]">
              <img
                src="/comission 1.jpg"
                alt="Commission artwork 1"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.25em] text-white/70">
                01
              </span>
            </div>

            {/* IMAGE 02 */}
            <div className="absolute left-[30%] top-[22%] z-20 w-[36%] rotate-[3deg] overflow-hidden border border-white/15 bg-[#151515] shadow-2xl transition-transform duration-700 hover:z-50 hover:rotate-0 hover:scale-105 md:left-[29%] md:w-[29%]">
              <img
                src="/comission 2.jpg"
                alt="Commission artwork 2"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.25em] text-white/70">
                02
              </span>
            </div>

            {/* IMAGE 03 */}
            <div className="absolute right-[25%] top-[10%] z-30 w-[34%] rotate-[-2deg] overflow-hidden border border-white/15 bg-[#151515] shadow-2xl transition-transform duration-700 hover:z-50 hover:rotate-0 hover:scale-105 md:right-[25%] md:w-[27%]">
              <img
                src="/comission 3.jpg"
                alt="Commission artwork 3"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.25em] text-white/70">
                03
              </span>
            </div>

            {/* IMAGE 04 */}
            <div className="absolute right-[7%] top-[28%] z-40 w-[34%] rotate-[4deg] overflow-hidden border border-white/15 bg-[#151515] shadow-2xl transition-transform duration-700 hover:z-50 hover:rotate-0 hover:scale-105 md:right-[8%] md:w-[27%]">
              <img
                src="/comission 4.jpg"
                alt="Commission artwork 4"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.25em] text-white/70">
                04
              </span>
            </div>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">

          {commissionSteps.map((step) => (
            <div
              key={step.number}
              className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0"
            >

              <span className="text-xs tracking-[0.25em] text-[#B89B67]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl text-[#F2EEE7]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[#A9A39A]">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}