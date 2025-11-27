import { Code, Wrench, Layers, GitBranch, Terminal, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      color: 'blue',
      skills: ['Python', 'Java', 'C', 'C++', 'HTML/CSS', 'JavaScript', 'SQL (MySQL, Oracle, PostgreSQL)'],
    },
    {
      icon: Layers,
      title: 'Technologies & Frameworks',
      color: 'green',
      skills: [
        'Node.js',
        'React.js',
        'Next.js',
        'TensorFlow',
        'Spring Boot',
        'Apache PDFBox',
        'AWS',
        'AI/ML with Python',
        'Python Fast API',
      ],
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      color: 'orange',
      skills: [
        'VS Code',
        'Postman',
        'Google Cloud Platform',
        'IntelliJ IDEA',
        'Microsoft Office',
        'Tableau',
      ],
    },
    {
      icon: GitBranch,
      title: 'Software Engineering',
      color: 'red',
      skills: [
        'Design Patterns',
        'Agile Methodologies',
        'Code Reviews',
        'DSA',
        'DBMS',
        'Operating Systems',
        'Networking',
        'SDLC Understanding',
      ],
    },
    {
      icon: Terminal,
      title: 'Automation & Troubleshooting',
      color: 'cyan',
      skills: [
        'Build Deployment (Java, Python)',
        'Voice Chatbots (pyttsx3, pyaudio, speechrecognition, torch)',
        'Debugging',
        'Microcontroller Programming',
      ],
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      color: 'pink',
      skills: ['Canva', 'Responsive Design', 'UI/UX Principles', 'Tailwind CSS'],
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'bg-blue-600',
      text: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
    },
    green: {
      bg: 'bg-green-50',
      icon: 'bg-green-600',
      text: 'text-green-600',
      badge: 'bg-green-100 text-green-700',
    },
    orange: {
      bg: 'bg-orange-50',
      icon: 'bg-orange-600',
      text: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-700',
    },
    red: {
      bg: 'bg-red-50',
      icon: 'bg-red-600',
      text: 'text-red-600',
      badge: 'bg-red-100 text-red-700',
    },
    cyan: {
      bg: 'bg-cyan-50',
      icon: 'bg-cyan-600',
      text: 'text-cyan-600',
      badge: 'bg-cyan-100 text-cyan-700',
    },
    pink: {
      bg: 'bg-pink-50',
      icon: 'bg-pink-600',
      text: 'text-pink-600',
      badge: 'bg-pink-100 text-pink-700',
    },
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${colors.icon} p-3 rounded-xl`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`${colors.badge} px-3 py-1.5 rounded-lg text-sm font-medium transition-transform hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-slate-200">Full Stack Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-slate-200">Artificial Intelligence & Machine Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-slate-200">Data Engineering & Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-slate-200">Cloud Computing (AWS, GCP)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-200">IoT & Embedded Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-slate-200">Quantum Computing Applications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-slate-200">Natural Language Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                <span className="text-slate-200">RESTful API Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
