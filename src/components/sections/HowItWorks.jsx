import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Choose Your Car",
    description: "Browse our fleet and pick the perfect car for your trip.",
  },
  {
    number: "02",
    title: "Contact & Verify",
    description: "WhatsApp or call us to confirm availability and your details.",
  },
  {
    number: "03",
    title: "Make Payment",
    description: "Pay a simple advance to confirm your booking.",
  },
  {
    number: "04",
    title: "Drive & Return",
    description: "Pick up the car and enjoy your ride. Return it when done.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="How It Works"
          subtitle="Book your self-drive car in 4 simple steps"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-zinc-900 rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-brand-gold mb-3">
                {step.number}
              </p>
              <h3 className="font-semibold text-white text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
