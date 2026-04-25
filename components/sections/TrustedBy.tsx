const companies = ["Google", "Microsoft", "Amazon", "Deloitte", "Infosys", "Wipro"];

export default function TrustedBy() {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
          Trusted by leading enterprises worldwide
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {companies.map((company) => (
            <span key={company} className="text-lg font-bold text-gray-500 sm:text-xl">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
