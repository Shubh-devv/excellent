import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { social, presence } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Excellent Entertainment Networks",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Your Brand"
        subtitle="Tell us about your campaign and our team will get back to you with a plan."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-14">
            <div>
              <SectionHeading eyebrow="Connect" title="Say Hello" />
              <ul className="mt-8 space-y-3">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between border-b border-ink-line py-3 text-bone hover:text-red transition-colors"
                    >
                      <span className="font-label text-xs tracking-[0.15em] uppercase">
                        {s.label}
                      </span>
                      <span className="text-mute">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-label text-xs tracking-[0.3em] text-red uppercase mb-4">
                Presence
              </div>
              <div className="flex flex-wrap gap-3">
                {presence.map((city) => (
                  <span
                    key={city}
                    className="font-label text-xs tracking-[0.15em] uppercase border border-ink-line px-4 py-2"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
