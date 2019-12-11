import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>

        <NavLink to = "/homepage">
        <button>home</button>
        </NavLink>
      </div>
    );
  }
}

export default Private;
