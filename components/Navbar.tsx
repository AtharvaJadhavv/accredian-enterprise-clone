"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Solutions", sectionId: "features" },
  { label: "Industries", sectionId: "industries" },
  { label: "Resources", sectionId: "howitworks" },
  { label: "About Us", sectionId: "testimonials" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black text-[#1a1033]">Accredian</span>
          <span className="ml-2 rounded-full bg-[#ede9fe] px-2.5 py-1 text-xs font-bold text-[#5b21b6]">
            ENTERPRISE
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#1a1033] transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7c6ff7] md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-6 w-6">
            <span
              className={`absolute left-0 top-1 h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-2.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-5 h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-500 text-sm hover:text-[#7c6ff7] transition font-medium bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn-pulse rounded-xl bg-[#7c6ff7] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6457f5]"
            onClick={scrollToContact}
          >
            Contact Us
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white px-4 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 pt-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => {
                  document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-500 text-sm hover:text-[#7c6ff7] transition font-medium bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn-pulse mt-4 w-full rounded-xl bg-[#7c6ff7] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6457f5]"
          onClick={scrollToContact}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
