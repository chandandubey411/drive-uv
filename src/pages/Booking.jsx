import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { cars } from "../data/cars";

const today = new Date().toISOString().split("T")[0];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  pickupLocation: "",
  dropLocation: "",
  pickupDate: "",
  message: "",
};

const validate = (data) => {
  const errs = {};
  if (!data.name.trim()) errs.name = "Name is required";
  if (!data.phone.trim()) errs.phone = "Phone number is required";
  if (!data.pickupDate.trim()) errs.pickupDate = "Pickup date is required";
  return errs;
};

const inputClass =
  "w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-brand-muted focus:border-brand-gold focus:outline-none";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === Number(id));

  useEffect(() => {
    if (!car) {
      navigate("/cars", { replace: true });
    }
  }, [car, navigate]);

  useEffect(() => {
    if (car) {
      document.title = `Book ${car.name} – Drive Yu`;
    }
  }, [car]);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  if (!car) return null;

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
          subject: `New Car Booking - ${car.name} - Drive Yu`,
          ...formData,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const categoryColors = {
    Budget: "bg-green-500/20 text-green-400",
    Standard: "bg-blue-500/20 text-blue-400",
    Premium: "bg-amber-500/20 text-amber-400",
  };

  return (
    <main>
      {/* Page Hero */}
      <section className="pt-32 pb-8 bg-zinc-900 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">
          Book Your Car
        </h1>
        <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto">
          Fill in the details below and we&apos;ll confirm your booking shortly
        </p>
      </section>

      {/* Two-column layout */}
      <section className="bg-[#0a0a0a] py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Car Summary */}
          <div className="bg-zinc-900 rounded-2xl p-6 h-fit">
            <img
              src={car.image}
              alt={car.name}
              loading="lazy"
              className="rounded-xl w-full h-48 object-cover mb-5"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x300/1a1a1a/6b7280?text=No+Image";
              }}
            />
            <h2 className="text-xl font-bold text-white mb-1">{car.name}</h2>
            <p className="text-brand-muted text-sm mb-4">{car.company}</p>

            {/* Specs row */}
            <div className="flex gap-4 mb-4">
              <span className="flex items-center gap-1.5 text-brand-muted text-sm">
                ⛽ {car.fuel}
              </span>
              <span className="flex items-center gap-1.5 text-brand-muted text-sm">
                ⚙️ {car.transmission}
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-amber-400 mb-4">
              ₹{car.pricePerHour}/hr
            </p>

            {/* Category badge */}
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${
                categoryColors[car.category] ?? "bg-zinc-700 text-zinc-300"
              }`}
            >
              {car.category}
            </span>

            {/* WhatsApp help */}
            <div className="mt-2">
              <a
                href="https://wa.me/919310863307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition"
              >
                💬 Need help? Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Booking Form */}
          <div>
            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  Booking request sent!
                </h3>
                <p className="text-brand-muted mb-6">
                  We&apos;ll contact you shortly.
                </p>
                <Link
                  to="/cars"
                  className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-black font-semibold px-6 py-2.5 rounded-xl transition"
                >
                  Book Another Car
                </Link>
              </div>
            ) : status === "error" ? (
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  Something went wrong.
                </h3>
                <p className="text-brand-muted mb-6">
                  Please try again or contact us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919310863307"
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
                    Pickup Location <span className="text-red-400">*</span>
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

                {/* Pickup Date */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Pickup Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    min={today}
                    className={inputClass}
                  />
                  {errors.pickupDate && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.pickupDate}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any additional details or questions? (optional)"
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
                    "Send Booking Request"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
