import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpeg";

const legalLinks = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/child-safety", label: "Child Safety" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto max-w-6xl rounded-2xl px-5 py-3 shadow-card flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-navy">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden bg-white shadow-card">
            <img src={logo} alt="Sonia Buddy" className="h-full w-full object-contain" />
          </span>
          <span className="text-lg tracking-tight">Sonia Buddy</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-navy/80">
          <Link to="/" className="px-3 py-2 rounded-lg hover:bg-white/60 transition" activeProps={{ className: "text-orange" }} activeOptions={{ exact: true }}>Home</Link>
          <a href="/#features" className="px-3 py-2 rounded-lg hover:bg-white/60 transition">Features</a>
          <a href="/#faq" className="px-3 py-2 rounded-lg hover:bg-white/60 transition">FAQ</a>
          <div className="relative" onMouseEnter={() => setLegalOpen(true)} onMouseLeave={() => setLegalOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/60 transition">
              Legal <ChevronDown className="h-4 w-4" />
            </button>
            {legalOpen && (
              <div className="absolute right-0 top-full pt-2 w-56">
                <div className="glass rounded-xl shadow-soft p-2">
                  {legalLinks.map((l) => (
                    <Link key={l.to} to={l.to} className="block px-3 py-2 rounded-lg text-sm hover:bg-orange/10 hover:text-orange transition">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <a
          href="#download"
          className="hidden md:inline-flex items-center bg-gradient-orange text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
        >
          Get the App
        </a>

        <button className="md:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 glass rounded-2xl p-4 shadow-card flex flex-col gap-1 text-navy font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/60">Home</Link>
          <a href="/#features" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/60">Features</a>
          <a href="/#faq" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/60">FAQ</a>
          <div className="border-t border-navy/10 mt-2 pt-2">
            <p className="px-3 text-xs uppercase tracking-wider text-navy/50">Legal</p>
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/60 text-sm">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
