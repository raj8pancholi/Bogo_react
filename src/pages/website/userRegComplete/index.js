import React from 'react';


// Import Conponents Header and Footer
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header.js'





import VerifyOtpImage from './elements/VerifyOtpImage';

export default function VerifyOtp() {
  return (
    <>

    {/* Header */}
    <Header/>


    <div className="login_section">
      <div className="container">
        <div className="user_login_box">
          <div className="row">
            <VerifyOtpImage />
            <div className="col-md-6">
              <div className="complete-reg-row">
                <div className="complete-reg-text-group">
                  <h4>User registration Complete </h4>
                  <span className="otp-text">
                    Please download our App to login.
                  </span>
                </div>

                {/*  */}

                <div className='playStore_icon_row'>
                        <div className="playstore-icon">
                        <a href="https://play.google.com/store/apps/details?id=com.bogoapp.bogoapp">
                        <img
                            src="/images/Google-Play-Button_resize.png"
                            alt=""
                            className="img-fluid"
                        />
                        </a>
                        <a href="https://apps.apple.com/us/app/bogo/id1541500003">
                        <img
                            src="/images/App-Store-Button_resize.png"
                            alt=""
                            className="img-fluid"
                        />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Footer */}
    <Footer/>
    </>
  );
}
