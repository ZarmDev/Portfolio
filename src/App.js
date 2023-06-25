import logo from './logo.svg';
import './App.css';

import AboutMe from './pages/aboutme.js'
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <ul id="topbar">
        <a href="/#about">About me</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#tutoring">Tutoring</a>
      </ul>
      <div id="scrollDownMessage">
        <p>Scroll down ⬇️</p>
      </div>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  );
}

export default App;
