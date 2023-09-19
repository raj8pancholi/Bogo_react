import React,{useState} from 'react';

const InputBox = ({ label, type, id, name,  required, placeholder }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };




  return (
    <div className="input-box">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={inputValue} placeholder={placeholder} className="form-control"
        required={required} onChange={handleInputChange}
      />
    </div>
  );
};

export default InputBox;
