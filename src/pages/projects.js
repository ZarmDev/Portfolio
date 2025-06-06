import React from "react";
import Project from "../components/project";

const projectsDictionary = {
  "OpenTransitApp": {
    description: "A react-native app that can download train data and render train lines.",
    link: "https://github.com/ZarmDev/OpenTransitApp"
  },
  "transitHelper": {
    description: "A library that simplifies getting MTA data. My most challenging and technical project.",
    link: "https://github.com/ZarmDev/transitHelper"
  },
  "To-Doz-React": {
    description: "A planner/to-do app I started before my freshman year of school started",
    link: "https://zarmdev.github.io/To-doz-React/"
  },
  "To-Doz-Backend": {
    description: "A self-hosted database for To-Doz-React. Still in early stages - supports rate-limiting, user account creation and authentication (using JWT tokens and hashing)",
    link: "https://github.com/ZarmDev/To-doz-Backend"
  },
  "Plant Coppa": {
    description: "A plant selling/buying website my team made in about one week (may take a while to load)",
    link: "https://github.com/ZarmDev/plantcoppa"
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
    description: "Coding practice for the USACO competition. I used (some) C++ and Python",
    link: "https://github.com/ZarmDev/codingproblems"
  },
  "React Calculator": {
    description: "Made as part of the Freecodecamp Front-end Track",
    link: "https://github.com/ZarmDev/FCC4"
  },
  "socket-game": {
    description: "Just a multiplayer p5.js server",
    link: "https://github.com/ZarmDev/socket-game"
  }
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
        {/* Where projects are injected */}
        {projects}
      </div>
    </section>
  );
}