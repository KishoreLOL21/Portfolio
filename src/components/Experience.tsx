import { Briefcase, ExternalLink, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'CareMe Health PVT., LTD.',
      role: 'Front End Developer and Data Engineer Intern',
      duration: 'May 2025 – July 2025',
      location: 'Chennai, Tamil Nadu',
      website: 'togthr.health',
      websiteUrl: 'https://togthr.health',
      description: [
        'Worked on front-end development of Togthr.health, an Electronic Health Records (EHR), Customer Relationship Management (CRM) and Telehealth platform used by 1,000+ users',
        'Built responsive, accessible UI with React.js, Next.js, and Tailwind CSS',
        'Created modular components and dynamic forms using React Hook Form and Zod, cutting redundant code by 35% and form creation time by 50%',
      ],
      color: 'blue',
    },
    {
      company: 'Optus Innovations; onebase.ai',
      role: 'Java and Springboot Developer Intern',
      duration: 'May 2024 – July 2024',
      location: 'Chennai, Tamil Nadu',
      githubUrl: 'https://github.com/kishoreLOL21',
      description: [
        'Developed an online invoice generator using Spring Boot and Apache PDFBox, reducing invoice processing time by 40% across 100+ monthly transactions',
        'Enabled real-time editing, PDF preview, and dynamic branding for 10+ business use cases',
        'Built a responsive UI boosting retention by 60%, with smart validation and customizable invoice logic',
      ],
      color: 'green',
    },
    {
      company: 'VIT Chennai',
      role: 'Research Internship',
      duration: 'June 2024 – July 2024',
      location: 'Chennai, Tamil Nadu',
      githubUrl: 'https://github.com/kishoreLOL21',
      description: [
        'Proposed WC-SPRM, a lightweight real-time paraphrasing model achieving 93% training and 88% contextual accuracy',
        'Trained custom Skip-gram and FFNN models with MSE Loss, reducing model size by 70%',
        'Generated 500+ synonym clouds via Datamuse API and cosine similarity',
        'Outperformed traditional Embedding based models like word2vec, glove and fasttext in speed and memory efficiency by over 40%',
      ],
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-600',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-100',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-600',
      text: 'text-green-600',
      hover: 'hover:bg-green-100',
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-600',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-100',
    },
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`${colors.bg} border-l-4 ${colors.border} rounded-r-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className={colors.text} size={24} />
                      <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                    </div>
                    <p className={`text-xl font-semibold ${colors.text} mb-2`}>{exp.role}</p>
                    <div className="flex flex-wrap gap-4 text-slate-600 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    {exp.websiteUrl && (
                      <a
                        href={exp.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg ${colors.text} font-medium ${colors.hover} transition-colors`}
                      >
                        Website
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {exp.githubUrl && (
                      <a
                        href={exp.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg ${colors.text} font-medium ${colors.hover} transition-colors`}
                      >
                        GitHub
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 text-slate-700">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`${colors.text} mr-3 mt-1 flex-shrink-0`}>▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
