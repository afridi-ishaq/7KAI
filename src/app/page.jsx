import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TrustedTech from "@/components/TrustedTech";
import VertexEarth from "@/components/VertexEarth";


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
        <ServicesSection />
      </div>
      

    </main>
  );
}