import React from 'react';

const RobotBox = () => {
  return (
    <div className="robot-box">
      <span className="msg-error error" />
      {/* Replace the data-sitekey with your actual reCAPTCHA site key */}
      <div id="recaptcha" className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" data-callback="aaa" />
    </div>
  );
};

export default RobotBox;
