import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Extracurricular />
      <Resume />   
      <Contact />
    </div>
  );
}

export default App;
