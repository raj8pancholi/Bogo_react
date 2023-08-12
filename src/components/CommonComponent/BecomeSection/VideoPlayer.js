import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="video" data-video-id="CoL8Gtvxfl0">
      <div className>
        <div className="video-placeholder">
          <video width={320} height={240} controls>
            <source src="/images/Merchants (1).mp4" type="video/mp4" />
          </video>
          <img src="/images/bussiness-icon/bogo-video.jpg" alt="" className="img-fluid video-layer" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
