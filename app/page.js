import AboutSection from "./components/about-section";
import CommitmentSection from "./components/commitment-section";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ServicesSection />

    </div>
  );
}
