export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">Accredian</p>
            <p className="mt-3 text-sm text-gray-300">Enterprise learning solutions that drive business outcomes.</p>
            <p className="mt-4 text-sm text-gray-400">© 2024 Accredian</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>Custom Programs</li>
              <li>Analytics</li>
              <li>Certifications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Connect</h3>
            <div className="mt-4 flex items-center gap-3 text-xl">
              <span>🔗</span>
              <span>🐦</span>
            </div>
            <div className="mt-4">
              <input
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white outline-none ring-blue-500 focus:ring-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-gray-800 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
