import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to='/home' activeStyle={{ color: 'green' }}>Home</NavLink>
    <NavLink to='/choose' activeStyle={{ color: 'green' }}>Choose</NavLink>
    {/* <NavLink to='/ticket' activeStyle={{color: 'green'}}>All Items</NavLink> */}
  </nav>
);

export default Navigation;