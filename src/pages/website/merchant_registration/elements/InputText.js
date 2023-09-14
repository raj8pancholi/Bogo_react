import React from 'react';

const InputText = ({ type, id, name, value, required, placeholder, onChange }) => {
  return (
    <div className="input-box">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        className="form-control"
        required={required}
        onChange={onChange} // Use curly braces to reference the onChange prop
      />
    </div>
  );
};

export default InputText;
