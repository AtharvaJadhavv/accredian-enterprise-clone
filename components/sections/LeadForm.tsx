"use client";

import { useState } from "react";

export default function LeadForm() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [teamSize, setTeamSize] = useState("10-50");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!fullName.trim() || !workEmail.trim()) {
      setError("Please enter both your name and work email.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: workEmail,
          company: companyName,
          teamSize,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="relative min-h-[600px] overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0f0a24]/80" />
          <div className="relative z-10 flex h-full flex-col justify-center p-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">LET&apos;S TALK</p>
            <h2 className="text-4xl font-black leading-tight text-white">Ready to transform your workforce?</h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              Collaborate with our enterprise advisors to build a scalable learning strategy tailored to your teams.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Custom learning journeys aligned to business goals",
                "Dedicated success team from onboarding to scale",
                "Actionable analytics to prove training impact",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#7c6ff7] bg-[#7c6ff7]/20 text-[#7c6ff7]">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2">
                      <path d="M4 10l4 4 8-8" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white p-16">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg viewBox="0 0 20 20" fill="none" className="h-8 w-8 text-green-600" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10l4 4 8-8" />
                </svg>
              </div>
              <p className="mt-4 text-xl font-bold text-[#1a1033]">Thank you, {fullName}!</p>
              <p className="mt-2 text-sm text-gray-500">We&apos;ll reach out to {workEmail} within 24 hours.</p>
            </div>
          ) : (
            <div>
              <h3 className="mb-2 text-2xl font-bold text-[#1a1033]">Get in touch</h3>
              <p className="mb-8 text-sm text-gray-400">Tell us about your goals and we&apos;ll tailor a plan for your team.</p>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7c6ff7]"
              />
              <input
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="Work Email"
                className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7c6ff7]"
              />
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7c6ff7]"
              />
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7c6ff7]"
              >
                <option>10-50</option>
                <option>50-200</option>
                <option>200-500</option>
                <option>500+</option>
              </select>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what outcomes you want to achieve"
                className="mb-4 h-28 w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#7c6ff7]"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl bg-[#7c6ff7] py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#6457f5] disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </button>
              <p className="mt-3 text-center text-xs text-gray-400">🔒 No credit card required · Free 30-min consultation</p>
              {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
