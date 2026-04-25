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
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!fullName || !workEmail || !companyName || !message) {
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
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to transform your workforce?</h2>
          <ul className="mt-6 space-y-3 text-gray-600">
            <li>• Build role-based learning journeys at scale</li>
            <li>• Track outcomes with real-time analytics</li>
            <li>• Improve retention through expert-led programs</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <div className="space-y-4">
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-blue-500 focus:ring-2"
            />
            <input
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              placeholder="Work Email"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-blue-500 focus:ring-2"
            />
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-blue-500 focus:ring-2"
            />
            <select
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-blue-500 focus:ring-2"
            >
              <option>10-50</option>
              <option>50-200</option>
              <option>200-500</option>
              <option>500+</option>
            </select>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-blue-500 focus:ring-2"
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex cursor-pointer rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Request a Demo"}
            </button>
            {submitted ? (
              <p className="text-sm font-medium text-green-600">
                Thank you! We&apos;ll be in touch within 24 hours
              </p>
            ) : null}
            {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
