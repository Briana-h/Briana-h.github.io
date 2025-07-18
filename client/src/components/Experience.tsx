interface Experience {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: string;
  color: string;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Media Manager & Guitarist",
      organization: "Plata Azul Mariachi",
      description: "Designed the group's logo and promotional materials, managed communications and gig inquiries, and performed as a guitarist at community events. Balanced creative design work with live performance responsibilities.",
      icon: "fas fa-music",
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Certified Lifeguard",
      organization: "Aquatic Safety Professional",
      description: "Red Cross certified in CPR and Lifeguarding. Ensured safety and provided quick emergency response in aquatic environments. Developed strong attention to detail and crisis management skills.",
      icon: "fas fa-life-ring",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="section-title">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="section-subtitle">
            My professional journey combining creative design with diverse skill sets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`card-hover bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-8 shadow-lg border-l-4 border-blue-600 fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 ${experience.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  <i className={`${experience.icon} text-white text-lg`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 font-poppins">
                    {experience.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {experience.organization}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
