import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Footer from "./scenes/Footer";
import { useState, useEffect } from "react";
import LineGradient from "./components/LineGradient"
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)"); //checks the min width

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true); //checks where the position of y on the window
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      {/* The md refers to the tailwind config if you want to add a class above the breakpoint you can use it as a UseMediaQuery  */}
      <div className="w-5/6 mx-auto md:h-full"> 
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
          <Landing setSelectedPage={setSelectedPage}/>
        </div>
          <LineGradient/>
          <div className="w-5/6 mx-auto md:h-full">
            <MySkills/>
          </div>
          <LineGradient/>
          <div className="w-5/6 mx-auto">
            <Projects/>
          </div>
          <LineGradient/>
          <div className="w-5/6 mx-auto md:h-full">
        </div>
      <Footer/>
    </div>
  );
}

export default App;
