// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
// import Service from "./components/Services";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: `linear-gradient(to right, ${theme.from},${theme.to})`,
      }}
    >
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
