import ardunioPic2 from '../assets/IMG_2037.jpg';
import racecar from '../assets/racecar.png'
import basketball_court from '../assets/basketball-court.png'
import floorplan from '../assets/myfloorplan.png'
import toytruck from '../assets/toytruck.png'
import puzzlecube from '../assets/cube.png'
import automata from '../assets/automata.png'
import basketball from '../assets/basketball.png'
import donut from '../assets/donut.png'
import automataIRL from '../assets/automata-irl.png'

export default function OtherProjects() {
    return (
        <section id="otherprojects">
            <div>
                <h1 className="heading">3D Modeling</h1>
                <h2>Hardware projects</h2>
                <p>I have created many projects using the Elegoo Ardunio Starter kit, for example:</p>
                <h3>(Using a solar panel to power a moisture sensor which feeds data to the LCD display</h3>
                <img src={ardunioPic2} alt="Ardunio with moisture sensor"></img>
                <p>In addition, I have recently installed Arch Linux and Linux Mint onto my old computers</p>
                <p>I wrote a guide from what I learned about Arch Linux <a href="https://github.com/ZarmDev/arch-linux-guide">here</a></p>
                {/* TODO ADD PHOTOS */}
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