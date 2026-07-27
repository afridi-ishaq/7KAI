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


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">

      {/* Globe */}
      <VertexEarth />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="relative z-10">
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
      <div className="relative z-10">
        <Footer />
      </div>
      


    </main>
  );
}