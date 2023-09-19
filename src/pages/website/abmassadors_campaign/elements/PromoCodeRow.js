import React,{useState} from 'react';

export default function PromoCodeRow({ label }) {

    // State to manage the switch's value
  const [isTextareaActive, setTextareaActive] = useState(false);

  // Function to toggle the switch
  const toggleSwitch = () => {
    setTextareaActive(!isTextareaActive);
  };


  return (
    <div className="row hastag-row mt-3">
      <div className="col-3">
        <div className="input-box">
          <label htmlFor=" " className="label_text">{label}</label>
        </div>
      </div>
      <div className="col-7">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Promo Code" maxLength="20" disabled={!isTextareaActive}></textarea>
      </div>
      <div className="col-2 switch-row">
        <label className="switch" style={{width:'37px'}}>
          <input type="checkbox" id="switchButton" checked={isTextareaActive} onChange={toggleSwitch} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
