 "use client";

const steps = [
  {
    number: "01",
    title: "Share Your Goals",
    description: "Tell us your workforce goals and capability gaps.",
  },
  {
    number: "02",
    title: "We Design the Program",
    description: "Our specialists architect a role-aligned learning blueprint.",
  },
  {
    number: "03",
    title: "Launch & Measure",
    description: "Roll out globally and track measurable business outcomes.",
  },
];

export default function HowItWorks() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#0f0a24]/85" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[#a78bfa]">HOW IT WORKS</p>
        <h2 className="mt-2 text-center text-4xl font-black text-white">Get started in 3 simple steps</h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none text-9xl font-black text-white/5">
                {step.number}
              </span>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#7c6ff7]/30 bg-[#7c6ff7]/20">
                <span className="text-2xl text-[#a78bfa]">✦</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-gray-400">{step.description}</p>
              {index < steps.length - 1 ? (
                <span className="absolute right-0 top-8 hidden text-2xl text-[#7c6ff7] md:block">→</span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={scrollToContact}
            className="rounded-xl bg-[#7c6ff7] px-10 py-5 text-base font-bold text-white transition-all hover:scale-105 hover:bg-[#6457f5]"
          >
            Book a Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}
