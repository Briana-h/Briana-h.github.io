import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md'
    } border-b border-blue-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600 font-poppins">
            Briana K Hernandez
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
