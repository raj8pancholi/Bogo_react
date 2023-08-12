import React from 'react';

function MobileNumberInput({ id, placeholder, name }) {
  return (
    <div className="col-12">
      <div className="input-box">
        <label htmlFor={id}>Mobile Number</label>
        <input
          type="text"
          id={id}
          className="form-control"
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
}

export default MobileNumberInput;
