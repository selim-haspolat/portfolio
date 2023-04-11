import { useState } from "react";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [cursorHover, setCursorHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <div className="absolute bg-[rgb(30,30,30)] w-full min-h-screen text-white overflow-hidden cursor-none ">
      <Navbar setCursorHover={setCursorHover} />
      <Hero setCursorHover={setCursorHover} />
      <Skills setSkillsHover={setSkillsHover} />
      <Contact setContactHover={setContactHover} />
      <Footer setContactHover={setContactHover}/>
      <Cursor
        cursorHover={cursorHover}
        skillsHover={skillsHover}
        contactHover={contactHover}
      />
    </div>
  );
}

export default App;
