import React from "react";
import YTVideo from "../components/ytvideo";

export default function Experience() {
  return (
    <section id="experience">
      <div>
        <h1 class="heading">Experience</h1>
        {/* Automate the coding info in the future */}
        <h2>Techcodes Summer Camp</h2>
        <pre>
        I taught the basics of Python programming to middle schoolers across NYC
        Created original lesson plans and collaborated with other mentors to get students excited about and interested in programming
        </pre>
        <h1 class="heading">Hackathons</h1>
        <h2><a href="https://terminal.c1games.com/">TerminalC1Games</a> High School competition in 2022</h2>
        <p>I lost this, but I made a friend and the event was a lot of fun!</p>
        <h2>Code Overflow 2023 Hackathon</h2>
        <pre>
        A 48 hour hackathon where I made a game using Godot.
        </pre>
        <YTVideo src="https://www.youtube.com/embed/s38TT-4gmsc?si=fU0jBzPsCcdbVRP-">Youtube video</YTVideo>
        <h2>Girlswhocode Hackathon (2023)</h2>
        <pre>A hackathon that I think was three days long where me and my team made a website that let you upload plants to a server and had a cool UI.</pre>
        <a href="https://github.com/ZarmDev/plantcoppa">Github</a>
        <h2>Divergent Hackathon (2024)</h2>
        <pre>A hackathon where me and my team created a jeopardy/quiz style app using React-native</pre>
        <a href="https://github.com/ZarmDev/QuizPardy">QuizPardy</a>
      </div>
    </section>
  );
}