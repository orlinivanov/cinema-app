import React from 'react';

const YouTubeLink = (props) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${props.videoId}`} target="_blank" rel="noopener noreferrer">
      <img src="yt_logo_rgb_dark.png" alt="Open in YouTube" width="80" height="18" />
    </a>
  );
}

export default YouTubeLink;