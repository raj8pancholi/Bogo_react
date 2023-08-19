import React from 'react';

export default function PromoCodeRow({ label }) {
  return (
    <div className="row hastag-row mt-3">
      <div className="col-3">
        <div className="input-box">
          <label htmlFor=" " className="label_text">{label}</label>
        </div>
      </div>
      <div className="col-7">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="#hashtag" maxLength="20"></textarea>
      </div>
      <div className="col-2 switch-row">
        <label className="switch" style={{width:'37px'}}>
          <input type="checkbox" id="switchButton" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
