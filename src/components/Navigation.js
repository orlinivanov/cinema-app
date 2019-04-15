import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to='/home' activeStyle={{ color: '#ccc' }}>Home</NavLink>
    <NavLink to='/about' activeStyle={{ color: '#ccc' }}>About</NavLink>
    {/* <NavLink to='/ticket' activeStyle={{color: 'green'}}>All Items</NavLink> */}
  </nav>
);

export default Navigation;