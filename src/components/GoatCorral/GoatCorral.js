import React from 'react';

import Goat from '../Goat/Goat';
import './GoatCorral.scss';

class GoatCorral extends React.Component {
  render() {
    const {goats} = this.props; 
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} />
      // <h2>{goat.name}</h2>
    ))
    return (
      <div className="GoatCorral row p-4">
        { makeGoats }
      </div>
    );
  }
}

export default GoatCorral;