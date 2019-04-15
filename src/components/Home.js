import React from 'react';
import { Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import IMDBRating from './IMDBRating';
import YouTubeLink from './YouTubeLink';

const Home = (props) => {
  if (props.selectedMovie.imdbId) {
    return <Redirect to='/choose' />
  }
  return (
    <>
      <Navigation />
      <h2>Now showing:</h2>
      <div className='movies-container'>
        {props.movies.map((movie, i) => (
          <div key={i} className='pick-movie-container'>
            <div className='movie-title' onClick={() => { props.setStateVal('selectedMovie', movie.imdbId) }}>{movie.title}</div>
            <div className='movie-details'>
              <IMDBRating titleId={movie.imdbId} />
              <YouTubeLink videoId={movie.trailerYouTubeId} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
