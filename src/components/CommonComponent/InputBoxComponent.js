import React,{useState} from 'react';

const InputBox = ({ label, type, id, name,  required, placeholder, value, getValue }) => {





  return (
    <div className="input-box">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={value} placeholder={placeholder} className="form-control"
        required={required}  onChange={e => getValue(e.target.value)}
      />
    </div>
  );
};

export default InputBox;
