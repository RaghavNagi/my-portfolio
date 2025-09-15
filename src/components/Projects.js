import React from 'react';
import { ReactComponent as Reactjs } from "../utils/techs/react.svg";
import { ReactComponent as Nodejs } from "../utils/techs/node.svg";
import { ReactComponent as MySql } from "../utils/techs/mysql.svg";
import { ReactComponent as Tailwind } from "../utils/techs/tailwind.svg";
import { ReactComponent as Express } from "../utils/techs/express.svg";
import { ReactComponent as Html } from "../utils/techs/html.svg";
import { ReactComponent as Css } from "../utils/techs/css.svg";
import { ReactComponent as Python } from "../utils/techs/python.svg";

import vehicle from "../utils/projects/vehicle-ecom.jpeg";
import eballot from "../utils/projects/eballot.png";

// --- Data for your projects ---
const projectsData = [
  {
    title: 'Vehicle E-commerce',
    description:
      'A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process, built with the MERN stack.',
    image: vehicle,
    techStack: [Reactjs, Nodejs, Express, MySql, Tailwind],
    codeLink: 'https://github.com/Pranav78654/vehicle-ecom',
  },
  {
    title: 'E-Ballot',
    description:
      'A secure Python eBallot system enabling online voting, ensuring voter authentication, data integrity, confidentiality, and real-time result tallying.',
    image: eballot,
    techStack: [Html, Css, Python],
    codeLink: 'https://github.com/RaghavNagi/E-Ballot',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-[#212121] py-24 px-4 sm:px-8 md:px-12">
      {/* --- Section Title --- */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#eeeeee] mb-12">
        Projects
      </h2>

      {/* --- Projects Container --- */}
      <div className="flex flex-col gap-12 md:gap-16">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 bg-[#d3d2d2] rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.01] duration-300
              ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* --- Project Image --- */}
            <div className="w-full md:w-1/2 overflow-hidden">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-pointer transform hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>

            {/* --- Project Details --- */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>

              {/* --- Tech Stack --- */}
              <div className="flex flex-wrap gap-4 mb-6">
                {project.techStack.map((Tech, i) => (
                  <span
                    key={i}
                    className="flex items-center justify-center w-14 h-14 bg-white rounded-lg shadow-md"
                  >
                    {typeof Tech === 'string' ? (
                      Tech
                    ) : (
                      <Tech className="w-10 h-10" />
                    )}
                  </span>
                ))}
              </div>

              {/* --- Buttons --- */}
              <div className="flex gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#212121] text-[#eeeeee] px-5 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;