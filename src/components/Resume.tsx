const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Resume
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
        <p className="text-lg text-slate-600 mb-8">
          Download a copy of my latest resume with detailed experience,
          projects, and achievements.
        </p>

        <a
          href="public\Kishore S SDE BTech CSE Core Resume.pdf" 
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
