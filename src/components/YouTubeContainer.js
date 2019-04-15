import React from 'react';

const YouTubeContainer = (props) => {
  return (
    <div className='trailer-container'>
      Trailer loading...
        <iframe
          width="480"
          height="270"
          src={`https://www.youtube.com/embed/${props.trailerYouTubeId}`}
          title={props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
    </div >

  );
}

export default YouTubeContainer;