"use client";

import { useState } from "react";

const navLinks = ["Solutions", "Industries", "Resources", "About Us"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">Accredian</span>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-gray-700">
            enterprise
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </button>
        </div>
      </nav>

      <div className={`border-t border-gray-100 bg-white px-4 pb-4 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-1 pt-3">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
