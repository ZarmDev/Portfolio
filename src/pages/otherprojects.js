import ardunioPic2 from '../assets/other/IMG_2037.jpg';
import racecar from '../assets/other/racecar.png'
import basketball_court from '../assets/other/basketball-court.png'
import floorplan from '../assets/other/myfloorplan.png'
import toytruck from '../assets/other/toytruck.png'
import puzzlecube from '../assets/other/cube.png'
import automata from '../assets/other/automata.png'
import basketball from '../assets/other/basketball.png'
import donut from '../assets/other/donut.png'
import automataIRL from '../assets/other/automata-irl.png'
import arch from '../assets/other/arch.jpg'

export default function OtherProjects() {
    return (
        <section id="otherprojects">
            <div>
                <h1 className="heading">3D Modeling</h1>
                <h2>Hardware projects</h2>
                <p>Using a solar panel to power a moisture sensor which feeds data to the LCD display</p>
                <img src={ardunioPic2} alt="Ardunio with moisture sensor"></img>
                <p>Installing Arch Linux onto my old computers</p>
                <h3>I wrote a guide from what I learned about Arch Linux <a href="https://github.com/ZarmDev/arch-linux-guide">here</a></h3>
                <img src={arch}></img>
                <h2>Autodesk Fusion 360</h2>
                <p>Racecar</p>
                <img src={racecar} alt="Racecar picture"></img>
                <p>Basketball Court</p>
                <img src={basketball_court} alt="Basketball court"></img>
                <p>Floor Plan</p>
                <img src={floorplan} alt="Floor plan"></img>
                <p>Toy Truck</p>
                <img src={toytruck} alt="Toy truck"></img>
                <p>Puzzle Cube</p>
                <img src={puzzlecube} alt="Puzzle cube"></img>
                <p>Basketball</p>
                <img src={basketball} alt="Basketball"></img>
                <p>Automata</p>
                <img src={automata} alt="Automata"></img><br></br>
                <img src={automataIRL}></img>
                <h2>Blender</h2>
                <p>Donut</p>
                <img src={donut} alt="Donut"></img>
            </div>
        </section>
    );
}