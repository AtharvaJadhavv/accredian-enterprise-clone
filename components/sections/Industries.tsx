const industries = [
  {
    name: "Technology",
    tagline: "Build future-ready product teams",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    name: "Banking",
    tagline: "Drive compliance and digital agility",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80",
  },
  {
    name: "Healthcare",
    tagline: "Enable world-class patient operations",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    name: "Manufacturing",
    tagline: "Upskill teams for smarter plants",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    name: "Retail",
    tagline: "Elevate frontline customer experience",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    name: "Consulting",
    tagline: "Scale expertise across practices",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7c6ff7]">WHAT WE OFFER</p>
          <h2 className="mt-2 text-4xl font-black text-[#1a1033]">Built for every industry</h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl">
              <img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                <p className="mt-1 text-xs text-gray-300">{industry.tagline}</p>
                <span className="mt-3 inline-block rounded-full bg-[#7c6ff7] px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
