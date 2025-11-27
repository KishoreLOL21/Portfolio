import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

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
