const features = [
  {
    icon: "🧭",
    title: "Custom Learning Paths",
    description: "Tailored programs for each role",
  },
  {
    icon: "📊",
    title: "Progress Analytics",
    description: "Real-time dashboards and reports",
  },
  {
    icon: "🧑‍🏫",
    title: "Expert Mentorship",
    description: "1-on-1 sessions with industry leaders",
  },
  {
    icon: "🏅",
    title: "Certification Programs",
    description: "Industry-recognized credentials",
  },
  {
    icon: "🎓",
    title: "Live Workshops",
    description: "Interactive sessions with top faculty",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description: "Connect with your existing HR tools",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything your enterprise needs</h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            One platform for all your corporate learning needs
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-blue-300"
            >
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
