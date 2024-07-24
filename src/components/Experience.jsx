import React from 'react';
import experiencesData from '../content/experiences.json';
import { ComputerDesktopIcon, FlagIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const Experience = () => {
  const { experiences } = experiencesData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'army':
        return <FlagIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />;
      case 'computer':
        return <ComputerDesktopIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />;
      case "math":
        return <AcademicCapIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />;
      default:
        return <ComputerDesktopIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />;
    }
  };

  return (
    <div id="experience" className="p-8 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">Experience</h2>
      <div className="w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-8 pl-10 flex flex-col md:flex-row items-start">
            <div className="absolute left-0 top-0 flex items-center justify-center h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-full">
              {getIcon(exp.icon)}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.startDate} - {exp.endDate}</h3>
              <h4 className="text-lg text-gray-700 dark:text-gray-300">{exp.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
              <p className="text-gray-900 dark:text-gray-100">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
