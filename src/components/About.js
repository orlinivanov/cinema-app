import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const About = (props) => {
  return (
    <>
      <Navigation />
      <h2>About Cinema App</h2>
      <p>Simple ReactJS App for movie tickets reservation.</p>
      <p>Start by choosing your movie from <NavLink to='/home'>here</NavLink>
        
      </p>
      <p><a href="https://github.com/orlinivanov/cinema-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
    </>
  );
}

export default About;