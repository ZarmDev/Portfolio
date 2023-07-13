import React from "react";
import Project from "../components/project";

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <h1 class="heading">Projects</h1>
        <Project projectTitle="To-Doz-React" projectDescription="A planner/to-do app I made before my freshman year of school started" projectLink="https://zarmdev.github.io/To-doz-React/"></Project>
        <Project projectTitle="RudePassionateMicroBSD" projectDescription="A fun super smash bros inspired game in the browser, featuring dogs vs cats" projectLink="https://rudepassionatemicrobsd.zarmdev.repl.co/"></Project>
        <Project projectTitle="Calculator App" projectDescription="Just a calculator" projectLink="https://zarmdev.github.io/FCC4/"></Project>
        <Project projectTitle="Windows 11 Clone" projectDescription="A windows 11 clone" projectLink="https://zarmdev.github.io/Windows11/index.html"></Project>
        <Project projectTitle="Rain" projectDescription="CSS Rain" projectLink="https://rain.zarmdev.repl.co"></Project>
        <Project projectTitle="Organization Time!" projectDescription="A platformer I made in Godot 4 during a 48 hour hackathon" projectLink="https://www.youtube.com/watch?v=s38TT-4gmsc&t=5s"></Project>
      </div>
    </section>
  );
}