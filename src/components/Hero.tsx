import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "motion/react";

const Hero = () => {
  const words =
    " Computer Science Engineer | Full Stack Developer | AI/ML Enthusiast";
  const images = [
    "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fElubm92YXRpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const dockItems = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/kishorespks",
      icon: <Linkedin className="h-full w-full text-sky-400" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/kishoreLOL21",
      icon: <Github className="h-full w-full text-slate-100" />,
    },
    {
      title: "Email",
      href: "mailto:kishorespms@gmail.com",
      icon: <Mail className="h-full w-full text-emerald-300" />,
    },
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <section
          id="home"
          className="relative flex items-center justify-center text-white overflow-hidden min-h-[40rem]"
        >
          {/* Main content with Vortex background */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
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
              <TextGenerateEffect
                words={words}
                className="text-white text-lg md:text-2xl"
              />
            </p>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              BTech in Computer Science and Engineering at VIT Chennai | CGPA:
              8.84
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href="tel:+917092112200"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 7092112200
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a
                  href="mailto:kishorespms@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  kishorespms@gmail.com
                </a>
              </div>
            </div>

            {/* Floating Dock with transparent background and visible icons */}
            <div className="mt-4 flex items-center justify-center w-full">
              <FloatingDock
                items={dockItems}
                mobileClassName="translate-y-4"
                desktopClassName="bg-transparent shadow-none border-none"
              />
            </div>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
              <ExternalLink size={18} />
            </a>
          </div>

          {/* scroll indicator ... keep existing */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
