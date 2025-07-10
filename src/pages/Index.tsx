import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhoIsFor from "@/components/WhoIsFor";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <WhoIsFor />
      <HowItWorks />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
