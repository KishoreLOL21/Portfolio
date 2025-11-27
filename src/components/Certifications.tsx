import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Foundation Level in Data Science',
      issuer: 'Professional Certification',
      date: 'December 2024',
      status: 'Completed',
      color: 'blue',
    },
    {
      title: 'SQL for Data Science',
      issuer: 'Professional Certification',
      date: 'September 2024',
      status: 'Completed',
      color: 'green',
    },
    {
      title: 'Web Developer Boot Camp',
      issuer: 'Professional Training',
      date: 'September 2023',
      status: 'Ongoing',
      color: 'orange',
    },
    {
      title: 'C Programming Training',
      issuer: 'IIT Bombay',
      date: 'April 2023',
      status: 'Completed',
      color: 'red',
    },
    {
      title: 'C++ Programming Training',
      issuer: 'IIT Bombay',
      date: 'April 2023',
      status: 'Completed',
      color: 'cyan',
    },
    {
      title: 'Python 3.4.3 Training',
      issuer: 'IIT Bombay',
      date: 'April 2023',
      status: 'Completed',
      color: 'pink',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-600',
      badge: 'bg-green-100 text-green-700',
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-700',
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-600',
      badge: 'bg-red-100 text-red-700',
    },
    cyan: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-600',
      badge: 'bg-cyan-100 text-cyan-700',
    },
    pink: {
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-600',
      badge: 'bg-pink-100 text-pink-700',
    },
  };

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className={colors.text} size={32} />
                  <span
                    className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                <p className={`${colors.text} font-semibold mb-3`}>{cert.issuer}</p>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Additional Achievement
              </h3>
              <p className="text-slate-300 text-lg">
                <strong className="text-white">Praveen Uttarardh</strong> (Top Level Certification)
                <br />
                Dakshin Bharat Hindi Prachar Sabha
              </p>
              <p className="text-slate-400 mt-2">
                Advanced proficiency in Hindi language and literature
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Award className="text-yellow-400" size={64} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
