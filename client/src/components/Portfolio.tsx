import { useState, useEffect } from "react";
import art1 from "@assets/art1_1752806607565.png";
import art2 from "@assets/art2_1752806607568.png";
import art3 from "@assets/art3_1752806607570.png";
import art4 from "@assets/art4_1752806607571.png";
import art5 from "@assets/art5_1752806607572.png";
import art6 from "@assets/art6_1752806607573.png";
import art7 from "@assets/art7_1752806607574.png";
import art8 from "@assets/art8_1752806607575.png";
import art9 from "@assets/art9_1752806607576.png";

interface Artwork {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const artworks: Artwork[] = [
    {
      id: 1,
      src: art1,
      title: "Billy",
      description: "Whimsical illustration featuring a cozy house and creative characters",
      category: "Illustration"
    },
    {
      id: 2,
      src: art2,
      title: "Converse Study",
      description: "Pencil drawing focusing on form and detail",
      category: "Drawing"
    },
    {
      id: 3,
      src: art3,
      title: "Geometric Forms",
      description: "Light and shadow study with basic shapes",
      category: "Study"
    },
    {
      id: 4,
      src: art4,
      title: "Cultural Portrait",
      description: "Digital art combining portraiture with symbolic elements",
      category: "Digital Art"
    },
    {
      id: 5,
      src: art5,
      title: "Plata Azul Logo",
      description: "Brand identity design for mariachi group",
      category: "Design"
    },
    {
      id: 6,
      src: art6,
      title: "Cloud Studies",
      description: "Digital painting exploring atmospheric effects",
      category: "Digital Art"
    },
    {
      id: 7,
      src: art7,
      title: "Brightest Star",
      description: "Tarot-inspired design with mystical elements",
      category: "Design"
    },
    {
      id: 8,
      src: art8,
      title: "Night Pool",
      description: "Digital cityscape with surreal elements",
      category: "Digital Art"
    },
    {
      id: 9,
      src: art9,
      title: "Tree Collection",
      description: "Botanical studies of various tree species",
      category: "Study"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-title">Artwork & Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="section-subtitle">
            A curated collection of my artistic works showcasing various styles, mediums, and creative explorations.
          </p>
        </div>
        
        <div className={`masonry-grid ${isVisible ? 'fade-in' : ''}`}>
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className="masonry-item">
              <div 
                className="card-hover bg-white rounded-xl overflow-hidden shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={artwork.src} 
                    alt={artwork.title}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-slate-800 text-lg">{artwork.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {artwork.category}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{artwork.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
