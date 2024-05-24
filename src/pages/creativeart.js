import React from "react";

import ela from '../assets/ela.mkv';
import blenderscreenshot from '../assets/blenderscreenshot.png'
import Project from "../components/project";

const projectsDictionary = {
  "Cats vs Dogs (browser game)": {
    description: "A fun super smash bros inspired game in the browser, featuring dogs vs cats. Takes a long time to load because of the repl needs to wake up.",
    link: "https://github.com/ZarmDev/RudePassionateMicrobsd"
  },
  "Metrophobia - Chapter 1": {
    description: "My Roblox horror game series called Metrophobia",
    link: "https://www.roblox.com/games/10296378249/Metrophobia"
  },
  "Metrophobia - Chapter 2": {
    description: "My Roblox horror game series called Metrophobia",
    link: "https://www.roblox.com/games/10750671295/Metrophobia-Part2"
  },
  "2048 in Pygame": {
    description: "2048 recreated in pygame! Did it for my AP computer science class.",
    link: "https://replit.com/@daniala5/2048?v=1"
  },
};

export default function CreativeArt() {
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
    <section id="creativeart">
      <div>
        <h1 class="heading">Game Design Experience</h1>
        {projects}
        <h2>A youtube video with most of my notable Scatch projects</h2>
        <p>(Unavailable right now, reuploading soon)</p>
        <h2>A story game I made in Godot 4</h2>
        <video width="520" height="360" controls>
            <source src={ela}></source>
        </video> <br></br>
        <h2>A FNF Engine I made in Godot 4</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rnrrxefu_sY?si=PF0odN2TZ4cYxQ85" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>Organization time - something I made for a game jam in 48 hours</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/s38TT-4gmsc?si=qfDfuuojGODALrK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>Using blender for the first time! (lol amazing art...)</h2>
        <img src={blenderscreenshot}></img>
        </div>
    </section>
  );
}