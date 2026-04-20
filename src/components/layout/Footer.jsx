import { Link } from "react-router-dom";
import { COMPANY } from "../../data/cars";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/cars", label: "Cars" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img src="/logo.png" alt="Drive Yu" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-brand-muted text-sm mb-3">{COMPANY.tagline}</p>
            <p className="text-brand-muted text-sm leading-relaxed">
              Affordable, well-maintained self-drive cars available 7 days a week in Sahibabad, Ghaziabad. No hidden charges, no hassle.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-brand-muted text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li className="leading-relaxed">{COMPANY.address}</li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  📞 {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  💬 WhatsApp: +91 {COMPANY.whatsapp.slice(2)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-brand-gold transition-colors duration-200"
                >
                  ✉️ {COMPANY.email}
                </a>
              </li>
              <li>🕐 {COMPANY.hours}</li>
            </ul>
          </div>

          {/* Column 4 — Book Your Ride */}
          <div>
            <h3 className="text-white font-semibold mb-4">Book Your Ride</h3>
            <p className="text-brand-muted text-sm mb-4 leading-relaxed">
              Ready to hit the road? Book instantly via WhatsApp — we'll confirm your ride in minutes.
            </p>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-colors duration-200"
            >
              💬 Book on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-brand-muted text-sm">
          © {new Date().getFullYear()} Drive Yu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
