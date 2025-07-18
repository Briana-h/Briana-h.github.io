export default function Contact() {
  const handleResumeDownload = () => {
    // TODO: Implement actual resume download functionality
    alert('Resume download functionality would be implemented here. Please contact directly for resume.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="section-subtitle">
            Ready to collaborate or have questions about my work? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 fade-in">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <a 
                    href="mailto:1brianah1@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    1brianah1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-linkedin text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/briana-h-9aa565351/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-slate-600 mb-4">Interested in my work? Download my resume below:</p>
              <button 
                onClick={handleResumeDownload}
                className="btn-primary"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
