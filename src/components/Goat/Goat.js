import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const {goat} = this.props;
    return (
      <div className="Goat col-6 col-md-4 col-lg-3 mb-2">
        <div className="card">
          <img className="card-img-top" src={goat.imageUrl} alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.disposition}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
