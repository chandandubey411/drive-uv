import { Link } from "react-router-dom";

const PLACEHOLDER = "https://via.placeholder.com/400x200?text=Car+Image";

const CarCard = ({ car }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          className="h-48 w-full object-cover rounded-t-2xl"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER;
          }}
        />
        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-brand-gold text-black text-xs font-semibold px-2 py-1 rounded-full">
          {car.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-base leading-snug">
          {car.name}
        </h3>
        <p className="text-brand-muted text-sm mb-3">{car.company}</p>

        {/* Specs row */}
        <div className="flex gap-4 text-sm text-brand-muted mb-4">
          <span>⛽ {car.fuel}</span>
          <span>⚙️ {car.transmission}</span>
        </div>

        {/* Price */}
        <p className="text-brand-gold font-bold text-lg mb-4">
          ₹{car.pricePerHour}/hr
        </p>

        {/* Book Now */}
        <Link
          to={`/book/${car.id}`}
          className="mt-auto block w-full text-center bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-semibold rounded-xl py-2.5 hover:opacity-90 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
