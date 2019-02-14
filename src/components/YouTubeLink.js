import React from 'react';

const YouTubeLink = (props) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${props.videoId}`} target="_blank" rel="noopener noreferrer">
      <img src="yt_logo_rgb_light_80x18.png" alt="Open in YouTube" />
    </a>
  );
}

export default YouTubeLink;