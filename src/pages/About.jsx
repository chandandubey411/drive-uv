import { useEffect } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/cars";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const quickFacts = [
  "40+ well-maintained cars",
  "Based in Sahibabad, Ghaziabad",
  "Flexible rental durations (hourly/daily)",
  "No hidden charges",
  "24/7 customer support",
  "Instant WhatsApp booking",
];

const About = () => {
  useEffect(() => {
    document.title = "About Us – Drive Yu Car Rental";
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 text-center px-4 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&auto=format&fit=crop&q=80"
          alt="About Drive Yu"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/75 via-[#0a0a0a]/65 to-[#0a0a0a]" />
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
            About Drive Yu
          </h1>
          <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto">
            Your trusted self-drive car rental partner in Sahibabad, Ghaziabad
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mb-6" />
            <p className="text-brand-muted leading-relaxed mb-4">
              {COMPANY.name} is a self-drive car rental service based in
              Sahibabad, Ghaziabad. We started with a simple idea — make
              personal mobility accessible to everyone without the hassle of
              hiring a driver or dealing with hidden costs.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              We serve customers across Sahibabad, Ghaziabad, Noida, and the
              wider NCR region. Whether you need a car for a few hours, a full
              day, or a weekend trip, we have flexible plans to suit your
              schedule and budget.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Our fleet of 40+ well-maintained vehicles ranges from budget
              hatchbacks to premium SUVs — all regularly serviced, cleaned, and
              ready to go. We believe in transparent pricing, zero surprises, and
              exceptional service every single time.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-6 py-3 rounded-xl transition"
            >
              Book Your Ride Now
            </Link>
          </div>

          {/* Right — Quick Facts */}
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              {quickFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <span className="text-amber-400 text-lg leading-none mt-0.5">
                    ✅
                  </span>
                  <span className="text-brand-muted">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro Video */}
      <section className="pb-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-zinc-800 bg-zinc-950 p-2">
            <video
              src="https://0lhw85i87r.ufs.sh/f/HMiUwEFgMn3U37pz2iOcAMxFChRVSI4sKT6Gw1QEby0gLDqW"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full rounded-xl object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Our Mission */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mb-6" />
          <p className="text-brand-muted text-base md:text-lg leading-relaxed">
            To make self-drive car rental accessible, affordable, and
            hassle-free for everyone in Sahibabad and Ghaziabad. We believe in
            transparent pricing, well-maintained vehicles, and exceptional
            customer service — every single time.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0a0a0a] text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
          Ready to Drive?
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-3.5 rounded-xl transition text-lg"
        >
          Book Your Ride Now
        </Link>
      </section>
    </main>
  );
};

export default About;
