import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/Pic.jpg"
              alt="Kishore S"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate Computer Science student at VIT Chennai with a strong focus on full-stack development,
              AI/ML, and building innovative solutions. With hands-on experience in front-end development, data engineering,
              and research, I thrive on creating impactful applications that solve real-world problems.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              My journey includes developing enterprise-grade healthcare platforms, building intelligent AI assistants,
              and exploring quantum computing applications. I'm driven by curiosity and a commitment to continuous learning,
              having completed multiple certifications and participated in numerous hackathons.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Beyond coding, I'm passionate about contributing to open-source projects, mentoring peers, and staying
              at the forefront of emerging technologies like Generative AI and Web3.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800">Vellore Institute of Technology, Chennai</p>
                <p className="text-slate-600">BTech in Computer Science</p>
                <p className="text-blue-600 font-semibold">CGPA: 8.84/10</p>
                <p className="text-sm text-slate-500">Sep 2022 - June 2026</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Academic Excellence</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800">Class 12 (Higher Secondary)</p>
                <p className="text-green-600 font-semibold">91.2%</p>
                <p className="text-sm text-slate-500">SBOA School, May 2022</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Class 10 (Secondary)</p>
                <p className="text-green-600 font-semibold">93%</p>
                <p className="text-sm text-slate-500">SBOA School, May 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Achievements</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Top 20 Finalist - GEN AI Hackathon</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>3rd Place - DEFY25 Web3 Hackathon</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Multiple Technical Certifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>Research Publication Experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
