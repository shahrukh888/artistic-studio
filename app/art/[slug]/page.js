const artworks = {
  "beyond-the-horizon": {
    title: "Beyond the Horizon",
    category: "LANDSCAPE",
    medium: "Acrylic on Canvas",
    year: "2026",
    size: "3 × 2 ft",
    image: "/beyond-the-horizon.jpg",
    description:
      "A visual exploration of atmosphere, distance and imagined landscapes.",
    note:
      "I wanted this painting to feel like a moment in the middle of a journey. The high waves give the sea a sense of movement, while the four ships are all travelling in different directions.",
    available: true,
  },

  inward: {
    title: "Inward",
    category: "ABSTRACT",
    medium: "Acrylic",
    year: "2025",
    size: "1.5 × 3 ft",
    image: "/inward.jpg",
    description:
      "A quiet abstract portrait exploring thought, emotion and the world within.",
    note:
      "The painting focuses on a quiet moment of thought. With her eyes closed, the figure seems to turn away from the outside world and into her own thoughts.",
    available: true,
  },

  "lake-of-dreams": {
    title: "Lake of Dreams",
    category: "NATURE & LANDSCAPES",
    medium: "Acrylic",
    year: "2025",
    size: "2 × 3 ft",
    image: "/lake-of-dreams.jpg",
    description:
      "A peaceful landscape where mountains, stones and a green lake come together beneath a bright sky.",
    note:
      "I wanted to capture a quiet landscape where the sky, mountains and water come together naturally. The bright sky reflects across the green lake, while the mountains and stones give the scene a sense of depth.",
    available: true,
  },

  "moon-over-the-waves": {
    title: "Moon Over the Waves",
    category: "NATURE & LANDSCAPES",
    medium: "Acrylic",
    year: "2024",
    size: "2 × 3 ft",
    image: "/moon-over-the-waves.jpg",
    description:
      "A dramatic ocean scene beneath a full moon, where towering waves rise through the darkness and catch the soft glow of moonlight.",
    note:
      "I wanted to capture the contrast between the calm presence of the full moon and the powerful movement of the ocean. The heavy waves rise through the darkness while the moonlight reveals their forms.",
    available: false,
  },

  "blooming-in-the-dark": {
    title: "Blooming in the Dark",
    category: "BOTANICAL",
    medium: "Acrylic",
    year: "2024",
    size: "1.5 × 1.5 ft",
    image: "/blooming-in-the-dark.jpg",
    description:
      "A vivid botanical composition where luminous green leaves emerge from a deep black background, with flowers unfolding from within the foliage.",
    note:
      "The painting explores the contrast between darkness and life. The deep black background gives the bright green leaves a luminous presence, while the flowers suggest growth, beauty and hidden life.",
    available: true,
  },

  "between-the-waves": {
    title: "Between the Waves",
    category: "SEASCAPE · DIGITAL ART",
    medium: "Digital Artwork",
    year: "—",
    size: "Digital",
    image: "/digital-art-1.png",
    description:
      "A digital seascape exploring movement, atmosphere and the changing rhythm of the ocean.",
    note:
      "A digital exploration of the sea, focusing on movement, atmosphere and the relationship between water, sky and light.",
    available: false,
  },

  "coastal-reverie": {
    title: "Coastal Reverie",
    category: "LANDSCAPE · DIGITAL ART",
    medium: "Digital Artwork",
    year: "—",
    size: "Digital",
    image: "/digital-art-2.png",
    description:
      "A quiet coastal landscape shaped by light, water and distant horizons.",
    note:
      "This digital landscape explores the calm atmosphere of a coastal environment, where land, water and sky meet in a quiet moment.",
    available: false,
  },

  "within-her-silence": {
    title: "Within Her Silence",
    category: "PORTRAIT · DIGITAL ART",
    medium: "Digital Artwork",
    year: "—",
    size: "Digital",
    image: "/digital-art-3-potrait.png",
    description:
      "A digital portrait exploring stillness, expression and the space within.",
    note:
      "The portrait focuses on a quiet emotional presence, using expression, color and atmosphere to suggest a world existing beyond the visible image.",
    available: false,
  },

  "where-mountains-dream": {
    title: "Where Mountains Dream",
    category: "LANDSCAPE · DIGITAL ART",
    medium: "Digital Artwork",
    year: "—",
    size: "Digital",
    image: "/digital-art-3.png",
    description:
      "An imaginative digital landscape where mountains, sky and light form a dreamlike world.",
    note:
      "A digital interpretation of an imagined landscape, exploring the feeling of distance, open skies and places that exist somewhere between reality and imagination.",
    available: false,
  },

  "whispers-of-the-valley": {
    title: "Whispers of the Valley",
    category: "NATURE & LANDSCAPES",
    medium: "—",
    year: "—",
    size: "1 × 1 ft",
    image: "/whispers-of-the-valley.jpeg",
    description:
      "A quiet mountain landscape where snowy peaks, village houses, flowing water and a calm foreground lake come together.",
    note:
      "A peaceful landscape built around the relationship between mountains, village life and water, creating a quiet sense of distance and atmosphere.",
    available: false,
  },

  "under-open-skies": {
    title: "Under Open Skies",
    category: "NATURE & LANDSCAPES",
    medium: "—",
    year: "—",
    size: "2 × 3 ft",
    image: "/under-open-skies.jpg",
    description:
      "A landscape filled with open blue skies, drifting clouds and tall green trees.",
    note:
      "The painting explores the feeling of openness and space, using the sky, clouds and trees to create a calm natural atmosphere.",
    available: false,
  },

  "the-red-vessel": {
    title: "The Red Vessel",
    category: "SEASCAPE / MARITIME",
    medium: "—",
    year: "—",
    size: "1 × 1.5 ft",
    image: "/the-red-vessel.jpg",
    description:
      "A nocturnal maritime scene where a striking red vessel moves through dark waters surrounded by distant lights and ships.",
    note:
      "The red vessel becomes the visual focus of the night scene, surrounded by dark water, distant ships and warm lights that give the composition a quiet maritime atmosphere.",
    available: false,
  },
};

const allWorks = Object.entries(artworks);

export default async function ArtworkPage({ params }) {
  const { slug } = await params;
  const artwork = artworks[slug];

  if (!artwork) {
    return (
      <main className="min-h-screen bg-[#0B0B0B] px-6 py-32 text-[#F2EEE7] md:px-10">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs tracking-[0.3em] text-[#B89B67]">
            ARTWORK
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl">
            Artwork not found.
          </h1>

          <a
            href="/"
            className="mt-10 inline-flex text-xs tracking-[0.25em] text-[#F2EEE7]"
          >
            ← BACK TO STUDIO
          </a>

        </div>
      </main>
    );
  }

  const otherWorks = allWorks
    .filter(([workSlug]) => workSlug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F2EEE7]">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">

        <a
          href="/"
          className="group"
        >
          <div className="text-sm tracking-[0.25em]">
            ARTISTIC STUDIO
          </div>

          <div className="mt-1 text-[9px] tracking-[0.3em] text-[#A9A39A]">
            BY SHAHRUKH AZHAR
          </div>
        </a>

        <a
          href="/#immersive-gallery"
          className="text-xs tracking-[0.25em] text-[#A9A39A] transition-opacity duration-300 hover:opacity-50"
        >
          BACK TO GALLERY
        </a>

      </header>


      {/* MAIN ARTWORK */}
      <section className="px-6 pb-28 pt-12 md:px-10 md:pb-40 md:pt-20">

        <div className="mx-auto max-w-7xl">

          {/* TOP META */}
          <div className="mb-10 flex items-center justify-between">

            <p className="text-xs tracking-[0.3em] text-[#B89B67]">
              {artwork.category}
            </p>

            <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
              {artwork.year}
            </p>

          </div>


          {/* ARTWORK + TITLE */}
          <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">

            {/* IMAGE */}
            <div className="group relative overflow-hidden bg-[#151515]">

              <img
                src={artwork.image}
                alt={artwork.title}
                className="max-h-[78vh] w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
              />

            </div>


            {/* TITLE */}
            <div className="pb-4 md:pb-10">

              <p className="text-[10px] tracking-[0.3em] text-[#55504A]">
                ORIGINAL WORK
              </p>

              <h1 className="mt-5 text-5xl leading-[0.95] tracking-[-0.04em] text-[#F2EEE7] md:text-7xl lg:text-8xl">
                {artwork.title}
              </h1>

              <p className="mt-8 max-w-md text-sm leading-7 text-[#A9A39A]">
                {artwork.description}
              </p>

            </div>

          </div>


          {/* ARTWORK DETAILS */}
          <div className="mt-16 border-y border-white/10 py-8">

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">

              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
                  MEDIUM
                </p>

                <p className="mt-3 text-sm text-[#F2EEE7]">
                  {artwork.medium}
                </p>
              </div>


              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
                  YEAR
                </p>

                <p className="mt-3 text-sm text-[#F2EEE7]">
                  {artwork.year}
                </p>
              </div>


              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
                  SIZE
                </p>

                <p className="mt-3 text-sm text-[#F2EEE7]">
                  {artwork.size}
                </p>
              </div>


              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#55504A]">
                  STATUS
                </p>

                <p className="mt-3 text-sm text-[#F2EEE7]">
                  {artwork.available
                    ? "Available"
                    : "Not Available"}
                </p>
              </div>

            </div>

          </div>


          {/* ARTIST NOTE */}
          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <div>
              <p className="text-xs tracking-[0.3em] text-[#B89B67]">
                ARTIST NOTE
              </p>
            </div>

            <p className="max-w-2xl text-sm leading-8 text-[#A9A39A] md:col-span-2">
              {artwork.note}
            </p>

          </div>


          {/* ENQUIRE */}
          <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs tracking-[0.25em] text-[#55504A]">
                {artwork.available
                  ? "INTERESTED IN THIS WORK?"
                  : "THIS WORK IS PART OF THE COLLECTION"}
              </p>

            </div>

            {artwork.available && (
              <a
                href="/#contact"
                className="group inline-flex items-center gap-5 text-xs tracking-[0.25em] text-[#F2EEE7]"
              >
                ENQUIRE ABOUT THIS WORK

                <span className="text-lg text-[#B89B67] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            )}

          </div>

        </div>

      </section>


      {/* MORE WORKS */}
      <section className="border-t border-white/10 bg-[#111111] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-end justify-between">

            <div>
              <p className="mb-4 text-xs tracking-[0.3em] text-[#B89B67]">
                EXPLORE MORE
              </p>

              <h2 className="text-4xl tracking-[-0.03em] md:text-6xl">
                More works.
              </h2>
            </div>

            <a
              href="/#works"
              className="hidden text-xs tracking-[0.25em] text-[#A9A39A] transition-opacity duration-300 hover:opacity-50 md:block"
            >
              VIEW ALL →
            </a>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {otherWorks.map(([workSlug, work]) => (

              <a
                key={workSlug}
                href={`/art/${workSlug}`}
                className="group"
              >

                <div className="overflow-hidden bg-[#151515]">

                  <img
                    src={work.image}
                    alt={work.title}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                </div>

                <div className="mt-5 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-[9px] tracking-[0.25em] text-[#B89B67]">
                      {work.category}
                    </p>

                    <h3 className="mt-2 text-lg text-[#F2EEE7]">
                      {work.title}
                    </h3>

                  </div>

                  <span className="text-[#A9A39A] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="px-6 py-8 md:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

          <a
            href="/"
            className="text-xs tracking-[0.25em] text-[#A9A39A] transition-opacity duration-300 hover:opacity-50"
          >
            ← BACK TO STUDIO
          </a>

          <p className="text-[10px] tracking-[0.2em] text-[#55504A]">
            Developer by{" "}
            <span className="text-[#B89B67]">
              Shahrukh Azhar
            </span>
          </p>

        </div>

      </footer>

    </main>
  );
}