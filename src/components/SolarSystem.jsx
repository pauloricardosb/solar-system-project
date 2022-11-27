import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import '../styles/PlanetsCard.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <Title headline="Planetas" />
      <div data-testid="solar-system" id='planets-card'>
        {planets.map((planet) => (<PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
      </section>
      );
  }
}

export default SolarSystem;
