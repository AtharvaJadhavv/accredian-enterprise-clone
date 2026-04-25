const steps = [
  {
    number: "01",
    title: "Share Your Goals",
    description: "Tell us your workforce challenges",
  },
  {
    number: "02",
    title: "We Design the Program",
    description: "Our experts craft a custom plan",
  },
  {
    number: "03",
    title: "Launch & Measure",
    description: "Deploy and track real outcomes",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Get started in 3 simple steps</h2>

        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden border-t-2 border-dotted border-blue-200 md:block" />
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-4xl font-extrabold tracking-tight text-blue-600">{step.number}</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
