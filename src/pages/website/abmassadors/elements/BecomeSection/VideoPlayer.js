import React, { useState, useRef } from 'react';


const VideoPlayer = () => {


  const [videoLayerVisible, setVideoLayerVisible] = useState(true);
  const videoRef = useRef(null);


  const toggleVideoLayer = () => {
    setVideoLayerVisible(false);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Auto-play might be blocked, handle the error here
        console.error('Auto-play blocked:', error);
      });
    }
  };


  return (
    <div className="video" data-video-id="CoL8Gtvxfl0">
      <div className>
        {/* <div className="video-placeholder">
          <video width={320} height={240} controls>
            <source src="/images/Merchants (1).mp4" type="video/mp4" />
          </video>
          <img src="/images/bussiness-icon/bogo-video.jpg" alt="" className="img-fluid video-layer" />
        </div> */}
        <div className="">
          {videoLayerVisible ? (
            <img
              src="/images/bussiness-icon/bogo-video.jpg"
              alt=""
              className="img-fluid video-layer"
              onClick={toggleVideoLayer}
            />
          ) : (
            <video ref={videoRef} width="320" height="320" controls autoPlay muted>
              <source src="/images/Merchants (1).mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
