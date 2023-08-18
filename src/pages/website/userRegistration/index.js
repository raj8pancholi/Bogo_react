import React from 'react';
import { Link } from 'react-router-dom';

// Import Header and Footer Components
import Header from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';

// Import Components
import PasswordInput from './elements/PasswordInput';
import InputText from './elements/InputText';
import MobileInput from './../../../components/CommonComponent/MobileInputbox';



export default function MerchantRegistration() {

  return (

    <>

    {/* Header */}
    <Header />


    <div className="login_section">
      <div className="container">
        <div className="user_login_box">
          <div className="row">
            <div className="col-md-6 user_img_row">
              <img
                src="/images/merchant_reg_img.jpg"
                alt=""
                
              />
            </div>
            <div className="col-md-6">
              <div className="user_register-group-box">
                <h4>User Registration</h4>
                <form id="addform" className="user_registration_form" >
                    <div className="row">

                        <InputText type='text' className='form-control user_registration_Sname' id='first_name' name='first_name' required='required' placeholder='
                        First Name'  />


                        <InputText type='text' className='form-control use_registration_Lname' id='Last_name' name='last_name' required='required' placeholder='last_name'  />

                        <InputText type='email' className='form-control use_registration_email' id='email' name='email' required='required' placeholder='Email Name'  />




                        <PasswordInput
                        id="create_password"
                        name="create_password"
                        placeholder="Create Password"
                        required
                        />
                        <PasswordInput
                        id="repeat_password"
                        name="repeat_password"
                        placeholder="Repeat password"
                        required
                        />
                        {/* ... Other form fields ... */}


                        <MobileInput/>


                        <div className="col-12 regisBtn">
                            <Link to='/userOtpVerify'>
                                <button type="submit" className="registration-btn btn btn-primary" style={{marginBottom: '20px'}}>
                                    Complete Registration
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
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
