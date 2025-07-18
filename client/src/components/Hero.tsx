import profileImage from "@assets/your-photo_1752806607577.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl">
              <img 
                src={profileImage} 
                alt="Briana K Hernandez Damian" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 font-poppins">
              Briana K Hernandez Damian
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-6 font-light">
              Creative Artist & Designer
            </p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              A passionate creative exploring color, form, and emotion through diverse mediums and techniques. 
              Welcome to my portfolio where art meets innovation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="btn-primary"
            >
              <i className="fas fa-palette mr-2"></i>
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
