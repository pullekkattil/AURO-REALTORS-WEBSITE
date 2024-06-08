import React from 'react';
import vid from '../assets/ny2.mp4';

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      src={vid}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: -1,
      }}
    ></video>
  );
};

export default BackgroundVideo;
