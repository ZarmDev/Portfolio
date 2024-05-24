import React from "react";
import Project from "../components/project";

import ardunioPic1 from '../assets/IMG_0250.jpg';
import ardunioPic2 from '../assets/IMG_2037.jpg';

const projectsDictionary = {
  "To-Doz-React": {
    description: "A planner/to-do app I started before my freshman year of school started",
    link: "https://zarmdev.github.io/To-doz-React/"
  },
  "To-Doz-Backend": {
    description: "A self-hosted database for To-Doz-React. Still in early stages - supports rate-limiting, user account creation and authentication (using JWT tokens and hashing)",
    link: "https://github.com/ZarmDev/To-doz-Backend"
  },
  "Plant Coppa": {
    description: "A plant selling/buying website I made with my team in about one week (may take a while to load)",
    link: "https://plantcoppa.daniala5.repl.co/"
  },
  "2048 in pygame": {
    description: "A recreation of the game 2024 made with Python.",
    link: "https://github.com/ZarmDev/2048-in-pygame"
  },
  // "forcedark": {
  //   description: "A extension that forces dark mode on websites",
  //   link: "https://github.com/ZarmDev/forcedark"
  // },
  "Python-DB": {
    description: "A database I made for my AP CSP create task project. The program uses Tkinter GUI to allow you to interact with the database. It abstracts saving the database to a file and supports encrypting the keys of the database.",
    link: "https://github.com/ZarmDev/Python-DB"
  },
  "codingproblems": {
    description: "Coding practice for the USACO competition. I used C++, Python and (to a small extent) Java.",
    link: "https://github.com/ZarmDev/codingproblems"
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