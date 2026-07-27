import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import TrustedTech from "@/components/TrustedTech";
import VertexEarth from "@/components/VertexEarth";
import Why7KAI from "@/components/Why7KAI";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Antigravity from "@/components/Antigravity";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">

      {/* Globe */}

      <VertexEarth />

      <div 
      className="z-20 pt-5 fixed h-screen"
      style={{ width: '100%' ,height: '400px', position: 'fixed' , }}>
  <Antigravity
    count={4000}
    magnetRadius={15}
    ringRadius={15}
    waveSpeed={0.8}
    waveAmplitude={12}
    particleSize={0.4}
    lerpSpeed={0.002}
    color="#cbbafd"
    autoAnimate
    particleVariance={0}
    rotationSpeed={0.5}
    depthFactor={5}
    pulseSpeed={6}
    particleShape="sphere"
    fieldStrength={0}
/>
</div>
      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="relative z-30">
        <Hero />
      </div>

      <div className="relative z-20">
        <TrustedTech />
      </div>
      <div className="relative z-20">
        <SolutionsShowcase />
      </div>
      <div className="relative z-20">
        <FeaturedProjects />
      </div>
      <div className="relative z-20">
        <Why7KAI />
      </div>
      <div className="relative z-20">
        <ServicesSection />
      </div>
      <div className="relative z-20">
        <CTASection />
      </div>
      <div className="relative z-20 bg-none">
        <Footer />
      </div>
      


    </main>
  );
}