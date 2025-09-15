import React from 'react';
import codingblocks from "../utils/codingblocks.jpeg";
import gyansys from "../utils/gyansys.png";

// data
const experienceData = [
  {
    title: 'Organizing Executive',
    company: 'Coding Blocks CUIET Chapter',
    logo: codingblocks,
    dates: 'Feb 2024 - Aug 2024',
    description: [
      'Planned and coordinated technical events, workshops, and codding sessions.',
      'Managed logistics, scheduling, and resource allocation for smooth execution.',
    ],
  },
  {
    title: 'Discipline Head',
    company: 'Coding Blocks CUIET Chapter',
    logo: codingblocks,
    dates: 'Aug 2024 - May 2025',
    description: [
      'Enforce chapter policies and maintained discipline to ensure a professional and respectful environment.',
      'Resolve Conflicts and addressed disciplinary concerns, for a productive and positive team culture.',
      'Played a key role in Organizing structured activities while maintaining order and efficiency within the chapter.'
    ],
  },{
    title:'Software Developer Intern',
    company:'GyanSys',
    logo: gyansys,
    dates: 'Jan 2026 - Ongoing',
    description: [
        'Coming Soon..'
    ]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="bg-[#212121] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16">
        Work Experience
      </h2>

      {/* --- Timeline Container --- */}
      <div className="relative container mx-auto">
        {/* The Vertical Line */}
        <div className="absolute h-full w-0.5 bg-gray-600 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

        {/* --- Map over experiences --- */}
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full
              ${index % 2 === 0 ? 'md:flex-row-reverse md:left-timeline' : 'md:right-timeline'}`}
          >
            {/* Spacer (desktop only) */}
            <div className="hidden md:block order-1 w-5/12"></div>

            {/* --- The Dot on the timeline --- */}
            <div className="z-20 flex items-center order-1 bg-[#eeeeee] shadow-xl w-6 h-6 rounded-full mb-4 md:mb-0"></div>

            {/* --- The Card --- */}
            <div className="order-1 w-full md:w-5/12 bg-[#eeeeee] rounded-lg shadow-lg px-6 py-4">
              <div className="flex items-center gap-4 mb-2">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-10 h-10 p-1 bg-white rounded-full shadow-md" />
                <div>
                  <h3 className="font-bold text-[#212121] text-lg sm:text-xl">{exp.title}</h3>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">{exp.company}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900 mb-4">{exp.dates}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;