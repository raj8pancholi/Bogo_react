import React, { useState, useRef } from 'react';

function OtpInput({ otp, onChange, onKeyDown, inputRefs }) {
  return (
    <div className="verificationCodeInputs">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => onChange(index, e.target.value)}
          onKeyDown={(e) => onKeyDown(index, e)}
        />
      ))}
    </div>
  );
}

export default function VerifyOtp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault(); // Prevent the default behavior of the Backspace key
      const newOtp = [...otp];
      newOtp[index] = ''; // Clear the current input
      setOtp(newOtp);
  
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <div className="login_section">
      {/* ... other JSX content ... */}
      <OtpInput
        otp={otp}
        onChange={handleOtpChange}
        onKeyDown={handleKeyDown}
        inputRefs={inputRefs}
      />
      {/* ... rest of the JSX content ... */}
    </div>
  );
}
