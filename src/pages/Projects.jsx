import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'ToDo List',
    description: 'Manage your tasks effectively with this simple ToDo app.',
    tech: 'React, TailwindCSS',
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Basic Calculator',
    description: 'A simple calculator for basic arithmetic operations.',
    tech: 'React, CSS',
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Weather Forecast App',
    description: 'Displays 7-day weather forecast for any city.',
    tech: 'React, API, TailwindCSS',
    demoLink: '#',
    codeLink: '#'
  }
];

const Projects = () => (
  <div className="max-w-4xl mx-auto mt-10">
    <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

export default Projects;