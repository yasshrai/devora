import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyDevora from "@/components/WhyDevora";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-zinc-950 to-black">
      <Navbar />
      <Hero />
      <Features />
      <WhyDevora />
      <CTA />
      <Footer />
    </div>
  );
}
