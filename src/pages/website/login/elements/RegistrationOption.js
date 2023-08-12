import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationOption({ link, imageSrc, altText, title }) {
  return (
    <div className="registation-col">
      <div>
        <Link to={link} className={`option_regis ${title.toLowerCase()}_option`}>
          <img src={imageSrc} alt={altText} className="img-fluid" />
        </Link>
      </div>
      <h6>{title}</h6>
    </div>
  );
}
