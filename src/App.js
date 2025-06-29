import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 flex justify-center flex-col bg-gray-800/40">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
