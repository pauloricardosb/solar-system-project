import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2 id='title'>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string,
}.isRequire;

export default Title;
