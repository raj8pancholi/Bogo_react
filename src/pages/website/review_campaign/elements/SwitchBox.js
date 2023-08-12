import React, {useState} from 'react';

// Import Components
import OtpInput from '../../otpVerify/elements/OtpInput';




export default function SwitchBox() {

    const [showOtp , setShowOtp] = useState(false);

    const handleSwitch = () => {
        setShowOtp(!showOtp);
    }



  return (
    <div className="voucher_code_row row">
      {/* ... switch box components ... */}
        <div className="col-md-5">
            <div className="voucher_code_box">
            <h4>USE MERCHANT PIN
                FOR THIS CAMPAIGN</h4>
            </div>
        </div>
        <div className="col-md-2">
            <div className="toggler_code_box">

            <label className="switch">
                <input type="checkbox" id="toggleSwitch" onChange={handleSwitch}/>
                <span className="slider round"></span>
            </label>
            
            </div>
        </div>
        <div className="col-md-5">
            <div className="merchant_box-code">
            <h4>MERCHANT PIN</h4>
            <div className="verification-code-box" id="otpdiv">
                <div className="verification-code-box-inputs-row">
                    {showOtp && (
                        <OtpInput/>
                    )}
                    
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
