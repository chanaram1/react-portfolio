
import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div
      className="flex justify-center md:justify-start my-10 gap-7"
    >
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/achan02/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/chanaram1"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/github.png"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://docs.google.com/document/d/1vdPVWV1xzOQmv5pI23Qu_5AKgzTsDRP-ZoxyKbFDSg8/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="resume-link" src="../assets/resume.png"/>
      </a>
    </div>
  )
}

export default SocialMediaIcons