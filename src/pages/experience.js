import React from "react";

export default function Experience() {
  const hackathons = [
    {
      year: "2022",
      title: "TerminalC1Games High School Competition",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://terminal.c1games.com/"
    },
    {
      year: "2023",
      title: "USACO",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/USACO%20practice/competitions/december2023"
    },
    {
      year: "2023",
      title: "Code Overflow 2023 Hackathon",
      description: "A 48 hour hackathon where I made a game using Godot",
      youtube: "s38TT-4gmsc"
    },
    {
      year: "2023",
      title: "Girlswhocode Hackathon",
      description: "A hackathon that I think was three days long where me and my team made a website that let you upload plants to a server and had a cool UI.",
      github: "https://github.com/ZarmDev/plantcoppa"
    },
    {
      year: "2024",
      title: "Divergent Hackathon",
      description: "A hackathon where me and my team created a jeopardy/quiz style app using React-native",
      github: "https://github.com/ZarmDev/QuizPardy"
    },
    {
      year: "2024",
      title: "USACO",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/USACO%20practice/competitions/january2024"
    },
    {
      year: "2024",
      title: "CerealCodes",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/USACO%20practice/competitions/january2024"
    },
    {
      year: "2025",
      title: "Congressional App Challenge",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "UC Berkeley - Calico",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "HackClub - Arcade",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "HackClub - Summer of Making",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "ACSL - American Computer Science League",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "GirlsWhoCode",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "Code4Hope",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
    {
      year: "2025",
      title: "Congressional App Challenge",
      description: "A hackathon where we used Python to create better algos (algorithms that fight each other)",
      link: "https://github.com/ZarmDev/codingproblems/tree/main/GirlsWhoCode2025"
    },
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