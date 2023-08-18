import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const BecomeMainSection = () => {

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
    <div className="container-fluid become_main_section">
      <div className="become-row">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="bacome_left_section">
              <div className="page">
                <div className="video" data-video-id="CoL8Gtvxfl0">
                  <div className="">
                    <div className="video-placeholder">
                    {videoLayerVisible ? (
                  <img
                    src="/images/bussiness-icon/bogo-video.jpg"
                    alt=""
                    className="img-fluid video-layer"
                    onClick={toggleVideoLayer}
                  />
                ) : (
                  <video ref={videoRef} width="320" height="180" style={{height:'320px'}} controls autoPlay muted>
                    <source src="/images/Merchants (1).mp4" type="video/mp4" />
                  </video>
                )}
                      {/* <video width="320" height="240" controls>
                        <source
                          src="/images/Merchants (1).mp4"
                          type="video/mp4"
                        />
                      </video>
                      <img
                        src="images/bussiness-icon/bogo-video.jpg"
                        alt=""
                        className="img-fluid video-layer"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bacome_right_section">
              <h2>Become a BOGO Brand Ambassador</h2>
              <ul>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Increase your brand partnerships
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Monetize your social media accounts
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Gain access to exclusive offers and giveaways
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Complimentary BOGO Premium subscription
                </li>
              </ul>
            </div>
            <div className="bacome_right_outer_section">
              <p>
                <Link href="/brand_ambassadors">
                  Join Influencer Program
                  <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMainSection;
