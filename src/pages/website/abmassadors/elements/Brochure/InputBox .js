import React from 'react';

const InputBox = ({ label, type, id, name, value, required, placeholder }) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={value} placeholder={placeholder} className="form-control"
        required={required}
      />
    </div>
  );
};

export default InputBox;
