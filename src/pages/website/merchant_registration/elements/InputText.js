import React from 'react';

const InputText = ({ type, id, name, value, required, placeholder }) => {
  return (

    <div className="input-box">
        <input type={type} name={name} id={id} value={value} placeholder={placeholder} className="form-control"
                required={required}
            />
    </div>
  );
};

export default InputText;



