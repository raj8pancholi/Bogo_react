import React from 'react';

const FormInputComponent = ({ label, type, name, id, placeholder, required }) => (
  <div className="input-box">
    <label htmlFor={id}>{label}</label>
    <input type={type} name={name} id={id} className="form-control" placeholder={placeholder} required={required} />
  </div>
);

export default FormInputComponent;
