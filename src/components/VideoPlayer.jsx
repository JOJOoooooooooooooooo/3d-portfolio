import React from 'react';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-slate-200 aspect-video group">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;