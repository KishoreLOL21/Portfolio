import { Trophy, Target, Users, Zap } from 'lucide-react';

const Extracurricular = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Top 20 Finalist (16th Place)',
      event: 'GEN AI Hackathon by CLSS Labs, OMR',
      description: 'Competed among numerous teams to secure a top position in a prestigious AI hackathon',
      color: 'from-yellow-500 to-amber-500',
      iconBg: 'bg-yellow-500',
    },
    {
      icon: Target,
      title: '3rd Place Winner',
      event: 'DEFY25 Web3 Hackathon, DAO Community, VIT Chennai',
      description: 'Secured third place in a competitive Web3 development hackathon',
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-500',
    },
    {
      icon: Zap,
      title: 'Hackathon Participant',
      event: 'Hack the Horizon - AI Club, VIT Chennai',
      description: 'Participated in a web design hackathon showcasing frontend development skills',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500',
    },
    {
      icon: Users,
      title: 'Android Workshop',
      event: 'ACM Student Chapter, VIT Chennai',
      description: 'Completed workshop on Android app development and built functional applications',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500',
    },
  ];

  return (
    <section id="extracurricular" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Extracurricular Activities
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Active participation in hackathons, competitions, and technical communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${achievement.iconBg} p-4 rounded-xl flex-shrink-0`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-600 font-semibold">{achievement.event}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Leadership & Community</h3>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Actively engaged in technical communities, contributing to peer learning, collaborative projects,
              and fostering innovation through hackathons and workshops.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-slate-300">Hackathons</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-green-400 mb-2">6+</div>
              <div className="text-slate-300">Certifications</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-orange-400 mb-2">3+</div>
              <div className="text-slate-300">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
