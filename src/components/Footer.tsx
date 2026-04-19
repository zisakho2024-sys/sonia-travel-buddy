import { Link } from "@tanstack/react-router";
import { MapPin, Twitter, Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-24 pb-28 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 pt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-orange shadow-glow">
              <MapPin className="h-5 w-5" />
            </span>
            Sonia Buddy
          </div>
          <p className="mt-4 text-sm leading-relaxed">Smart travel companion for West Bengal. Live bus tracking & geofence alerts across 23 districts.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="hover:text-orange transition">About</a></li>
            <li><a href="/#features" className="hover:text-orange transition">Features</a></li>
            <li><a href="/#faq" className="hover:text-orange transition">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-orange transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange transition">Terms & Conditions</Link></li>
            <li><Link to="/child-safety" className="hover:text-orange transition">Child Safety</Link></li>
            <li><Link to="/contact" className="hover:text-orange transition">Account Deletion</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-orange transition">Contact Us</Link></li>
            <li><a href="mailto:zisakhoofficial@gmail.com" className="hover:text-orange transition">Email Support</a></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition"><Instagram className="h-4 w-4" /></a>
            <a href="mailto:zisakhoofficial@gmail.com" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Sonia Buddy. All rights reserved.</p>
        <p>Made with care in West Bengal, India.</p>
      </div>
    </footer>
  );
}
