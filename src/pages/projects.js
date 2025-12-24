import React from "react";

const projectsDictionary = {
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
    languages: ["react", "javascript"]
  },
  "To-Doz-Backend": {
    description: "A self-hosted database for To-Doz-React. Still in early stages - supports rate-limiting, user account creation and authentication (using JWT tokens and hashing)",
    github: "https://github.com/ZarmDev/To-doz-Backend",
    languages: ["nodejs", "express", "mongodb"]
  },
  "Plant Coppa": {
    description: "A plant selling/buying website my team made in about one week (may take a while to load)",
    github: "https://github.com/ZarmDev/plantcoppa",
    languages: ["html5", "css3", "javascript"]
  },
  "2048 in pygame": {
    description: "A recreation of the game 2024 made with Python.",
    github: "https://github.com/ZarmDev/2048-in-pygame",
    languages: ["python"]
  },
  "Python-DB": {
    description: "A database I made for my AP CSP create task project. The program uses Tkinter GUI to allow you to interact with the database. It abstracts saving the database to a file and supports encrypting the keys of the database.",
    github: "https://github.com/ZarmDev/Python-DB",
    languages: ["python"]
  },
  "codingproblems": {
    description: "Coding practice for the USACO competition. I used (some) C++ and Python",
    github: "https://github.com/ZarmDev/codingproblems",
    languages: ["cplusplus", "python"]
  },
  "React Calculator": {
    description: "Made as part of the Freecodecamp Front-end Track",
    github: "https://github.com/ZarmDev/FCC4",
    languages: ["react", "javascript"]
  },
  "socket-game": {
    description: "Just a multiplayer p5.js server",
    github: "https://github.com/ZarmDev/socket-game",
    languages: ["javascript", "nodejs"]
  }
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="heading">Projects</h1>
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
                
                <p className="project-description">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}