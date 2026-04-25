const features = [
  {
    iconColor: "text-[#7c6ff7]",
    iconBg: "bg-[#ede9fe]",
    cardClass: "bg-[#faf7ff] border border-[#ede9fe]",
    title: "Custom Learning Paths",
    description: "Tailored upskilling journeys for each team, role, and region.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    iconColor: "text-rose-500",
    iconBg: "bg-[#fce7eb]",
    cardClass: "bg-[#fff5f7] border border-[#fce7eb]",
    title: "Progress Analytics",
    description: "Real-time adoption, completion, and impact dashboards for leaders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    iconColor: "text-teal-500",
    iconBg: "bg-[#ccfbf1]",
    cardClass: "bg-[#f0fdfa] border border-[#ccfbf1]",
    title: "Expert Mentorship",
    description: "Enterprise cohorts guided by top industry practitioners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    iconColor: "text-amber-500",
    iconBg: "bg-[#fef3c7]",
    cardClass: "bg-[#fffbeb] border border-[#fef3c7]",
    title: "Certification Programs",
    description: "Outcome-focused credentials mapped to evolving job skills.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    iconColor: "text-blue-500",
    iconBg: "bg-[#dbeafe]",
    cardClass: "bg-[#eff6ff] border border-[#dbeafe]",
    title: "Live Workshops",
    description: "Hands-on sessions for practical capability building at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    iconColor: "text-green-500",
    iconBg: "bg-[#dcfce7]",
    cardClass: "bg-[#f0fdf4] border border-[#dcfce7]",
    title: "API Integration",
    description: "Seamlessly connect with LMS, HRIS, and analytics workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#faf7ff] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7c6ff7]">WHAT WE OFFER</p>
          <h2 className="mt-2 text-4xl font-black text-[#1a1033]">Everything your enterprise needs</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
            One unified platform to train teams, track outcomes, and accelerate business performance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className={`${feature.cardClass} rounded-2xl p-8 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg`}>
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor}`}>
                <div className="h-6 w-6">{feature.icon}</div>
              </div>
              <h3 className="mt-1 text-lg font-bold text-[#1a1033]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
