const skills = ["React", "JavaScript", "Typescript", "HTML5", "CSS3", "Redux", "TailwindCSS", "bitBucket", "Hooks", "Contextapi", "Restapi"];
const tools = ["Redux Toolkit", "Webpack", "Git", "Jira", "BitBucket"]

export default function Skills() {
  return (
    <>
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
    <section className="my-6">
      <h2 className="text-2xl font-semibold mb-2">Tools</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span key={index} className="bg-blue-100 px-3 py-1 rounded-full text-sm">
            {tool}
          </span>
        ))}
      </div>
    </section>
    </>
  );
}