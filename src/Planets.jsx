import './App.css';

const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
];

planets.sort((a, b) => a.name.localeCompare(b.name));

const planetsList = planets.map((planet, index) => 
    planet.isGasPlanet && <div className='card' key={index}>
        {<p>{planet.name}</p>}
    </div>
);

function Planets() {
  return (
    <div className='cards'>
      {planetsList}
    </div>
  )
}

export default Planets;