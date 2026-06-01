import { useState, useEffect } from "react";
import { cars } from "../data/cars";
import CarCard from "../components/ui/CarCard";

const DEFAULT_FILTERS = { fuel: "All", transmission: "All", category: "All" };

const Cars = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  useEffect(() => {
    document.title = "Our Cars – Drive Yu Self Drive Rentals";
  }, []);

  const filteredCars = cars.filter(
    (car) =>
      (filters.fuel === "All" || car.fuel === filters.fuel) &&
      (filters.transmission === "All" ||
        car.transmission === filters.transmission) &&
      (filters.category === "All" || car.category === filters.category)
  );

  const isFiltered =
    filters.fuel !== "All" ||
    filters.transmission !== "All" ||
    filters.category !== "All";

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  const handleChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  return (
    <main>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 text-center px-4 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&auto=format&fit=crop&q=80"
          alt="Car fleet banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
            Our Fleet
          </h1>
          <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto">
            100+ well-maintained cars available for self-drive in Sahibabad,
            Ghaziabad
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0a0a0a] py-8 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8">
          {[
            { value: "100+", label: "Cars Available" },
            { value: "₹79/hr", label: "Starting Price" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Transparent" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-brand-gold text-2xl font-bold">{stat.value}</p>
              <p className="text-brand-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 bg-[#0a0a0a]/95 backdrop-blur py-4 border-b border-zinc-800 z-40">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center gap-3">
          {/* Fuel Type */}
          <select
            value={filters.fuel}
            onChange={(e) => handleChange("fuel", e.target.value)}
            className="bg-zinc-800 text-white border border-zinc-700 rounded-xl px-4 py-2 focus:border-brand-gold focus:outline-none text-sm"
          >
            <option value="All">Fuel: All</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>

          {/* Transmission */}
          <select
            value={filters.transmission}
            onChange={(e) => handleChange("transmission", e.target.value)}
            className="bg-zinc-800 text-white border border-zinc-700 rounded-xl px-4 py-2 focus:border-brand-gold focus:outline-none text-sm"
          >
            <option value="All">Transmission: All</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>

          {/* Category */}
          <select
            value={filters.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="bg-zinc-800 text-white border border-zinc-700 rounded-xl px-4 py-2 focus:border-brand-gold focus:outline-none text-sm"
          >
            <option value="All">Category: All</option>
            <option value="Budget">Budget</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="SUV">SUV</option>
            <option value="MPV">MPV</option>
            <option value="Luxury">Luxury</option>
          </select>

          {/* Car count */}
          <span className="text-brand-muted text-sm ml-auto">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredCars.length}
            </span>{" "}
            cars
          </span>

          {/* Reset button — only when a filter is active */}
          {isFiltered && (
            <button
              onClick={resetFilters}
              className="text-brand-gold hover:underline text-sm"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Car Grid */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-muted text-lg mb-4">
                No cars found matching your filters.
              </p>
              <button
                onClick={resetFilters}
                className="bg-brand-gold text-black font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-zinc-900 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-6">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <a
          href="https://wa.me/919310863307"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          💬 Chat on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default Cars;
