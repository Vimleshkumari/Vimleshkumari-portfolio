import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'ToDo List',
    description: 'Manage your tasks effectively with this simple ToDo app.',
    tech: 'React, TailwindCSS',
    demoLink: 'https://your-live-demo-link.com/todo',
    codeLink: 'https://github.com/yourgithub/todo-app',
  },
  {
    title: 'Basic Calculator',
    description: 'A simple calculator for basic arithmetic operations.',
    tech: 'React, CSS',
    demoLink: 'https://your-live-demo-link.com/calculator',
    codeLink: 'https://github.com/yourgithub/calculator',
  },
  {
    title: 'Weather Forecast App',
    description: 'Displays 7-day weather forecast for any city.',
    tech: 'React, API, TailwindCSS',
    demoLink: 'https://your-live-demo-link.com/weather',
    codeLink: 'https://github.com/yourgithub/weather-app',
  },
];

const Dashboard = () => (
  <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 backdrop-blur-md">
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-4">About Me</h2>
      <p className="text-center text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
        I'm Vimlesh Kumari, a frontend developer skilled in JavaScript, ReactJS, and TailwindCSS. I enjoy building interactive, responsive web applications.
      </p>
      <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
        <p>Email: vimlesh@example.com | Phone: +91-9876543210</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 dark:text-blue-400">linkedin.com/in/yourprofile</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/yourgithub" className="text-blue-600 dark:text-blue-400">github.com/yourgithub</a>
        </p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-6 text-indigo-700 dark:text-indigo-300">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  </div>
);

export default Dashboard;
