import { useState, useEffect } from "react";
import { COMPANY } from "../data/cars";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  pickupLocation: "",
  dropLocation: "",
  date: "",
};

const validate = (data) => {
  const errs = {};
  if (!data.name.trim()) errs.name = "Name is required";
  if (!data.phone.trim()) errs.phone = "Phone number is required";
  return errs;
};

const inputClass =
  "w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-brand-muted focus:border-brand-gold focus:outline-none";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Drive Yu – Self Drive Cars Sahibabad";
  }, []);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: "New Enquiry - Drive Yu",
          ...formData,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 text-center px-4 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&auto=format&fit=crop&q=80"
          alt="Contact Drive Yu"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
            Contact Us
          </h1>
          <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto">
            Get in touch — we&apos;re here to help you book your perfect ride
          </p>
        </div>
      </section>

      {/* Two-column section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white font-display mb-3">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full mb-8" />

            <div className="space-y-4 mb-8">
              {/* Address */}
              <div className="bg-zinc-900 rounded-xl p-4 flex gap-3 items-start">
                <span className="text-xl leading-none mt-0.5">📍</span>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">
                    Address
                  </p>
                  <p className="text-brand-muted text-sm">{COMPANY.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-zinc-900 rounded-xl p-4 flex gap-3 items-center">
                <span className="text-xl leading-none">📞</span>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">Phone</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-brand-muted text-sm hover:text-amber-400 transition"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-zinc-900 rounded-xl p-4 flex gap-3 items-center">
                <span className="text-xl leading-none">💬</span>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-muted text-sm hover:text-green-400 transition"
                  >
                    +91 {COMPANY.whatsapp.replace("91", "")}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-zinc-900 rounded-xl p-4 flex gap-3 items-center">
                <span className="text-xl leading-none">✉️</span>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-brand-muted text-sm hover:text-amber-400 transition"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-zinc-900 rounded-xl p-4 flex gap-3 items-center">
                <span className="text-xl leading-none">🕐</span>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">Hours</p>
                  <p className="text-brand-muted text-sm">{COMPANY.hours}</p>
                </div>
              </div>
            </div>

            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Right — Contact Form */}
          <div>
            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  Enquiry sent!
                </h3>
                <p className="text-brand-muted">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  Something went wrong.
                </h3>
                <p className="text-brand-muted mb-6">
                  Please try again or reach us directly on WhatsApp.
                </p>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-xl transition"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com (optional)"
                    className={inputClass}
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Where should we deliver the car?"
                    className={inputClass}
                  />
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Drop Location
                  </label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    placeholder="Drop-off location (optional)"
                    className={inputClass}
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white font-display text-center mb-8">
            Find Us
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5!2d77.3!3d28.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sShalimar%20Garden%2C%20Sahibabad%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
            className="w-full h-80 rounded-2xl border-0"
            title="Drive Yu Location"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
