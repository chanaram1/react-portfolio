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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            WORK <span className="text-red">EXPERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I was fortunately able to complete three internships within my time
            at university. Throughout my experience, I was able grow and learn
            new things on the go as not everything that is taught in school will
            be used at the work place. This was pivotal to be on my feet, ask
            questions and not be afraid to seek answers from the other
            developers.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute 
            before:-top-10 before:-left-10 before:w-full
            before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">BMO</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Software Developer Intern
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Successfully spearheaded an initiative to enhance code reusability
            and testing efficiency across engineering teams by transforming
            redundant Python code into structured, shareable packages.
          </p>
        </motion.div>
        {/* soft skills*/}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">BMO</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Software Developer Intern
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Automated and standardized documentation workflows using Sphinx and
            Confluence Cloud API integration. This ensured real-time accuracy
            across all product pages, significantly boosting efficiency and data
            integrity.
          </p>
        </motion.div>
        {/* 3 */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">Napoleon</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Software Developer Intern
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Developed a customer-facing web dashboard
            using Python Flask, HTML, and CSS for thermostat data interaction
            and product development. Integrated interactive temperature graphs using Matplotlib,
            optimizing RESTful API calls to visualize complex device usage data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills