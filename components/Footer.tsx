export default function Footer() {
  return (
    <footer className="bg-[#0f0a24] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-black">Accredian</p>
              <span className="rounded-full bg-[#7c6ff7]/20 px-2 py-0.5 text-xs font-semibold text-[#a78bfa]">
                ENTERPRISE
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-gray-400">
              Enterprise learning solutions designed for measurable business outcomes.
            </p>
            <p className="mt-6 text-xs text-gray-500">© 2025 Accredian. All rights reserved.</p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">SOLUTIONS</h3>
            <ul>
              {["Custom Programs", "Analytics", "Certifications"].map((item) => (
                <li key={item}>
                  <a href="#" className="mb-3 block text-sm text-gray-400 transition hover:text-[#7c6ff7]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">COMPANY</h3>
            <ul>
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="mb-3 block text-sm text-gray-400 transition hover:text-[#7c6ff7]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">CONNECT</h3>
            <input
              placeholder="Enter your email"
              className="mb-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
            />
            <button type="button" className="w-full rounded-xl bg-[#7c6ff7] py-3 text-sm font-semibold text-white transition hover:bg-[#6457f5]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>Privacy Policy · Terms of Service</p>
          <p>Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
}
