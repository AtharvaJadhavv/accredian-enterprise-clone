const industries = [
  { icon: "💻", name: "Technology", tagline: "Build future-ready product teams" },
  { icon: "🏦", name: "Banking & Finance", tagline: "Strengthen compliance and digital skills" },
  { icon: "🏥", name: "Healthcare", tagline: "Empower care teams with modern capabilities" },
  { icon: "🏭", name: "Manufacturing", tagline: "Upskill operations for smarter production" },
  { icon: "🛍️", name: "Retail", tagline: "Train frontline teams for better CX" },
  { icon: "📈", name: "Consulting", tagline: "Scale domain expertise across practices" },
];

export default function Industries() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Built for every industry</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-white transition duration-200 hover:-translate-y-1 hover:border-t-blue-400"
            >
              <span className="text-2xl">{industry.icon}</span>
              <h3 className="mt-4 text-xl font-bold">{industry.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{industry.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
