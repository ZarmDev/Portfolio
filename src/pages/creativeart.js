import React from "react";
import ela from '../assets/ela.mkv';

export default function CreativeArt() {
  const videos = [
    { 
      title: "Touhou Inspired Game", 
      youtube: "ETIfsh2VeOc",
      description: "A bullet hell game inspired by Touhou"
    },
    { 
      title: "FNF Engine in Godot 4", 
      youtube: "rnrrxefu_sY",
      description: "Friday Night Funkin' engine recreation"
    },
    { 
      title: "Organization Time - Game Jam", 
      youtube: "s38TT-4gmsc",
      description: "Made in 48 hours for a game jam"
    },
    { 
      title: "Story Game in Godot 4", 
      localVideo: ela,
      description: "A narrative style game I made for my english class"
    }
  ];

  const robloxGames = [
    {
      title: "Metrophobia - Chapter 1",
      description: "My Roblox horror game series",
      link: "https://www.roblox.com/games/10296378249/Metrophobia",
      thumbnail: ""
    },
    {
      title: "Metrophobia - Chapter 2",
      description: "Continuation of the horror series",
      link: "https://www.roblox.com/games/10750671295/Metrophobia-Part2",
      thumbnail: ""
    }
  ];

  const otherProjects = [
    {
      title: "Cats vs Dogs",
      description: "A fun super smash bros inspired browser game. Art made by me and a friend.",
      link: "https://github.com/ZarmDev/RudePassionateMicrobsd",
      thumbnail: ""
    },
    {
      title: "2048 in Pygame",
      description: "2048 recreated in pygame for AP Computer Science class.",
      link: "https://replit.com/@daniala5/2048?v=1",
      thumbnail: ""
    }
  ];

  return (
    <section id="creativeart">
      <div className="creative-container">
        <h1 className="heading">Game Design Experience</h1>

        <h2 className="section-title">Video Showcase</h2>
        <div className="video-grid">
          {videos.map((video, index) => {
            const thumbnailUrl = `https://img.youtube.com/vi/${video.youtube}/maxresdefault.jpg`

            return (
              <div key={index} className="video-card">
                <h3>{video.title}</h3>
                {video.youtube ? (
                  <a href={`https://www.youtube.com/watch?v=${video.youtube}`} target="_blank" rel="noopener noreferrer" className="video-thumbnail-link">
                    <img src={thumbnailUrl} alt={video.title} className="video-thumbnail" />
                    <div className="play-button">▶</div>
                  </a>
                ) : video.localVideo ? (
                  <video controls className="local-video">
                    <source src={video.localVideo} type="video/x-matroska" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <></>
                )}
                <p className="video-description">{video.description}</p>
              </div>
            );
          })}
        </div>

        <h2 className="section-title">Roblox Games</h2>
        <div className="video-grid">
          {robloxGames.map((game, index) => (
            <div key={index} className="video-card">
              {game.thumbnail ? <h3>{game.title}</h3> : <a style={{fontSize: "3ch", textDecoration: "none", padding: "2ch"}} href={game.link}>{game.title}</a>}
              <a href={game.link} target="_blank" rel="noopener noreferrer" className="video-thumbnail-link">
                {game.thumbnail ?
                <img src={game.thumbnail} alt={game.title} className="video-thumbnail" /> : <></>}
              </a>
              <p className="video-description">{game.description}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Other Projects</h2>
        <div className="video-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="video-card">
              <h3>{project.title}</h3>
              {project.thumbnail ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="video-thumbnail-link">
                <img src={project.thumbnail} alt={project.title} className="video-thumbnail" />
              </a> : <></>}
              <p className="video-description">{project.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="note">
          <p><em>My childhood Scratch projects (Unavailable right now, reuploading soon)</em></p>
        </div> */}
      </div>
    </section>
  );
}