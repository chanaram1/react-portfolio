import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden:{},
  visible: {
    transition: {staggerChildren:0.2}
  }
};

const projectVariant = {
  hidden: {opacity:0, scale:0.8}, //initial value for the child
  visible: {opacity:1, scale:1} //final value for the child
}


const Project = ({title, subtitle}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 
  transition duration-500 bg-grey z-30 flex flex-col justify-center 
  items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("").toLowerCase();
  
  return(
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.JPG`} alt={projectTitle}/>
    </motion.div>
  )
}


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* headings */}
      <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, y:-50},
            visible: {opacity:1, y:0},
        }}>
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-red">PROJ</span>ECTS
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-1/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            Here are some of my projects that I have completed. 
          </p>
        </motion.div>
    
        {/* projects */}
        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount:0.5}}
            variants={container}>
              {/* row 1 */}
              <Project title="Project 1" subtitle={"MERN (Mongoose Express.JS React Node.JS) Admin Dashboard."}/>
              <Project title="Project 2" subtitle={"Fully functioning Youtube Clone created with React."}/>
              <Project title="Project 3" subtitle={"Play rock, paper, scissors against AI with the help of HTML, CSS and JavaScript."}/>
              {/* row 2 */}
              <Project title="Project 4" subtitle={"Course Project: Single window bookstore application created with Java and JavaFX for OOP course."} />
              <Project title="Project 5" subtitle={"Webscraping application that provides information on a League of Legends champion using Python."}/>
              <Project title="Project 6" subtitle={"To-Do list created with HTMl, CSS and JavaScript."} />
          </motion.div>
        </div>
    
    </section>
  )
}
export default Projects