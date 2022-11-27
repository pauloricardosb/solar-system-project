import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/MissionCard.css';

class Missions extends React.Component {
  render() {
    return (
      <section id='main-mission-section'>
        <Title headline="Missões" />
      <section id='missions' data-testid="missions">
        {missions.map((mission) => (<MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />))}
      </section>
      </section>
      );
  }
}

export default Missions;
