const testimonials = [
  {
    quote: "Accredian transformed how we upskill our teams...",
    name: "Rahul Sharma",
    designation: "L&D Head",
    company: "TCS",
  },
  {
    quote: "The ROI on training has been remarkable...",
    name: "Priya Mehta",
    designation: "HR Director",
    company: "Infosys",
  },
  {
    quote: "Best enterprise learning platform we've used...",
    name: "Anil Kumar",
    designation: "CTO",
    company: "Wipro",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          What our enterprise clients say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
              <p className="text-4xl font-bold leading-none text-indigo-200">"</p>
              <p className="mt-2 text-gray-700">{item.quote}</p>
              <p className="mt-4 text-yellow-500">★★★★★</p>
              <p className="mt-4 font-bold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.designation}, {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
