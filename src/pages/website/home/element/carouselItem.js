import React from 'react';

const carouselItem = ({ title, imageSrc }) => {
  return (
    <div className="item">
      <img src={imageSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default carouselItem;
