
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import NGOSection from "@/components/NGOSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Hero />
      <HowItWorks />
      <Features />
      <NGOSection />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
