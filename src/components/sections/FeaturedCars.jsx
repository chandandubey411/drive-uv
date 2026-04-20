import { Link } from "react-router-dom";
import { cars } from "../../data/cars";
import CarCard from "../ui/CarCard";
import SectionHeading from "../ui/SectionHeading";

const featuredCars = cars.slice(0, 6);

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Featured Cars"
          subtitle="Handpicked cars for every budget and occasion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/cars"
            className="text-brand-gold hover:underline font-medium"
          >
            View All Cars →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
