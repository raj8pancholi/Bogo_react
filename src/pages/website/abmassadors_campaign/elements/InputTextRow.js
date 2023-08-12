import React from 'react';

const InputBox = ({ label, name, type, placeholder, required }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="input-box">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            id={name}
            className="form-control"
            required={required}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
