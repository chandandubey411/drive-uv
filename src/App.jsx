import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import CallButton from "./components/ui/CallButton";

const Home = lazy(() => import("./pages/Home"));
const Cars = lazy(() => import("./pages/Cars"));
const Booking = lazy(() => import("./pages/Booking"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </BrowserRouter>
    </div>
  );
}
