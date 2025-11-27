import { Code2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Educurate: Personalised Learning Assistant',
      date: 'October 2025',
      tech: 'Python FastAPI, PostgreSQL, Neo4j, LLMs',
      github: 'https://github.com/kishoreLOL21',
      description: [
        'Built an agentic AI-based learning assistant that creates personalized topic roadmaps, curates learning content, and evaluates understanding',
        'Implemented LLM-driven Roadmap generator, question generator and Knowledge Graph-based Auto Evaluation System (AES) for adaptive feedback',
        'Achieved 98.3% roadmap accuracy and 95.7% evaluation alignment with expert assessments',
        'Developed scalable FastAPI backend integrated with PostgreSQL and Neo4j for next-gen personalized teaching',
      ],
      color: 'blue',
    },
    {
      title: 'Smart Vehicle Body Type Classification (CarVizion)',
      date: 'March 2025',
      tech: 'ESP32-CAM, Arduino, Deep Learning, MobileNetV2',
      github: 'https://github.com/kishoreLOL21',
      description: [
        'Developed a real-time smart parking assistant and autonomous navigation aid',
        'Classifies car body types (sedans, SUVs, hatchbacks, vans) with 91% accuracy and 0.927 ROC-AUC',
        'Fine-tuned MobileNetV2 (10.86MB) model on Stanford car dataset',
        'Achieved sub-2s inference time by integrating ESP32-CAM, Arduino Uno, IR sensors, and servo motors',
        'Successfully deployed in smart campus and urban parking environments',
      ],
      color: 'green',
    },
    {
      title: 'QCNN for Parkinson\'s Disease Detection',
      date: 'November 2024',
      tech: 'Qiskit, Python, Quantum Computing, CNN',
      github: 'https://github.com/kishoreLOL21',
      description: [
        'Built a hybrid deep learning model with a quantum layer for Parkinson\'s disease detection from MRI scans',
        'Achieved 97.16% validation accuracy using classical-quantum CNN architecture',
        'Developed complete end-to-end pipeline with data preprocessing, feature selection, and model persistence',
        'Created Python interface for real-time diagnostic predictions from user-input medical data',
      ],
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      hover: 'hover:from-blue-600 hover:to-cyan-600',
      text: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    green: {
      gradient: 'from-green-500 to-emerald-500',
      hover: 'hover:from-green-600 hover:to-emerald-600',
      text: 'text-green-600',
      bg: 'bg-green-50',
    },
    orange: {
      gradient: 'from-orange-500 to-amber-500',
      hover: 'hover:from-orange-600 hover:to-amber-600',
      text: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative solutions leveraging AI, IoT, and cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100"
              >
                <div className={`h-2 bg-gradient-to-r ${colors.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${colors.bg} rounded-xl`}>
                      <Code2 className={colors.text} size={24} />
                    </div>
                    <span className="text-sm text-slate-500 font-medium">{project.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className={`text-sm ${colors.text} font-semibold mb-4`}>{project.tech}</p>

                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className={`${colors.text} mr-2 mt-1 flex-shrink-0 text-xs`}>▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white rounded-lg font-semibold transition-all transform hover:scale-105`}
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all"
                    >
                      <ExternalLink size={20} className="text-slate-600" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/kishoreLOL21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
