const testimonials = [
  {
    quote:
      "Accredian transformed how we upskill our teams across three regions. Their customized learning paths directly improved our project delivery quality and speed.",
    name: "Rahul Sharma",
    designation: "L&D Head",
    company: "TCS",
    avatar: "RS",
    avatarClass: "bg-[#7c6ff7]",
  },
  {
    quote:
      "The ROI on training has been remarkable. Leadership now has complete visibility into progress and outcomes, making upskilling a strategic business lever.",
    name: "Priya Mehta",
    designation: "HR Director",
    company: "Infosys",
    avatar: "PM",
    avatarClass: "bg-rose-400",
  },
  {
    quote:
      "Best enterprise learning platform we&apos;ve used so far. The mentor quality, analytics, and onboarding experience are all best-in-class for large organizations.",
    name: "Anil Kumar",
    designation: "CTO",
    company: "Wipro",
    avatar: "AK",
    avatarClass: "bg-emerald-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-[#faf7ff] to-[#f0f4ff] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-lg text-amber-400">★★★★★</span>
          <span className="text-sm font-medium text-gray-600">4.9 out of 5 from 200+ verified reviews</span>
        </div>
        <h2 className="text-center text-4xl font-black text-[#1a1033]">What our enterprise clients say</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-[#f0edf8] bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <p className="mb-4 font-serif text-6xl font-black leading-none text-[#7c6ff7]">&quot;</p>
              <p className="text-sm leading-relaxed text-gray-700 italic">{item.quote}</p>
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${item.avatarClass}`}>
                    {item.avatar}
                  </span>
                  <div className="ml-3">
                    <p className="text-sm font-bold text-[#1a1033]">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.designation}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#ede9fe] px-3 py-1 text-xs font-semibold text-[#5b21b6]">
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
