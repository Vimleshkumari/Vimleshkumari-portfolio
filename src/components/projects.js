import React from "react";

const projects = [
    { name: "Accordion", link: "https://github.com/Vimleshkumari/Accordian/blob/main/accordian" },
    { name: "To-Do List", link: "https://github.com/Vimleshkumari/DialyToDoList/tree/main/todolist" },
];

export default function Projects() {
    return (
        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-6">
                {projects.map((proj, index) => (
                    <li key={index}>
                        <a href={proj.link} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                            {proj.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}