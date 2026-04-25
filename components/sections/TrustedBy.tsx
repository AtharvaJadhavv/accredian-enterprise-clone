const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Deloitte",
  "Infosys",
  "Wipro",
  "IBM",
  "Accenture",
  "Cognizant",
  "HCL",
];

export default function TrustedBy() {
  const marqueeCompanies = [...companies, ...companies];

  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          POWERING TEAMS AT THE WORLD&apos;S BEST COMPANIES
        </p>
        <div className="relative overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="animate-marquee flex w-max items-center gap-16 whitespace-nowrap">
            {marqueeCompanies.map((company, index) => (
              <span key={`${company}-${index}`} className="cursor-default text-xl font-bold text-gray-300 transition hover:text-[#7c6ff7]">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
