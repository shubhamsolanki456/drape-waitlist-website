import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Marquee from "./components/Marquee";
import Showcase from "./components/Showcase";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-drape-black noise-overlay">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Marquee />
      <Showcase />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
