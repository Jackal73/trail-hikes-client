import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>ALL USERS</NavLink>
    </li>
    <li>
      <NavLink to="/u1/hikes">MY HIKES</NavLink>
    </li>
    <li>
      <NavLink to="/hikes/new">ADD HIKE</NavLink>
    </li>
    <li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li>
  </ul>
};

export default NavLinks;