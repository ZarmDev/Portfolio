import ardunioPic2 from '../assets/IMG_2037.jpg';
import racecar from '../assets/racecar.png'
import basketball_court from '../assets/basketball-court.png'
import floorplan from '../assets/myfloorplan.png'
import toytruck from '../assets/toytruck.png'
import puzzlecube from '../assets/cube.png'
import automata from '../assets/automata.png'
import basketball from '../assets/basketball.png'
import donut from '../assets/donut.png'
import monsterpic from '../assets/blenderscreenshot.png'


export default function OtherProjects() {
    return (
        <section id="otherprojects">
            <div>
                <h1 className="heading">3D Modeling</h1>
                <h2>Robotics</h2>
                <h3>Using a moisture sensor and LCD display to light up the screen with moisture data</h3>
                <img src={ardunioPic2} alt="Ardunio with moisture sensor"></img>
                <h3>I also had a weather monitor (DHT11) with a LCD display but I didn't take a photo of it :/</h3>
                <h2>Autodesk Fusion 360 (Design and drawing for production class)</h2>
                <h3>Racecar</h3>
                <img src={racecar} alt="Racecar picture"></img>
                <p>Used a tutorial but it's original work</p>
                <h3>Basketball Court</h3>
                <img src={basketball_court} alt="Basketball court"></img>
                <p>Used a tutorial plus reskinning and I made the hoop</p>
                <h3>Floor Plan</h3>
                <img src={floorplan} alt="Floor plan"></img>
                <p>Made myself - very painful</p>
                <h3>Toy Truck</h3>
                <img src={toytruck} alt="Toy truck"></img>
                <p>Made using tutorial plus reskinning</p>
                <h3>Puzzle Cube</h3>
                <img src={puzzlecube} alt="Puzzle cube"></img>
                <p>Don't remember how it was made...</p>
                <h3>Basketball</h3>
                <img src={basketball} alt="Basketball"></img>
                <p>Using a tutorial + reskinning</p>
                <h3>Automata</h3>
                <img src={automata} alt="Automata"></img>
                <p>I'm not sure if I made this myself but it was for a group project</p>
                <h2>Blender</h2>
                <h3>Donut</h3>
                <img src={donut} alt="Donut"></img>
            </div>
        </section>
    );
}