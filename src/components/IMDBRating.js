import React from 'react';

const IMDBRating = (props) => {
  return (
    <a hrefLang href={`https://www.imdb.com/title/${props.titleId}`} target="_blank">
      <img src="imdb_37x18.png" alt="Chek it out on IMDB" />
    </a>
  );
}

export default IMDBRating;