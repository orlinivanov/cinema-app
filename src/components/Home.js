import React from 'react';
import IMDBRating from './IMDBRating';

const Home = (props) => {
  // console.log(props);
  // props.getMovieList();
  return (
    <div>
      <h4>Choose your movie:</h4>
      {props.movies.map((movie, i) => (
        <div key={i} className='pick-movie-container'>
          <main>{movie.title}</main>
          <aside><IMDBRating titleId={movie.imdbId} /></aside>
          <aside>{movie.trailerYouTubeId}</aside>
        </div>
      ))}
    </div>
  );
}

export default Home;
