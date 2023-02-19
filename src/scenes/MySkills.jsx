import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0},
        }}>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3"/>
          <p className="mt-10 mb-7">
            Here is a quick summary of my skills. I continue to practice these skills through course material, labs, and personal projects. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
            className="relative z-0 ml-20 before:absolute 
            before:-top-10 before:-left-10 before:w-full
            before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img alt="skills" className="z-10" src="assets/skills-image.png"/>
          </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png"/>
          )}

        </div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* softskills */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, y:50},
            visible: {opacity:1, y:0},
        }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Technical Skills</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            Proficient scripting languages such as JavaScript and Python. Also have database experience and knowledge with SQL, OracleDB and MongoDB. Furthermore, I enjoy the fullstack development with different technologies such as HTML, CSS and React.
          </p>
        </motion.div>
        {/* soft skills*/}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
            hidden: {opacity:0, y:50},
            visible: {opacity:1, y:0},
        }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Soft Skills</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            Excellent communication skills trained through work experience and school projects. Problem-solving skills by being able to breakdown big tasks into smaller components to complete efficiently and effectly. Ability to accept both good and bad feedback either because the only way to grow as a developer is to be critical.  
          </p>
        </motion.div>
        {/* 3 */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{delay:0.4,duration:0.5}}
          variants={{
            hidden: {opacity:0, y:50},
            visible: {opacity:1, y:0},
        }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
          </div>
          <p className="mt-5">
            I have been able to put these vairety of skills to use through labs, course projects and personal projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills