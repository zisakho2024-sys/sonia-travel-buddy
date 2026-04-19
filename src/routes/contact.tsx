import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Clock, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Support — Sonia Buddy" },
      { name: "description", content: "Get in touch with the Sonia Buddy support team." },
      { property: "og:title", content: "Contact & Support — Sonia Buddy" },
      { property: "og:description", content: "Email, business inquiries and support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange/10 text-orange text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Support</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-navy text-balance">Contact Sonia Buddy Support</h1>
          <p className="mt-4 text-navy/65 max-w-xl mx-auto">Have questions about your journey or need help with the app? Our team is here to assist you.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-4">
            {[
              { icon: Mail, title: "Email Support", desc: "zisakhoofficial@gmail.com", sub: "General queries & technical issues" },
              { icon: Mail, title: "Business Inquiries", desc: "zisakhoofficial@gmail.com", sub: "Partnerships & tour operators" },
              { icon: Clock, title: "Response Time", desc: "24–48 hours", sub: "Mon–Sat" },
              { icon: MapPin, title: "Office", desc: "West Bengal, India", sub: "Built locally, with love" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-5 shadow-card flex gap-4">
                <span className="h-11 w-11 rounded-xl bg-gradient-orange flex items-center justify-center text-white shadow-glow shrink-0">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{c.title}</h3>
                  <p className="text-navy text-sm font-medium mt-0.5">{c.desc}</p>
                  <p className="text-navy/55 text-xs mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-3 bg-white rounded-2xl shadow-card border border-navy/5 p-7"
          >
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-14 w-14 text-orange mx-auto" />
                <h3 className="mt-4 text-2xl font-bold text-navy">Message sent!</h3>
                <p className="mt-2 text-navy/60">We'll get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
                <p className="text-navy/60 text-sm mt-1">We typically respond within 24–48 hours.</p>
                <div className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name"><input required className="input" placeholder="Your name" /></Field>
                    <Field label="Email"><input required type="email" className="input" placeholder="you@example.com" /></Field>
                  </div>
                  <Field label="Subject"><input required className="input" placeholder="How can we help?" /></Field>
                  <Field label="Message"><textarea required rows={5} className="input resize-none" placeholder="Tell us more…" /></Field>
                  <button type="submit" className="w-full bg-gradient-orange text-white py-3 rounded-xl font-semibold shadow-glow hover:scale-[1.02] transition flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: oklch(0.98 0.005 260);
          border: 1px solid oklch(0.9 0.01 260);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: oklch(0.18 0.02 260);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.15s;
        }
        .input:focus {
          border-color: oklch(0.74 0.18 55);
          background: white;
          box-shadow: 0 0 0 3px oklch(0.74 0.18 55 / 0.15);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
