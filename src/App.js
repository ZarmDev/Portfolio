import logo from './logo.svg';
import './App.css';

import AboutMe from './pages/aboutme.js'
import Projects from './pages/projects';
import Skills from './pages/skills'
import Experience from './pages/experience';

function App() {
  return (
    <div className="App">
      <ul id="topbar">
        <a href="/Portfolio/#about">About me</a>
        <a href="/Portfolio/#projects">Projects</a>
        <a href="/Portfolio/#skills">Skills</a>
        <a href="/Portfolio/#experience">Experience</a>
      </ul>
      <div id="scrollDownMessage">
        <p>Scroll down ⬇️</p>
      </div>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  );
}

export default App;
