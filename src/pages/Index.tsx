import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Certificates from "@/components/Certificates";
import Photography from "@/components/Photography";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Publications />
      <Certificates />
      <Photography />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
