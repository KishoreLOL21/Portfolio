"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const About = () => {
  const cardsData = [
    {
      category: "Education",
      title: "Vellore Institute of Technology, Chennai",
      src: "https://images.unsplash.com/photo-1636231945376-3d40fdcbc462?w=600&auto=format&fit=crop&q=60",
      content: (
        <BackgroundGradient className="rounded-3xl bg-white hover:scale-[1.02] transition-transform duration-300">
          <div className="p-6 md:p-8">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <GraduationCap className="text-white" size={32} />
            </div>
            <div className="space-y-4 text-center">
              <p className="font-semibold text-slate-800 text-lg">
                BTech in Computer Science
              </p>
              <p className="text-blue-600 font-bold text-2xl">
                CGPA: 8.86/10
              </p>
              <p className="text-sm text-slate-500">
                Sep 2022 – June 2026
              </p>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      category: "Academic Excellence",
      title: "Outstanding Academic Performance",
      src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=60",
      content: (
        <BackgroundGradient className="rounded-3xl bg-white hover:scale-[1.02] transition-transform duration-300">
          <div className="p-6 md:p-8">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award className="text-white" size={32} />
            </div>
            <div className="space-y-6 text-center">
              <div>
                <p className="font-semibold text-slate-800">
                  Class 12 (Higher Secondary)
                </p>
                <p className="text-green-600 font-bold text-2xl">91.2%</p>
                <p className="text-sm text-slate-500">
                  SBOA School, May 2022
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  Class 10 (Secondary)
                </p>
                <p className="text-green-600 font-bold text-2xl">93%</p>
                <p className="text-sm text-slate-500">
                  SBOA School, May 2020
                </p>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      category: "Achievements",
      title: "Hackathons & Certifications",
      src: "https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?w=600&auto=format&fit=crop&q=60",
      content: (
        <BackgroundGradient className="rounded-3xl bg-white hover:scale-[1.02] transition-transform duration-300">
          <div className="p-6 md:p-8">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <BookOpen className="text-white" size={32} />
            </div>
            <ul className="space-y-3 text-slate-700 max-w-md mx-auto">
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                Top 20 Finalist – GEN AI Hackathon
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                3rd Place – DEFY25 Web3 Hackathon
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                Multiple Technical Certifications
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                Research Publication Experience
              </li>
            </ul>
          </div>
        </BackgroundGradient>
      ),
    },
  ];

  const cards = cardsData.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
      </div>

      {/* About Content with Aurora Background */}
      <BackgroundBeamsWithCollision>
      <AuroraBackground className="rounded-3xl mb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center py-16">
            <img
              src="/Pic.jpg"
              alt="Kishore S"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />

            <div className="space-y-6 text-lg text-slate-800">
              <p>
                I'm a passionate Computer Science student at VIT Chennai with a strong focus on full-stack development, AI/ML, and building innovative solutions. With hands-on experience in front-end development, data engineering, and research, I thrive on creating impactful applications that solve real-world problems.
              </p>
              <p>
                My journey includes developing enterprise-grade healthcare platforms, building intelligent AI assistants, and exploring quantum computing applications. I'm driven by curiosity and a commitment to continuous learning, having completed multiple certifications and participated in numerous hackathons.
              </p>
              <p>
                Beyond coding, I'm passionate about contributing to open-source projects, mentoring peers, and staying at the forefront of emerging technologies like Generative AI and Web3.
              </p>
            </div>
          </div>
        </div>
      </AuroraBackground>
      </BackgroundBeamsWithCollision>

      {/* Apple Cards Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-12">
          <h3 className="pb-12 text-center text-3xl md:text-4xl font-bold text-neutral-800">
            Academic Journey & Achievements
          </h3>
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default About;
