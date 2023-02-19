import AnchorLink from "react-anchor-link-smooth-scroll";


const DotGroup = ({selectedPage, setSelectedPage}) => {
  //set the main class to relative
  //with the before tag we are using css to treat the anchor tag as a parent class
  //this will allow us to be able to put something above or below the anchorlink tag
  const selectedStyles = `relative bg-yellow before:absolute
  before:w-6 before:h-6 
  before:rounded-full before:border-2
  before:border-yellow before:left-[-50%]
  before:top-[-50%]
  `;


  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink //change the text to yellow else keep it white
      className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
      href="home"
      onClick={() => setSelectedPage("home")} //this will change the state ex if they click project the state in app.js will become project
      />
      <AnchorLink //change the text to yellow else keep it white
      className={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
      href="skills"
      onClick={() => setSelectedPage("skills")} //this will change the state ex if they click project the state in app.js will become project
      />
      <AnchorLink //change the text to yellow else keep it white
      className={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
      href="projects"
      onClick={() => setSelectedPage("projects")} //this will change the state ex if they click project the state in app.js will become project
      />
      <AnchorLink //change the text to yellow else keep it white
      className={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
      href="contact"
      onClick={() => setSelectedPage("contact")} //this will change the state ex if they click project the state in app.js will become project
      />
    </div>
  )
}

export default DotGroup;