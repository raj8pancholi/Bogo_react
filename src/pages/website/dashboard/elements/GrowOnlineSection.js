import React, { useState, useRef } from 'react';

const GrowOnlineSection = () => {
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
    <div className="grow_online_section">
      <div className="row">
        <h2>Launch an influencer campaign and grow your reach online</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="online_video_box">
            <div className="video" data-video-id="CoL8Gtvxfl0">
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
        </div>
        <div className="col-md-9">
          <div className="online_video_group_img">
            <img src="/img/users/userpic group.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowOnlineSection;
