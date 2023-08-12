import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const RobotBox = () => {

  function onChange(value) {
    console.log("Captcha value:", value);
}



  return (

    

    <>
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
            />
        </>
  );
};

export default RobotBox;
