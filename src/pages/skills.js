import React from "react";

export default function Skills() {
  const webDev = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ];

  const languages = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Scratch/Snap", icon: "https://img.icons8.com/?size=100&id=b8sdBSRPX1RX&format=png&color=000000" },
  ];

  const tools = [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Inkscape", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg" },
    { name: "GIMP", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1200px-The_GIMP_icon_-_gnome.svg.png" },
    { name: "FireAlpaca", icon: "https://img.icons8.com/color/512/firealpaca.png" },
    { name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite" },
    { name: "Tracktion Waveform", icon: "https://upload.wikimedia.org/wikipedia/en/8/86/Tracktion_Waveform_logo.png" },
    { name: "LMMS", icon: "https://cdn.simpleicons.org/lmms" },
    { name: "Audacity", icon: "https://img.icons8.com/?size=100&id=KLekjbJy6rjh&format=png&color=000000" },
    { name: "Shotcut", icon: "https://www.shotcut.org/assets/img/media/shotcut-logo-512x512.png" },
    { name: "Multisim", icon: "https://cdn.simpleicons.org/multisim" },
    { name: "Fusion 360", icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Fusion360_Logo.svg" }
  ];


  const gameEngines = [
    { name: "Godot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
    { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { name: "Gamemaker Studio 2", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/gamemaker-98kqzlyi1frrscfd07vfi.png/gamemaker-os7p0j98mgnwmrd3pzgoof.png?_a=DATAg1AAZAA0" },
  ];

  const databases = [
    { name: "General SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  ]

  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="heading">Skills</h1>

        <div className="skills-category">
          <h2>Web Development</h2>
          <div className="skills-grid">
            {webDev.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Programming Languages</h2>
          <div className="skills-grid">
            {languages.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Tools & Technologies</h2>
          <div className="skills-grid">
            {tools.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Game Engines</h2>
          <div className="skills-grid">
            {gameEngines.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Databases</h2>
          <div className="skills-grid">
            {databases.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}