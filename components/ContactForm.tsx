"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const fields = [
  { name: "name", label: "Full Name", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-ink-line p-10 flex flex-col items-center text-center gap-4">
        <span className="h-12 w-12 rounded-full bg-red flex items-center justify-center text-white">
          <Check size={22} />
        </span>
        <h3 className="font-display text-2xl uppercase">Message Received</h3>
        <p className="text-mute max-w-sm">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-2">
            <label
              htmlFor={f.name}
              className="font-label text-xs tracking-[0.15em] uppercase text-mute"
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required
              className="bg-transparent border-b border-ink-line py-2 outline-none focus:border-red transition-colors text-bone"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-label text-xs tracking-[0.15em] uppercase text-mute"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-transparent border-b border-ink-line py-2 outline-none focus:border-red transition-colors resize-none text-bone"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-red text-white px-8 py-4 font-label text-xs tracking-[0.15em] uppercase hover:bg-red-light transition-colors"
      >
        Send Message <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
