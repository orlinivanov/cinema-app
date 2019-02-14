import React from 'react';

const IMDBRating = (props) => {
  return (
    <a href={`https://www.imdb.com/title/${props.titleId}`} target="_blank" rel="noopener noreferrer">
      <img src="imdb_37x18.png" alt="Chek it out on IMDB" />
    </a>
  );
}

export default IMDBRating;