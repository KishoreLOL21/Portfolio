import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-slate-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <circle cx="10%" cy="20%" r="2" fill="rgba(59, 130, 246, 0.5)" filter="url(#glow)" className="animate-pulse-glow" />
          <circle cx="90%" cy="30%" r="1.5" fill="rgba(34, 197, 94, 0.4)" filter="url(#glow)" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <circle cx="20%" cy="80%" r="2" fill="rgba(6, 182, 212, 0.3)" filter="url(#glow)" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <circle cx="85%" cy="75%" r="1.5" fill="rgba(59, 130, 246, 0.4)" filter="url(#glow)" className="animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <circle cx="15%" cy="50%" r="1" fill="rgba(34, 197, 94, 0.3)" filter="url(#glow)" className="animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <circle cx="80%" cy="50%" r="1.5" fill="rgba(6, 182, 212, 0.4)" filter="url(#glow)" className="animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        </svg>

        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-drift" style={{ animationDelay: '0s', opacity: 0.6 }}></div>
        <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-drift" style={{ animationDelay: '1s', opacity: 0.4 }}></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-drift" style={{ animationDelay: '2s', opacity: 0.5 }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-drift" style={{ animationDelay: '3s', opacity: 0.4 }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8 inline-block">
          <img
            src="/Profile.png.png"
            alt="Kishore S"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
          Kishore S
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          Computer Science Engineer | Full Stack Developer | AI/ML Enthusiast
        </p>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          BTech in Computer Science and Engineering at VIT Chennai | CGPA: 8.84
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <a href="tel:+917092112200" className="hover:text-blue-400 transition-colors">
              +91 7092112200
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a href="mailto:kishorespms@gmail.com" className="hover:text-blue-400 transition-colors">
              kishorespms@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/kishorespks"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/kishoreLOL21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:kishorespms@gmail.com"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore My Work
          <ExternalLink size={18} />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
