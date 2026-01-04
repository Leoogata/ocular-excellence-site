import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Formation from "@/components/Formation";
import Publications from "@/components/Publications";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Formation />
        <Publications />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
