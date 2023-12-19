import React from "react";
import Project from "../components/project";

import ardunioPic1 from '../assets/IMG_0250.jpg';
import ardunioPic2 from '../assets/IMG_2037.jpg';

const projectsDictionary = {
  "To-Doz-React": {
    description: "A planner/to-do app I made before my freshman year of school started",
    link: "https://zarmdev.github.io/To-doz-React/"
  },
  "Plant Coppa": {
    description: "A plant selling/buying website I made with my team in one week (may take a while to load)",
    link: "https://plantcoppa.daniala5.repl.co/"
  },
  "Calculator React App": {
    description: "Just a calculator",
    link: "https://zarmdev.github.io/FCC4/"
  },
  "forcedark": {
    description: "A extension that forces dark mode on websites",
    link: "https://github.com/ZarmDev/forcedark"
  },
};

export default function Projects() {
  const projects = Object.keys(projectsDictionary).map((key) => {
    const project = projectsDictionary[key];
    return (
      <Project
        projectTitle={key}
        projectDescription={project.description}
        projectLink={project.link}
      />
    );
  });

  return (
    <section id="projects">
      <div>
        <h1 className="heading">Projects</h1>
        <h2>Real life projects</h2>
        <h3>Using a moisture sensor and LCD display to light up the screen with moisture data</h3>
        <img src={ardunioPic2} alt="Ardunio with moisture sensor"></img>
        <h3>I also had a weather monitor (DHT11) with a LCD display but I didn't take a photo of it :/</h3>
        <br></br><br></br><br></br><br></br>
        <h2>Web Dev Projects</h2>
        {/* Where projects are injected */}
        {projects}
      </div>
    </section>
  );
}