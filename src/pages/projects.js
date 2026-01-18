import React from "react";
import ToDozReact from "../assets/projects/to-doz-react.jpg"
import Calculator from "../assets/projects/calculator.jpg"
import BTHSHub from "../assets/projects/bthshub.jpg"
import BTHSHubServer from "../assets/projects/bthshubserver.jpg"
import QuizPardy from "../assets/projects/quizpardy.jpg"
import TherapyOutside from '../assets/projects/therapyoutsideapp.jpg'

const projectsDictionary = {
  "BTHSHub-App": {
    description: "A React Native app that allows you to easily view your schedule, see clubs and events.",
    github: "https://github.com/ZarmDev/BTHSHub-App",
    languages: ["react", "javascript"],
    screenshot: BTHSHub
  },
  "QuizPardy": {
    description: "A React Native app built in one week for a hackathon. Features multiplayer, editable quizzes, pre-created quizzes, and save/load functionality.",
    github: "https://github.com/ZarmDev/QuizPardy",
    languages: ["react", "javascript"],
    screenshot: QuizPardy
  },
  "TherapyOutside": {
    description: "A mobile app designed to help users find parks and locate or create social events",
    github: "https://github.com/ZarmDev/TherapyOutsideApp",
    languages: ["javascript", "reactnative"],
    screenshot: TherapyOutside
  },
  "BTHSHub-Server": {
    description: "A C++ server for BTHSHub, based on my HTTP Server project. Handles data for schedules, clubs, and school events.",
    github: "https://github.com/ZarmDev/BTHSHub-Server",
    languages: ["cplusplus"],
    screenshot: BTHSHubServer
  },
  "Java Book Store App": {
    description: "A desktop application using Java and ImGui. Supports searching books by title, author or ISBN, adjusting quantities, and checking out to users.",
    github: "https://github.com/ZarmDev/java-bookstore-gui",
    languages: ["java"],
    youtube: "nUYSZhL881Q"
  },
  "OpenTransitApp": {
    description: "A react-native app that can download train data and render train lines.",
    github: "https://github.com/ZarmDev/OpenTransitApp",
    youtube: "UgRTvp03LZ8",
    languages: ["react", "javascript"]
  },
  "transitHelper": {
    description: "A library that simplifies getting MTA data. My most challenging and technical project.",
    github: "https://github.com/ZarmDev/transitHelper",
    youtube: "l5dZ0KE7I4Q",
    languages: ["javascript", "nodejs"]
  },
  "To-Doz-React": {
    description: "A planner/to-do app I started before my freshman year of school started",
    github: "https://github.com/ZarmDev/To-doz-React",
    demo: "https://zarmdev.github.io/To-doz-React/",
    screenshot: ToDozReact,
    languages: ["react", "javascript"]
  },
  // "Plant Coppa": {
  //   description: "A plant selling/buying website my team made in about one week (may take a while to load)",
  //   github: "https://github.com/ZarmDev/plantcoppa",
  //   languages: ["html5", "css3", "javascript"]
  // },
  // "Python-DB": {
  //   description: "A database with a Tkinter GUI to allow you to interact with the database.",
  //   github: "https://github.com/ZarmDev/Python-DB",
  //   languages: ["python"]
  // },
  "React Calculator": {
    description: "Calculator made as a part of the Freecodecamp Front-end Track",
    github: "https://github.com/ZarmDev/FCC4",
    screenshot: Calculator,
    languages: ["react", "javascript"]
  },
  "HTTP Server": {
    description: "An HTTP server from scratch in C++ using the Linux manual and CodeCrafters. Supports malformed request rejection, middleware, GET/POST routes and CORS.",
    github: "https://github.com/ZarmDev/http-server-cpp",
    languages: ["cplusplus"]
  },
  "Powerhouse-lang": {
    description: "An interpreted programming language in C++ supporting custom methods, string/integer concatenation, and parentheses parsing. Uses single-pass execution instead of tokenization.",
    github: "https://github.com/ZarmDev/powerhouse-lang",
    languages: ["cplusplus"]
  },
  "To-Doz-Backend": {
    description: "A self-hosted database for To-Doz-React. Still in early stages - supports rate-limiting, user account creation and authentication (using JWT tokens and hashing)",
    github: "https://github.com/ZarmDev/To-doz-Backend",
    languages: ["nodejs", "express", "mongodb"]
  },
  // "socket-game": {
  //   description: "Just a multiplayer p5.js server",
  //   github: "https://github.com/ZarmDev/socket-game",
  //   languages: ["javascript", "nodejs"]
  // }
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="heading">Featured Projects</h1>
        <div className="projects-grid">
          {Object.keys(projectsDictionary).map((key) => {
            const project = projectsDictionary[key];
            const thumbnailUrl = project.youtube
              ? `https://img.youtube.com/vi/${project.youtube}/maxresdefault.jpg`
              : "https://via.placeholder.com/640x360/1a1a1a/ffffff?text=No+Preview";

            return (
              <div key={key} className="project-card">
                <div className="project-header" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <h3>{key}</h3>
                  <div className="project-links">
                    {project.languages && (
                      <div style={{ display: "flex", gap: "8px" }}>
                        {project.languages.map((lang) => (
                          <img
                            key={lang}
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang}/${lang}-original.svg`}
                            alt={lang}
                            style={{ width: "24px", height: "24px" }}
                            title={lang}
                          />
                        ))}
                      </div>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {project.youtube ? (
                  <a href={`https://www.youtube.com/watch?v=${project.youtube}`} target="_blank" rel="noopener noreferrer" className="thumbnail-link">
                    <img src={thumbnailUrl} alt={key} className="project-thumbnail" />
                    <div className="play-button">▶</div>
                  </a>
                ) : <></>}

                {project.screenshot ? (
                  <img src={project.screenshot} className="project-thumbnail"></img>
                ) : <></>}

                <p className="project-description">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}