import React, { useState } from 'react';

const SocialMediaInput = () => {
  const [socialMedia, setSocialMedia] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const [enteredLink, setEnteredLink] = useState('');

  const socialMediaOptions = [
    { name: 'Facebook', icon: 'facebook', color: 'blue', type: 'facebook.com' },
    { name: 'Instagram', icon: 'instagram', color: 'purple', type: 'instagram.com' },
    { name: 'Youtube', icon: 'youtube', color: 'red', type: 'youtube.com' },
    { name: 'Tiktok', icon: 'tiktok', color: 'black', type: 'tiktok.com' },
    // Add more social media options here
  ];

  const handleSocialMediaSelect = (option) => {
    setSelectedSocialMedia(option);
    setSocialMedia(false);
  };

  const handleLinkChange = (event) => {
    setEnteredLink(event.target.value);
  };

  const validateLink = () => {
    if (selectedSocialMedia && enteredLink) {
      const linkRegex = new RegExp(`^https?:\/\/(www\.)?${selectedSocialMedia.type}\/.*`);
      if (!linkRegex.test(enteredLink)) {
        alert('Please enter a valid link for the selected social media platform.');
      }
    }
  };


  return (
    <div className="row">
      <div className="col-12">
        <div className="input-box">
          <div className="row">
            <label htmlFor="Social_media">Social media</label>
            <div className="col-12 media-select">
              <div className="apto-dropdown-wrapper">
                <div className="apto-trigger-dropdown" onClick={() => setSocialMedia(!socialMedia)}>
                  {selectedSocialMedia ? (
                    <i className={`fab fa-${selectedSocialMedia.icon} ${selectedSocialMedia.color}`} style={{ color: selectedSocialMedia ? selectedSocialMedia.color : 'black' }} />
                  ) : (
                    <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-messenger" className="svg-inline--fa fa-facebook-messenger fa-w-14 fa-network" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" title="messenger">
                      <path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z" />
                    </svg>
                  )}
                  <i className="fas fa-caret-down" style={{ color: selectedSocialMedia ? selectedSocialMedia.color : 'black' }} />
                </div>

                <div className={`dropdown-menu-box social-media-icon-btn ${socialMedia ? 'show' : ''}`}>
                  {socialMediaOptions.map((option, index) => (
                    <button type="button" className="dropdown-item" key={index} onClick={() => handleSocialMediaSelect(option)}>
                      <i className={`fab fa-${option.icon}`} style={{ color: option.color }} />
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="text"
                name="Social_media"
                id="Social_media"
                className="form-control media-url"
                required
                placeholder="Enter URL"
                value={enteredLink}
                onChange={handleLinkChange}
                onBlur={validateLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaInput;
