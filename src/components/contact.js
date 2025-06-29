import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>Email: <a href="mailto:vimlesh9512@gmail.com" className="text-blue-500">vimlesh9512@gmail.com</a></p>
      <div><span>GitHub:</span> <span><FaGithub /></span><span><a href="https://github.com/Vimleshkumari" className="text-blue-500">@Vimleshkumari</a></span> </div>
    </section>
  );
}