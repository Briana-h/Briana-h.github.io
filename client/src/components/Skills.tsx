interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
  color: string;
  description: string;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      id: 1,
      name: "Adobe Illustrator",
      category: "Design Software",
      icon: "fas fa-vector-square",
      color: "bg-orange-600",
      description: "Vector graphics and logo design"
    },
    {
      id: 2,
      name: "Adobe Photoshop",
      category: "Design Software",
      icon: "fas fa-image",
      color: "bg-blue-600",
      description: "Photo editing and digital art"
    },
    {
      id: 3,
      name: "Canva",
      category: "Design Software",
      icon: "fas fa-paint-brush",
      color: "bg-purple-600",
      description: "Graphic design and social media content"
    },
    {
      id: 4,
      name: "Digital Art",
      category: "Creative Skills",
      icon: "fas fa-palette",
      color: "bg-pink-600",
      description: "Digital illustration and artwork"
    },
    {
      id: 5,
      name: "Brand Design",
      category: "Creative Skills",
      icon: "fas fa-trademark",
      color: "bg-green-600",
      description: "Logo and brand identity creation"
    },
    {
      id: 6,
      name: "Traditional Drawing",
      category: "Creative Skills",
      icon: "fas fa-pencil-alt",
      color: "bg-gray-600",
      description: "Pencil drawing and sketching"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="section-subtitle">
            Tools and techniques I use to bring creative visions to life across digital and traditional mediums.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className={`card-hover bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 shadow-lg border-l-4 border-blue-600 fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${skill.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  <i className={`${skill.icon} text-white text-lg`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 font-poppins">
                    {skill.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {skill.category}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}