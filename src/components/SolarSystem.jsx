import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <Title headline="Planetas" />
      <div data-testid="solar-system">
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
