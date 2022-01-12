import React from 'react';
import Pow from "./pow.png";
import Boom from "./boom.png";

function Navbar(props) {
  return (
    <div className="navbar">
          <div className="logo"><img src={Pow} /></div>
          <div className="title">Superhero Search</div>
          <div className="logo"><img src={Boom} /></div>
    </div>
  );
}

export default Navbar;
