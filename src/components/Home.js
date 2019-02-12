import React from 'react';

const Home = (props) => {
  console.log(props);
  // props.getMovieList();
  return (
    <div>
      <h4>Choose your movie:</h4>
      {props.movies.map((movie, i) => (
        <div key={i} className='pick-movie-container'>
          <span>{movie.title}</span>
          <span>{movie.imdbId}</span>
          <span>{movie.trailerYouTubeId}</span>
        </div>
      ))}
    </div>
  );
}

export default Home;
