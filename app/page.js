import AboutSection from "./components/about-section";
import CommitmentSection from "./components/commitment-section";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import TeamSection from "./components/team-section";
import TestimonialsSection from "./components/testimonials-section";
import TruckParkingSection from "./components/truck-parking-section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ServicesSection />
      <TeamSection />
      <TruckParkingSection />
      <TestimonialsSection />

    </div>
  );
}
