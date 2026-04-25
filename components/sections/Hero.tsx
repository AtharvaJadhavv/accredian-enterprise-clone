 "use client";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a24]/90 via-[#0f0a24]/70 to-transparent" />
      <div
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2"
      >
        <div className="max-w-2xl animate-fadeUp text-left">
          <span className="mb-6 inline-block rounded-full border border-[#7c6ff7]/30 bg-[#7c6ff7]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
            ✦ Trusted by 200+ Global Enterprises
          </span>
          <h1 className="text-5xl font-black leading-tight text-white lg:text-7xl">
            Empower Your
            <br />
            Workforce with
            <br />
            <span className="text-[#7c6ff7]">Industry-Led</span>
            <br />
            Learning
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            Partner with Accredian to launch outcome-driven, enterprise-grade learning programs that align with your
            business priorities.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="rounded-xl bg-[#7c6ff7] px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:bg-[#6457f5]"
            >
              Get Started →
            </button>
            <button
              type="button"
              className="ml-0 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:ml-4"
            >
              Watch Demo ▶
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 bg-[#7c6ff7] text-xs font-bold text-white">
                AR
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 bg-rose-500 text-xs font-bold text-white">
                PM
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 bg-teal-500 text-xs font-bold text-white">
                SK
              </span>
            </div>
            <p className="text-sm text-gray-300">50,000+ professionals trained</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-widest text-gray-300">IMPACT AT SCALE</p>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="rounded-full bg-green-400/20 px-2 py-0.5 text-xs font-semibold text-green-200">Live</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "500+", label: "Courses" },
              { value: "50K+", label: "Learners" },
              { value: "200+", label: "Partners" },
              { value: "96%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-4xl font-black text-[#7c6ff7]">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
                <div className="mt-2 h-1 rounded-full bg-white/10">
                  <div className="h-1 w-3/4 rounded-full bg-[#7c6ff7]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
