export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            Trusted by 200+ enterprises
          </span>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Empower Your Workforce with{" "}
            <span className="text-blue-600">Industry-Relevant Learning</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Partner with Accredian to deliver world-class training programs tailored for your enterprise
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
            >
              Learn More
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-semibold text-white">
                AL
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs font-semibold text-white">
                RK
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-sky-500 text-xs font-semibold text-white">
                JM
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">50,000+ employees trained globally</p>
          </div>
        </div>

        <div className="relative rounded-2xl border border-indigo-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-6 shadow-sm sm:p-8">
          <span className="absolute right-6 top-6 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
            Live data
          </span>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Impact at Scale</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="rounded-xl bg-white/70 p-4 text-center">
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">500+</p>
              <p className="mt-1 text-sm font-medium text-gray-600">Courses</p>
              <div className="mx-auto mt-3 h-1.5 w-full rounded-full bg-blue-100">
                <div className="h-1.5 w-4/5 rounded-full bg-blue-500" />
              </div>
            </div>
            <div className="rounded-xl bg-white/70 p-4 text-center">
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">50K+</p>
              <p className="mt-1 text-sm font-medium text-gray-600">Learners</p>
              <div className="mx-auto mt-3 h-1.5 w-full rounded-full bg-blue-100">
                <div className="h-1.5 w-11/12 rounded-full bg-blue-500" />
              </div>
            </div>
            <div className="rounded-xl bg-white/70 p-4 text-center">
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">200+</p>
              <p className="mt-1 text-sm font-medium text-gray-600">Partners</p>
              <div className="mx-auto mt-3 h-1.5 w-full rounded-full bg-blue-100">
                <div className="h-1.5 w-3/4 rounded-full bg-blue-500" />
              </div>
            </div>
            <div className="rounded-xl bg-white/70 p-4 text-center">
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">96%</p>
              <p className="mt-1 text-sm font-medium text-gray-600">Satisfaction rate</p>
              <div className="mx-auto mt-3 h-1.5 w-full rounded-full bg-blue-100">
                <div className="h-1.5 w-[96%] rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
