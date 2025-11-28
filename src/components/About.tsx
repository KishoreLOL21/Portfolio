"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const cardsData = [
    {
      category: "Education",
      title: "Vellore Institute of Technology, Chennai",
      src: "https://images.unsplash.com/photo-1636231945376-3d40fdcbc462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
      content: (
        <div className="p-6 md:p-8">
          <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <GraduationCap className="text-white" size={32} />
          </div>
          <div className="space-y-4 text-center">
            <p className="font-semibold text-slate-800 text-lg">BTech in Computer Science</p>
            <p className="text-blue-600 font-bold text-2xl">CGPA: 8.84/10</p>
            <p className="text-sm text-slate-500">Sep 2022 - June 2026</p>
          </div>
        </div>
      ),
    },
    {
      category: "Academic Excellence",
      title: "Outstanding Academic Performance",
      src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWR1Y2F0aW9ufGVufDB8fDB8fHww",
      content: (
        <div className="p-6 md:p-8">
          <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Award className="text-white" size={32} />
          </div>
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <p className="font-semibold text-slate-800">Class 12 (Higher Secondary)</p>
              <p className="text-green-600 font-bold text-2xl">91.2%</p>
              <p className="text-sm text-slate-500">SBOA School and Junior College, May 2022</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-800">Class 10 (Secondary)</p>
              <p className="text-green-600 font-bold text-2xl">93%</p>
              <p className="text-sm text-slate-500">SBOA School and Junior College, May 2020</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "Achievements",
      title: "Hackathons & Certifications",
      src: "https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGFja2F0aG9uc3xlbnwwfHwwfHx8MA%3D%3D",
      content: (
        <div className="p-6 md:p-8">
          <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <BookOpen className="text-white" size={32} />
          </div>
          <ul className="space-y-3 text-left text-slate-700 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold text-lg">•</span>
              <span>Top 20 Finalist - GEN AI Hackathon</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold text-lg">•</span>
              <span>3rd Place - DEFY25 Web3 Hackathon</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold text-lg">•</span>
              <span>Multiple Technical Certifications</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold text-lg">•</span>
              <span>Research Publication Experience</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const cards = cardsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/Pic.jpg"
              alt="Kishore S"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
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

        {/* Apple Cards Carousel */}
        <div className="w-full py-12">
          <h3 className="max-w-4xl mx-auto pb-12 text-center text-3xl md:text-4xl font-bold text-neutral-800 font-sans">
            Academic Journey & Achievements
          </h3>
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default About;
