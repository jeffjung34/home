import React from 'react';
import projectsData from '../content/projects.json';

const Projects = () => {
  const { projects, introduction } = projectsData;

  return (
    <div id="projects" className="p-8 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">Projects</h2>
      <p className="mb-6 text-lg text-gray-900 dark:text-gray-100 text-center">
        {introduction}{" "}
        <a href="https://github.com/jeffjung34" target="_blank" rel="noopener noreferrer" className="underline">
        {"here"}
        </a>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full h-64 flex flex-col justify-start p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transform hover:-translate-y-1 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-2 italic">{project.techStack}</p>
            <p className="text-base">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
