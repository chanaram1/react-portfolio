import React from 'react';
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'AWS Educate Getting Started with Databases',
    img: '/assets/aws-badge-getting-started-with-databases.png',
    link: 'https://www.credly.com/badges/0cef7aa9-5a20-491a-bbe5-342ca0269737',
  },
  {
    name: 'AWS Educate Getting Started with Serverless',
    img: '/assets/aws-badge-getting-started-with-serverless.png',
    link: 'https://www.credly.com/badges/a6334c9d-bf59-4c11-a631-d42efbe2dac4',
  },
  {
    name: 'AWS Educate Getting Started with Cloud Ops',
    img: '/assets/aws-badge-getting-started-with-cloud-operations.png',
    link: 'https://www.credly.com/badges/386b8828-1d1f-48fe-963e-9a8bc1b62c62',
  },
  {
    name: 'AWS Educate Getting Started with Compute',
    img: '/assets/aws-badge-getting-started-with-compute.png',
    link: 'https://www.credly.com/badges/05e48778-0d3b-4a32-b364-8bb58b2a4c90',
  },
  {
    name: 'AWS Educate Getting Started with Storage',
    img: '/assets/aws-badge-getting-started-with-storage.png',
    link: 'https://www.credly.com/badges/41021927-6b48-4747-830a-96de7461aaa3',
  },
  {
    name: 'AWS Educate Introduction to Cloud 101',
    img: '/assets/aws-badge-cloud-computing-101.png',
    link: 'https://www.credly.com/badges/e1e449c2-f83a-40af-b344-310b3600bcef',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 60 } },
};

const Certifications = () => (
  <section id="certifications" className="pt-16 pb-24">
    <p className="font-playfair font-semibold text-4xl mb-5 text-white">
      <span className="text-red">CERTIFICATIONS</span>
    </p>
    <LineGradient width="w-1/3" />
    <motion.div
      className="grid md:grid-cols-3 gap-6 mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {certifications.map((cert) => (
        <motion.a
          key={cert.name}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform"
          variants={cardVariants}
        >
          <img src={cert.img} alt={cert.name} className="w-16 h-16 mb-2" />
          <h3 className="font-semibold text-lg text-white text-center">{cert.name}</h3>
          <p className="text-xs text-gray-400 text-center">Amazon Web Services Training and Certification</p>
          {cert.date && <p className="text-xs text-gray-400 text-center">{cert.date}</p>}
        </motion.a>
      ))}
    </motion.div>
  </section>
);

export default Certifications; 