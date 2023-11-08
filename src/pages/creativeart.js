import React from "react";

import ela from '../assets/ela.mkv';
import blenderscreenshot from '../assets/blenderscreenshot.png'

export default function CreativeArt() {
  return (
    <section id="creativeart">
      <div>
        <h1 class="heading">Creative Art</h1>
        <h2>A youtube video with many of my notable Scatch projects</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c4rM13jDjAw?si=Dm8fau8d3BPAJtA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>A project I made for ELA</h2>
        <video width="520" height="360" controls>
            <source src={ela}></source>
        </video>
        <h2>My horror game saga - Metrophobia!</h2>
        <p>
            These were some really fun projects to work on! <br></br>
            Probably my best games I've made so far.
        </p>
        <a className="biggerLink" href="https://www.roblox.com/games/10296378249/Metrophobia">Metrophobia</a> <br></br>
        <a className="biggerLink" href="https://www.roblox.com/games/10750671295/Metrophobia-Part2">Metrophobia Part 2</a>
        <h2>A FNF Engine I made in Godot 4</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rnrrxefu_sY?si=PF0odN2TZ4cYxQ85" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>Organization time - something I made for a game jam in 48 hours</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/s38TT-4gmsc?si=qfDfuuojGODALrK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>My first devlog</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A5aysX53TNI?si=CcwykLx9--NPjAFl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>My blender model for a Roblox monster</h2>
        <img src={blenderscreenshot}></img>
        </div>
    </section>
  );
}