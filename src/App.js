import "./App.css";
import AboutMe from "./components/AboutMe";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="bg-slate-800 text-white">
      <div className="container relative z-30 mx-auto sm:px-20 px-10">
        <div id="intro">
          <IntroSection />
        </div>
        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
      <div id="socials">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
