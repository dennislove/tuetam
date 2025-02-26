import React from 'react';

function VideoIntro() {
  return (
    <div className=" relative">
      <video
        src="./images/videointro.mp4"
        className="w-full  pointer-events-none"
        autoPlay
        controls
        muted
        loop
      ></video>
    </div>
  );
}

export default VideoIntro;
