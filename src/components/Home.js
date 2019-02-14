import React from 'react';
import { Redirect } from 'react-router-dom';
import IMDBRating from './IMDBRating';
import YouTubeLink from './YouTubeLink';

const Home = (props) => {
  console.log(props);
  if (props.selectedMovie) {
    return <Redirect to='/choose' />
  }
  return (
    <div className="movies-container">
      {/* <h4>Choose your movie:</h4> */}
      {props.movies.map((movie, i) => (
        <div key={i} className='pick-movie-container'>
          <div data-imdbid={movie.imdbId} onClick={props.selectMovie}>{movie.title}</div>
          <div>
            <IMDBRating titleId={movie.imdbId} />
            <YouTubeLink videoId={movie.trailerYouTubeId} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
