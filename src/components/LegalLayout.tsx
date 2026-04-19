import type { ReactNode } from "react";

export function LegalLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="inline-block bg-orange/10 text-orange text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Legal</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-navy text-balance">{title}</h1>
          {subtitle && <p className="mt-3 text-navy/60">{subtitle}</p>}
        </div>
        <article className="prose-content text-navy/80 leading-relaxed space-y-5 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-orange [&_a]:underline [&_strong]:text-navy">
          {children}
        </article>
      </div>
    </div>
  );
}
