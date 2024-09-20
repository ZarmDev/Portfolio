import React from "react";
import Project from "../components/project";

import ardunioPic2 from '../assets/IMG_2037.jpg';
import racecar from '../assets/racecar.png'
import basketball_court from '../assets/basketball-court.png'
import floorplan from '../assets/myfloorplan.png'
import toytruck from '../assets/toytruck.png'
import puzzlecube from '../assets/cube.png'
import automata from '../assets/automata.png'
import basketball from '../assets/basketball.png'
import donut from '../assets/donut.png'
import monsterpic from '../assets/blenderscreenshot.png'

const projectsDictionary = {
  "OpenTransitApp": {
    description: "A react-native app that can download train data and render train lines. (Still developing)",
    link: "https://github.com/ZarmDev/OpenTransitApp"
  },
  "transitHelper": {
    description: "A library that simplifies getting MTA data",
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
        <h2>Web Dev Projects</h2>
        {/* Where projects are injected */}
        {projects}
        <br></br><br></br><br></br><br></br>
        <h2>Robotics?</h2>
        <h3>Using a moisture sensor and LCD display to light up the screen with moisture data</h3>
        <img src={ardunioPic2} alt="Ardunio with moisture sensor"></img>
        <h3>I also had a weather monitor (DHT11) with a LCD display but I didn't take a photo of it :/</h3>
        <h2>Autodesk Fusion 360 (DDP class 😭)</h2>
        <h3>Racecar</h3>
        <img src={racecar} alt="Racecar picture"></img>
        <p>Used a tutorial but it's original work</p>
        <h3>Basketball Court</h3>
        <img src={basketball_court} alt="Basketball court"></img>
        <p>Used a tutorial plus reskinning and I made the hoop</p>
        <h3>Floor Plan</h3>
        <img src={floorplan} alt="Floor plan"></img>
        <p>Made myself - very painful</p>
        <h3>Toy Truck</h3>
        <img src={toytruck} alt="Toy truck"></img>
        <p>Made using tutorial plus reskinning</p>
        <h3>Puzzle Cube</h3>
        <img src={puzzlecube} alt="Puzzle cube"></img>
        <p>Don't remember how it was made...</p>
        <h3>Basketball</h3>
        <img src={basketball} alt="Basketball"></img>
        <p>Using a tutorial + reskinning</p>
        <h3>Automata</h3>
        <img src={automata} alt="Automata"></img>
        <p>I'm not sure if I made this myself but it was for a group project</p>
        <h2>Blender</h2>
        <h3>Donut</h3>
        <img src={donut} alt="Donut"></img>
      </div>
    </section>
  );
}