import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


// Import Slice Action
import { registerUser  } from '../../../redux/slice/authSlice';

// Import Header and Footer Components
import Header from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';

// Import Components
import PasswordInput from './elements/PasswordInput';
import InputText from './elements/InputText';
import MobileInput from './../../../components/CommonComponent/MobileInputbox';



export default function MerchantRegistration() {

  // navigation 
  const navigation = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  // const [phone, setPhone] = useState('');


  // Dispatch the registerUser action when the form is submitted
  const dispatch = useDispatch(); // Get the dispatch function from Redux


  // Handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); // Prevent the default form submission behavior

       // Dispatch the registerUser action with user registration data
      const registerStatus = await dispatch(registerUser({ 
        firstName, 
        lastName, 
        email, 
        password,
        repeatPassword,
        // phone,

      })).unwrap();

      console.log("registerStatus", registerStatus);

      if(registerStatus.status === "success"){
        navigation('/otpVerify');
      }
      
    } catch (error) {
        console.log(error);
    }
  }




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
                <h4>Merchant Registration</h4>
                <form id="addform" className="user_registration_form" >
                    <div className="row" onSubmit={handleSubmit}>

                        
                        {/* <InputText type='text' className='form-control use_registration_email' required='required' placeholder='Title'  /> */}

                        <InputText type='text' className='form-control user_registration_Sname' id='first_name' name='first_name' required='required' placeholder='
                        First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}  />


                        <InputText type='text' className='form-control use_registration_Lname' id='Last_name' name='last_name' required='required' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}  />

                        <InputText type='email' className='form-control use_registration_email' id='email' name='email' required='required' placeholder='Email Name' value={email} onChange={(e) => setEmail(e.target.value)}   />




                        <PasswordInput
                        id="create_password"
                        name="create_password"
                        placeholder="Create Password"
                        required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <PasswordInput
                        id="repeat_password"
                        name="repeat_password"
                        placeholder="Repeat password"
                        required
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        {/* ... Other form fields ... */}


                        <MobileInput/>


                        <div className="col-12 regisBtn">
                          <button type="submit" className="registration-btn btn btn-primary" style={{marginBottom: '20px'}}>
                                      Complete Registration
                          </button>
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
