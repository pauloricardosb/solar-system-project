import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section data-testid="mission-card" id='mission-card'>
        <p className="card" data-testid="mission-name">{ `${name}` }</p>
        <p className="card" data-testid="mission-year">{ `${year}` }</p>
        <p className="card" data-testid="mission-country">{ `${country}` }</p>
        <p className="card" data-testid="mission-destination">{ `${destination}` }</p>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequire;

export default MissionCard;
