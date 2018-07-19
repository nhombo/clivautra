import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        <p>Ici se trouve des infos qui demandent authentification</p>
      </div>
    );
  }
}
export default requireAuth(Feature);
