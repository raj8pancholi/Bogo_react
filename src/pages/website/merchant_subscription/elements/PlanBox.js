import React, { useState } from 'react';

export default function PlanBox({ imageSrc, title, price }) {
  const [selected, setSelected] = useState(false);

  const handleRadioChange = () => {
    setSelected(!selected);
  };

  return (
    <div className={`card ${selected ? 'border-primary' : ''} ${title.toLowerCase()}_user_box`} onClick={handleRadioChange}>
          <div className={`${title.toLowerCase()}-dimand-img-box`}>
            <img src={imageSrc} alt="" className="img-fluid" />
          </div>
          
          <h6 className="card-title mt-2">{title}</h6>
          <span className="ca`rd-text">{price}</span>
    </div>
  );
}
