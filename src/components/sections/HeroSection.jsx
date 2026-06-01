import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-zinc-900 to-[#0a0a0a] flex items-center">
      {/* Right side car image (desktop only) */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200"
          alt="Premium car"
          className="w-full h-full object-cover opacity-70 rotate-1 scale-105"
        />
      </div>

      {/* Left side content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        <div className="max-w-xl animate-fade-in">
          {/* Badge */}
          <span className="inline-block bg-brand-gold/20 text-brand-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand-gold/30">
            🚗 Self Drive Car Rental
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold font-display text-white leading-tight mb-4">
            Drive{" "}
            <span className="text-brand-gold">Your Way</span>
          </h1>

          {/* Subheadline */}
          <p className="text-brand-muted text-lg md:text-xl mb-8 leading-relaxed">
            Premium self-drive cars in Sahibabad, Ghaziabad. Starting from ₹79/hr.
            No driver. No hassle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition"
            >
              Book Your Ride Now
            </Link>
            <Link
              to="/cars"
              className="border border-brand-gold text-brand-gold rounded-xl px-6 py-3 hover:bg-brand-gold/10 transition"
            >
              View Our Cars →
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-brand-gold font-bold text-2xl">100+</p>
              <p className="text-brand-muted text-sm">Cars</p>
            </div>
            <div>
              <p className="text-brand-gold font-bold text-2xl">₹79/hr</p>
              <p className="text-brand-muted text-sm">Starting</p>
            </div>
            <div>
              <p className="text-brand-gold font-bold text-2xl">24/7</p>
              <p className="text-brand-muted text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile car image (below content) */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-48 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800"
          alt="Premium car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
