import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'
import { SiPython, SiAmazons3, SiConfluence, SiJira, SiMysql, SiFlask, SiSphinx } from 'react-icons/si';
import { FaRobot, FaChartBar, FaChartLine, FaLock, FaBox, FaTag, FaLink, FaRecycle, FaUserFriends, FaCheck, FaStopwatch, FaHandshake, FaExclamationTriangle, FaRegFileAlt, FaClock, FaDatabase } from 'react-icons/fa';

const Experience = () => {

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 60
      }
    })
  };

  return (
    <section id="experience" className="pt-10 pb-24">
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
        </motion.div>
      </div>
      {/* experience */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {/* Experience Card 1 */}
        <motion.div
          className="bg-white/10 dark:bg-gray-900/60 rounded-xl shadow-lg border-l-4 border-blue-400 p-6 transition-transform flex flex-col"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-2">
            <a href="https://www.linkedin.com/company/bank-of-montreal/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/bmo.jpeg" alt="BMO Logo" className="w-10 h-10 rounded-full object-cover mr-3 border border-blue-400 bg-white" />
            </a>
            <h3 className="text-2xl font-bold font-playfair">BMO</h3>
            <div className="ml-auto text-right">
              <span className="block text-xs text-gray-400">Jan 2025 – Apr 2025</span>
              <span className="block text-xs text-gray-400">Toronto, Ontario (Hybrid)</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-blue-400 mb-2">Software Developer Intern</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><SiPython className="mr-1" /> Python</span>
            <span className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"><SiAmazons3 className="mr-1" /> AWS S3</span>
            <span className="flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"><FaLock className="mr-1" /> SHA-256</span>
            <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded"><FaBox className="mr-1" /> Packaging</span>
            <span className="flex items-center bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded"><FaTag className="mr-1" /> Semantic Versioning</span>
            <span className="flex items-center bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"><FaLink className="mr-1" /> Dependency Management</span>
            <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded"><FaRecycle className="mr-1" /> Reusability</span>
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><FaUserFriends className="mr-1" /> Presentation</span>
            <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded"><FaCheck className="mr-1" /> Best Practices</span>
          </div>
          <p className="text-sm text-gray-200 mb-2">Successfully spearheaded an initiative to enhance code reusability and testing efficiency across engineering teams by transforming redundant Python code into structured, shareable packages.</p>
        </motion.div>
        {/* Experience Card 2 */}
        <motion.div
          className="bg-white/10 dark:bg-gray-900/60 rounded-xl shadow-lg border-l-4 border-pink-400 p-6 transition-transform flex flex-col"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-2">
            <a href="https://www.linkedin.com/company/bank-of-montreal/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/bmo.jpeg" alt="BMO Logo" className="w-10 h-10 rounded-full object-cover mr-3 border border-pink-400 bg-white" />
            </a>
            <h3 className="text-2xl font-bold font-playfair">BMO</h3>
            <div className="ml-auto text-right">
              <span className="block text-xs text-gray-400">May 2024 – Aug 2024</span>
              <span className="block text-xs text-gray-400">Toronto, Ontario (Hybrid)</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-pink-400 mb-2">Software Developer Intern</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><SiPython className="mr-1" /> Python</span>
            <span className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"><SiSphinx className="mr-1" /> Sphinx</span>
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><SiConfluence className="mr-1" /> Confluence</span>
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><SiJira className="mr-1" /> Jira</span>
            <span className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"><FaExclamationTriangle className="mr-1" /> Error Handling</span>
            <span className="flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"><FaRegFileAlt className="mr-1" /> Logging</span>
            <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded"><FaRobot className="mr-1" /> Automation</span>
            <span className="flex items-center bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"><FaStopwatch className="mr-1" /> Workflow</span>
            <span className="flex items-center bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded"><FaHandshake className="mr-1" /> Collaboration</span>
          </div>
          <p className="text-sm text-gray-200 mb-2">Automated and standardized documentation workflows using Sphinx and Confluence Cloud API integration. This ensured real-time accuracy across all product pages, significantly boosting efficiency and data integrity.</p>
        </motion.div>
        {/* Experience Card 3 */}
        <motion.div
          className="bg-white/10 dark:bg-gray-900/60 rounded-xl shadow-lg border-l-4 border-yellow-400 p-6 transition-transform flex flex-col"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-2">
            <a href="https://www.linkedin.com/company/napoleon-appliance-corporation-wolf-steel-limited/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/napoleon.jpeg" alt="Napoleon Logo" className="w-10 h-10 rounded-full object-cover mr-3 border border-yellow-400 bg-white" />
            </a>
            <h3 className="text-2xl font-bold font-playfair">Napoleon</h3>
            <div className="ml-auto text-right">
              <span className="block text-xs text-gray-400">May 2023 – Apr 2024</span>
              <span className="block text-xs text-gray-400">Barrie, Ontario (Hybrid)</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-yellow-400 mb-2">Software Developer Intern</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><SiPython className="mr-1" /> Python</span>
            <span className="flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"><SiFlask className="mr-1" /> Flask</span>
            <span className="flex items-center bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"><FaLink className="mr-1" /> REST API</span>
            <span className="flex items-center bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded"><FaChartBar className="mr-1" /> Matplotlib</span>
            <span className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"><SiMysql className="mr-1" /> MySQL</span>
            <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded"><FaChartBar className="mr-1" /> Data Viz</span>
            <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded"><FaRobot className="mr-1" /> Automation</span>
            <span className="flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"><FaClock className="mr-1" /> Cron Jobs</span>
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"><FaChartLine className="mr-1" /> Data Analysis</span>
            <span className="flex items-center bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"><FaDatabase className="mr-1" /> Database</span>
          </div>
          <p className="text-sm text-gray-200 mb-2">Developed a customer-facing web dashboard using Python Flask, HTML, and CSS for thermostat data interaction and product development. Integrated interactive temperature graphs using Matplotlib, optimizing RESTful API calls to visualize complex device usage data.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience