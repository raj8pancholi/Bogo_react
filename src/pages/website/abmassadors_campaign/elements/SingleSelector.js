import React from 'react';

export default function SocialMediaPlatformSelect({ label, options,defautlOptions }) {
  return (
    <div className="row mt-3">
      <div className="col-12">
        <div className="input-box">
          <label htmlFor="">{label}</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>{defautlOptions}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
