import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { COMPANY } from "../../data/cars";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/cars", label: "Cars" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const activeLinkClass = ({ isActive }) =>
    isActive
      ? "text-brand-gold font-semibold"
      : "text-gray-300 hover:text-brand-gold transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      {/* Top info bar — desktop only */}
      <div className="hidden lg:block bg-zinc-900 text-sm text-brand-muted">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>📞 {COMPANY.phone}</span>
          <span>{COMPANY.email}</span>
        </div>
      </div>

      {/* Main navbar row */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Drive Yu" className="h-10 w-auto object-contain" />
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={activeLinkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-brand-gold text-black font-semibold rounded-xl px-4 py-2 hover:bg-brand-gold-dark transition-colors duration-200 text-sm"
          >
            Book Your Ride Now
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 w-full">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={activeLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-brand-gold text-black font-semibold rounded-xl px-4 py-2 hover:bg-brand-gold-dark transition-colors duration-200 text-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Your Ride Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
