import React from "react";
import Project from "../components/project";

import ardunioPic1 from '../assets/IMG_0250.jpg';
import ardunioPic2 from '../assets/IMG_2037.jpg';

const projectsDictionary = {
  "To-Doz-React": {
    description: "A planner/to-do app I made before my freshman year of school started",
    link: "https://zarmdev.github.io/To-doz-React/"
  },
  "RudePassionateMicroBSD": {
    description: "A fun super smash bros inspired game in the browser, featuring dogs vs cats",
    link: "https://rudepassionatemicrobsd.zarmdev.repl.co/"
  },
  "Calculator App": {
    description: "Just a calculator",
    link: "https://zarmdev.github.io/FCC4/"
  },
  "Metrophobia - Chapter 1": {
    description: "My Roblox horror game series called Metrophobia",
    link: "https://www.roblox.com/games/10296378249/Metrophobia"
  },
  "Metrophobia - Chapter 2": {
    description: "My Roblox horror game series called Metrophobia",
    link: "https://www.roblox.com/games/10750671295/Metrophobia-Part2"
  },
  "Rain": {
    description: "CSS Rain",
    link: "https://rain.zarmdev.repl.co"
  },
  "Organization Time!": {
    description: "A platformer I made in Godot 4 during a 48 hour hackathon",
    link: "https://www.youtube.com/watch?v=s38TT-4gmsc&t=5s"
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
        <h3>Just some old photo I found using Ardunio</h3>
        <img src={ardunioPic1} alt="Random Ardunio picture"></img>
        <h3>Using a moisture sensor and LCD display to light up the screen with moisture data</h3>
        <img src={ardunioPic2} alt="Ardunio with moisture sensor"></img>
        <h3>I also had a weather monitor (DHT11) with a LCD display but I didn't take a photo of it :/</h3>
        <br></br><br></br><br></br><br></br>
        <h2>Projects made online!</h2>
        {/* Where projects are injected */}
        {projects}
      </div>
    </section>
  );
}