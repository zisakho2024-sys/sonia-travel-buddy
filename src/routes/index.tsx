import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download, MapPin, Bell, Compass, Search, BellRing, Sparkles, ChevronDown,
  Smartphone, Shield, Database, HelpCircle, Lock, Send, Bot,
} from "lucide-react";
import heroMockup from "../assets/hero-mockup.png";
import victoriaMemorial from "../assets/victoria-memorial.jpg";
import darjeeling from "../assets/darjeeling.jpg";
import digha from "../assets/digha.jpg";
import sundarbans from "../assets/sundarbans.jpg";

const touristPlaces = [
  { img: victoriaMemorial, name: "Victoria Memorial Hall", city: "Kolkata", desc: "Iconic white marble monument and museum surrounded by lush gardens." },
  { img: darjeeling, name: "Darjeeling Tea Hills", city: "Darjeeling", desc: "Misty Himalayan views, toy trains and world-famous tea estates." },
  { img: digha, name: "Digha Sea Beach", city: "Purba Medinipur", desc: "Golden sunsets and gentle waves on Bengal's favorite coastline." },
  { img: sundarbans, name: "Sundarbans Mangroves", city: "South 24 Parganas", desc: "UNESCO mangrove forest, home of the Royal Bengal Tiger." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonia Buddy — Travel West Bengal Like a Pro" },
      { name: "description", content: "Live bus tracking, smart geofence alerts and verified local tours across 23 districts of West Bengal." },
      { property: "og:title", content: "Sonia Buddy — Travel West Bengal Like a Pro" },
      { property: "og:description", content: "Live bus tracking, smart geofence alerts and verified local tours across 23 districts." },
    ],
  }),
  component: Home,
});

const districts = [
  "Kolkata","Howrah","Hooghly","North 24 Pgs","South 24 Pgs","Nadia","Murshidabad","Birbhum",
  "Bardhaman E","Bardhaman W","Purulia","Bankura","Jhargram","Paschim Med","Purba Med",
  "Malda","Uttar Dinajpur","Dakshin Dinajpur","Darjeeling","Kalimpong","Jalpaiguri","Alipurduar","Cooch Behar",
];

const features = [
  { icon: MapPin, title: "Real-time Tracking", desc: "Follow your bus live on the map across every route in West Bengal." },
  { icon: Bell, title: "Smart Alerts", desc: "Sound + vibration notification before you reach your stop, even with screen off." },
  { icon: Compass, title: "Verified Tours", desc: "Connect with trusted local agencies for Digha, Darjeeling, Murshidabad and more." },
];

const steps = [
  { n: "01", title: "Search Your Route", desc: "Enter your starting point and destination to find the best bus options." },
  { n: "02", title: "Set Your Alert", desc: "Select your drop-off stop and activate the smart proximity notification." },
  { n: "03", title: "Relax & Travel", desc: "Sit back. Sonia Buddy will alert you just before you arrive." },
];

const stats = [
  { v: "23", l: "Districts Covered" },
  { v: "1000+", l: "Local Bus Routes" },
  { v: "100%", l: "Verified Operators" },
  { v: "Real-Time", l: "Notifications" },
];

const faqs = [
  { tag: "App Usage", icon: Smartphone, q: "How do I set a destination alert?", a: "Simply search for your bus route, select your destination stop, and toggle the \"Smart Alert\" button. Sonia Buddy will notify you via sound and vibration before you arrive." },
  { tag: "Bus Data", icon: Database, q: "Are the bus timings accurate?", a: "We use ground-level verified data for 23 districts of West Bengal. However, timings may vary slightly due to real-time traffic conditions." },
  { tag: "Safety", icon: Shield, q: "Does the app use background location?", a: "No. Sonia Buddy only accesses your location while the app is open, to detect proximity to your selected bus stop. We do not track location in the background." },
  { tag: "General", icon: HelpCircle, q: "Is Sonia Buddy available in Bengali?", a: "Yes! Sonia Buddy is designed for West Bengal and supports both English and Bengali languages for a smoother user experience." },
  { tag: "Privacy", icon: Lock, q: "How can I delete my data?", a: "Your privacy is our priority. You can request data deletion through the \"Account Deletion\" link in the footer or by emailing zisakhoofficial@gmail.com." },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [aiInput, setAiInput] = useState("");

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange/5 via-background to-background" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-orange/20 rounded-full blur-3xl -z-10" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-orange/10 text-orange text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> West Bengal • 23 Districts
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-[1.05] text-balance">
              Travel West Bengal <span className="bg-gradient-orange bg-clip-text text-transparent">Like a Pro.</span>
            </h1>
            <p className="mt-5 text-lg text-navy/65 max-w-xl leading-relaxed">
              Sonia Buddy: Your smart travel companion for West Bengal. Track local buses, get real-time stop alerts, and discover verified tour packages across all 23 districts. Travel smarter, safer, and faster.
            </p>
            <div id="download" className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-gradient-orange text-white px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:scale-105 transition-transform">
                <Download className="h-5 w-5" /> Download on Play Store
              </a>
              <a href="#features" className="inline-flex items-center gap-2 border-2 border-navy/20 text-navy px-6 py-3.5 rounded-xl font-semibold hover:bg-navy hover:text-white transition">
                Learn More
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-navy/60">
              <div><span className="text-2xl font-bold text-navy">23</span> Districts</div>
              <div className="h-8 w-px bg-navy/15" />
              <div><span className="text-2xl font-bold text-navy">1000+</span> Routes</div>
              <div className="h-8 w-px bg-navy/15" />
              <div><span className="text-2xl font-bold text-navy">100%</span> Verified</div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-orange opacity-30 blur-3xl rounded-full" />
            <img src={heroMockup} alt="Sonia Buddy app live tracking" width={600} height={600} className="relative w-full max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Why Sonia Buddy</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy text-balance">Built for the journey across Bengal.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-orange flex items-center justify-center text-white shadow-glow">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-navy/65 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES DETAILED */}
      <section className="py-20 px-6 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Core Features</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">Why use Sonia Buddy?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BellRing, title: "Smart Geofence Alerts", desc: "Never miss your stop again! Get automatic sound and vibration notifications as you enter your destination's radius. Perfect for naps or noisy bus journeys." },
              { icon: Database, title: "Hyper-Local Bus Data", desc: "Detailed timings and stop sequences for routes that even global maps miss. From major city hubs to rural village stands, we've got you covered." },
              { icon: Compass, title: "Verified Local Tours", desc: "Planning a trip to Digha, Darjeeling, or Murshidabad? Connect directly with trusted local travel agencies for the best and most affordable tour plans." },
            ].map((f) => (
              <div key={f.title} className="glass-dark rounded-2xl p-7 hover:border-orange/40 transition">
                <div className="h-12 w-12 rounded-xl bg-gradient-orange flex items-center justify-center shadow-glow"><f.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy text-balance">Three simple steps.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="bg-white rounded-2xl p-7 shadow-card border border-navy/5 h-full">
                  <span className="text-5xl font-extrabold bg-gradient-orange bg-clip-text text-transparent">{s.n}</span>
                  <h3 className="mt-3 text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-navy/65 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL COVERAGE */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Regional Coverage</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy text-balance">All 23 districts of West Bengal.</h2>
          </div>
          <div className="glass rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {districts.map((d) => (
                <div key={d} className="bg-white/70 border border-navy/5 rounded-xl px-3 py-2.5 text-sm font-medium text-navy hover:bg-gradient-orange hover:text-white hover:border-transparent transition cursor-default flex items-center justify-center gap-1.5 min-w-0">
                  <MapPin className="h-3.5 w-3.5 shrink-0 opacity-60" />
                  <span className="truncate">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Vision</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy text-balance">Bridging the gap in local travel.</h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed text-balance">
            Sonia Buddy was built with one goal: to empower the daily commuters of West Bengal. We understand the struggle of waiting at stands and the fear of missing a stop in an unfamiliar area. By combining advanced geofencing technology with authentic local data, we are making the 23 districts of Bengal more accessible and travel-friendly for everyone.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-navy rounded-3xl p-10 md:p-14 shadow-soft relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-orange/30 rounded-full blur-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-orange bg-clip-text text-transparent">{s.v}</div>
                <div className="mt-2 text-white/70 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SONIA AI SHOWCASE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-orange font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> Coming Soon
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy text-balance">Meet Sonia AI.</h2>
            <p className="mt-4 text-navy/65 text-lg">Ask anything about travel — bus fares, timings, route stops or trip guides. Your personal Bengal travel assistant.</p>
          </div>

          <div className="glass rounded-3xl p-6 md:p-8 shadow-soft">
            <div className="flex items-start gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-orange flex items-center justify-center text-white shadow-glow shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-navy/5">
                <p className="text-navy text-sm leading-relaxed">
                  Hi, I'm <strong>Sonia AI</strong>! Ask me anything about traveling in West Bengal — bus fares, timings, route stops, or tour guides. I'm here to help. ✨
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {["Kolkata to Digha bus fare?", "Last bus to Darjeeling?", "Howrah to Murshidabad route", "Best tour in Sundarbans"].map((s) => (
                <button key={s} onClick={() => setAiInput(s)} className="text-xs px-3 py-1.5 bg-orange/10 text-orange rounded-full hover:bg-orange hover:text-white transition">
                  {s}
                </button>
              ))}
            </div>

            <div className="flex gap-2 bg-white rounded-2xl border border-navy/10 p-2 shadow-sm">
              <input
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Ask Sonia AI about your trip…"
                className="flex-1 bg-transparent px-3 py-2 text-navy placeholder:text-navy/40 focus:outline-none text-sm"
              />
              <button disabled className="bg-gradient-orange text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-1.5 opacity-90 cursor-not-allowed">
                <Send className="h-4 w-4" /> <span className="hidden sm:inline">Ask</span>
              </button>
            </div>
            <p className="mt-3 text-xs text-navy/40 text-center">UI showcase only — Sonia AI launches with the next app update.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy text-balance">Questions, answered.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="bg-white rounded-2xl border border-navy/10 shadow-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <span className="h-10 w-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-orange uppercase tracking-wider">{f.tag}</span>
                      <h3 className="text-navy font-semibold mt-0.5">{f.q}</h3>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-navy/40 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[4.5rem] text-navy/70 leading-relaxed text-sm">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
