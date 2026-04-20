import { useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturedCars from "../components/sections/FeaturedCars";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowItWorks from "../components/sections/HowItWorks";
import CTABanner from "../components/sections/CTABanner";

const Home = () => {
  useEffect(() => {
    document.title = "Drive Yu – Self Drive Car Rental in Sahibabad, Ghaziabad";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Book self-drive cars in Sahibabad, Ghaziabad. 40+ cars from ₹79/hr. No hidden charges. Instant WhatsApp booking."
      );
  }, []);

  return (
    <main>
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <HowItWorks />
      <CTABanner />
    </main>
  );
};

export default Home;
