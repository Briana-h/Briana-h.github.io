import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'fade-in' : ''}`}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Resume Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => {
            // TODO: Implement actual resume download
            alert('Resume download functionality would be implemented here. Please contact directly for resume.');
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          aria-label="Download Resume"
        >
          <i className="fas fa-download text-lg"></i>
        </button>
      </div>
    </div>
  );
}
