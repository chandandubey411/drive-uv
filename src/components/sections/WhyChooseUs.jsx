import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: "🚗",
    title: "Well-Maintained Cars",
    description: "Every car is regularly serviced and cleaned before your trip.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Starting from just ₹79/hr with no hidden charges or surprises.",
  },
  {
    icon: "🚫",
    title: "No Hidden Charges",
    description: "What you see is what you pay. Transparent pricing, always.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description: "We're available round the clock to assist you whenever you need.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Why Choose Drive Yu"
          subtitle="We make self-drive simple, affordable, and trustworthy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-800 rounded-2xl p-6 border border-transparent hover:border-brand-gold transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
