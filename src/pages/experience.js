import React from "react";

export default function Experience() {
  const hackathons = [
    {
      year: "2022",
      title: "TerminalC1Games High School Competition",
      description: "Created competitive Python algorithms that battled other student bots in a real‑time strategy environment.",
      link: "https://terminal.c1games.com/"
    },
    {
      year: "2023",
      title: "USACO",
      description: "Solved algorithmic programming problems for the USACO contests, focusing on data structures and competitive programming techniques.",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/USACO%20practice/competitions/december2023"
    },
    {
      year: "2023",
      title: "Code Overflow 2023 Hackathon",
      description: "Built a full Godot game in 48 hours, handling gameplay logic, UI, and asset integration.",
      youtube: "s38TT-4gmsc"
    },
    {
      year: "2023",
      title: "Girlswhocode Hackathon",
      description: "Developed a plant‑sharing web app with image uploads, a clean UI, and a simple backend for storage.",
      github: "https://github.com/ZarmDev/plantcoppa"
    },
    {
      year: "2024",
      title: "Divergent Hackathon",
      description: "Created a React Native quiz/jeopardy‑style mobile app with team collaboration and real‑time scoring.",
      github: "https://github.com/ZarmDev/QuizPardy"
    },
    {
      year: "2024",
      title: "USACO",
      description: "Continued competitive programming training with USACO problems, focusing on optimization and algorithm design.",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/USACO%20practice/competitions/january2024"
    },
    {
      year: "2024",
      title: "CerealCodes",
      description: "Worked on Python‑based algorithmic challenges in a fast‑paced competitive coding environment.",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/USACO%20practice/competitions/january2024"
    },
    {
      year: "2025",
      title: "Congressional App Challenge",
      description: "Built a mobile app for the national Congressional App Challenge, focusing on usability, design, and real‑world impact.",
      link: "https://github.com/ZarmDev/BTHSHub-App"
    },
    {
      year: "2025",
      title: "UC Berkeley - Calico",
      description: "Participated in Calico by building a project centered around creativity, rapid prototyping, and teamwork.",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "HackClub - Arcade",
      description: "Developed part of the BTHS Hub app ecosystem as a HackClub Arcade project, focusing on student tools and productivity.",
      link: "https://github.com/ZarmDev/BTHSHub-App"
    },
    {
      year: "2025",
      title: "HackClub - Summer of Making",
      description: "Built backend services for the BTHS Hub platform during HackClub’s Summer of Making.",
      link: "https://github.com/ZarmDev/BTHSHub-Server"
    },
    {
      year: "2025",
      title: "ACSL - American Computer Science League",
      description: "Practiced formal computer science topics including automata, bit operations, and algorithmic problem solving.",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "GirlsWhoCode",
      description: "Worked on collaborative coding projects through Girls Who Code, focusing on web development and teamwork.",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "Code4Hope",
      description: "Created TherapyOutside, a mental‑health support app designed to help users track emotions and access resources.",
      link: "https://github.com/ZarmDev/TherapyOutsideApp"
    }
  ];

  // Group items by year (preserves insertion order of appearance)
  const grouped = hackathons.reduce((acc, item) => {
    (acc[item.year] ||= []).push(item);
    return acc;
  }, {});

  const yearsInOrder = Object.keys(grouped);

  return (
    <section id="experience">
      <div className="experience-container">
        <h1 className="heading">Hackathons</h1>

        <p>Click on the link to see the Github project :)</p>

        <div className="timeline">
          {yearsInOrder.map((year) => (
            <div key={year} className="timeline-year-group" style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '16px', alignItems: 'start', marginBottom: '30px' }}>
              {/* Year label (left) — shown once */}
              <div className="timeline-year-label" style={{ position: 'sticky', top: 0 }}>
                <span className="timeline-year">{year}</span>
              </div>

              {/* Items for this year (right) */}
              <div className="timeline-items">
                {grouped[year].map((hackathon, index) => {
                  const thumbnailUrl = hackathon.youtube
                    ? `https://img.youtube.com/vi/${hackathon.youtube}/maxresdefault.jpg`
                    : null;

                  return (
                    <div key={`${year}-${index}`} className="timeline-item">
                      <div className="timeline-content">
                        <h3>
                          {hackathon.link ? (
                            <a href={hackathon.link} target="_blank" rel="noopener noreferrer">{hackathon.title}</a>
                          ) : (
                            hackathon.title
                          )}
                        </h3>

                        {hackathon.youtube && (
                          <a href={`https://www.youtube.com/watch?v=${hackathon.youtube}`} target="_blank" rel="noopener noreferrer" className="thumbnail-link">
                            <img src={thumbnailUrl} alt={hackathon.title} className="project-thumbnail" />
                            <div className="play-button">▶</div>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}