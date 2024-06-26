import Header from "./components/Header";
import Hero from "./components/Hero";
import Passion from "./components/Passion";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { Element } from "react-scroll"; //react scroll package

function App() {
  return (
    <div className="bg-black font-newOne">
      <Header />
      <Element name="hero" />
      <Hero />
      <Element name="passion" />
      <Passion />
      <Element name="work" />
      <Work />
      <Element name="skills" />
      <Skills />
      <Element name="resume" />
      <Resume />
      <Element name="footer" />
      <Footer />
    </div>
  );
}

export default App;
