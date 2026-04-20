const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zinc-900 to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Hit the Road?
        </h2>
        <p className="text-brand-muted text-lg mb-8">
          Book your self-drive car now via WhatsApp — instant confirmation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919310863307"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-6 py-3 transition"
          >
            💬 Book on WhatsApp
          </a>
          <a
            href="tel:+919871230417"
            className="bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
