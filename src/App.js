import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Experience from "./scenes/Experience";
import Projects from "./scenes/Projects";
import Footer from "./scenes/Footer";
import Certifications from "./scenes/Certifications";
import { useState, useEffect } from "react";
import LineGradient from "./components/LineGradient"
import Splash from "./scenes/Splash";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true); //checks where the position of y on the window
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <AnimatePresence>
      {showSplash ? (
        <Splash onEnter={() => setShowSplash(false)} />
      ) : (
        <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Experience/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
        <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
        <Certifications/>
      </div>
      <Footer/>
    </div>
      )}
    </AnimatePresence>

  );
}

export default App;
