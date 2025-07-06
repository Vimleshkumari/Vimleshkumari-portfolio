const ProjectCard = ({ title, description, tech, demoLink, codeLink }) => (
  <div className="bg-white/40 backdrop-blur-md shadow-lg rounded-2xl p-6 mb-6 transition transform hover:scale-105 hover:shadow-2xl">
    <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">{title}</h3>
    <p className="text-gray-800 dark:text-gray-300 mb-2">{description}</p>
    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Tech: {tech}</p>
    <div className="flex gap-4">
      <a href={demoLink} target="_blank" className="text-green-700 hover:underline dark:text-green-400">Live Demo</a>
      <a href={codeLink} target="_blank" className="text-gray-700 hover:underline dark:text-gray-300">Code</a>
    </div>
  </div>
);

export default ProjectCard;