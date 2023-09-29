import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import Header from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';
import PasswordInput from './elements/PasswordInput';
import InputText from './elements/InputText';
// import MobileInput from './../../../components/CommonComponent/MobileInputbox';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'; 
import { connect } from 'react-redux';
import { MERCHANT_SIGNUP } from '../../../redux/slices/merchantAuthSlice';


 class index extends Component{
state = {firstName:'', lastName:'', email:'', password:'', repeatpassword:'', phone:'919988776655', whatsaAppNo:'', error:false, passMatchErr:false }

signup=()=>{
  this.setState({error:false, passMatchErr:false})
  const  {firstName, lastName, email, password, repeatpassword, phone, whatsaAppNo } = this.state
  if(!firstName || !lastName || !email || !password|| !repeatpassword|| !phone) this.setState({error:true})
  else{
    if(password === repeatpassword){
       const obj ={ firstName, lastName, email, password, repeatpassword, phone } 
       this.props.MERCHANT_SIGNUP(obj)
       this.props.navigate('/otpVerify')
    }else{
         this.setState({passMatchErr:true})
    }
}
}

render(){
  const  {firstName, lastName, email, password, repeatpassword, phone, whatsaAppNo , error, passMatchErr} = this.state
  return (
    <>
    <Header />
    <div className="login_section">
      <div className="container">
        <div className="user_login_box">
          <div className="row">
            <div className="col-md-6 user_img_row">
              <img src="/images/merchant_reg_img.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="user_register-group-box">
                <h4>Merchant Registration</h4>
                <div  className="user_registration_form" >
                    <div className="row">

                    <InputText type='text' value={firstName} getValue={text=>this.setState({firstName:text})} className='form-control user_registration_Sname' id='first_name' name='first_name' required='required' placeholder='
                        First Name'  />
                    <InputText type='text'  value={lastName} getValue={text=>this.setState({lastName:text})} className='form-control use_registration_Lname' id='Last_name' name='last_name' required='required' placeholder='Last Name'  />

                    <InputText type='email'  value={email} getValue={text=>this.setState({email:text})}  className='form-control use_registration_email' id='email' name='email' required='required' placeholder='Email Name'  />
                    
                    <PasswordInput  value={password} getValue={(text)=>this.setState({password:text})} id="create_password" name="create_password" placeholder="Create Password" required />
                    <PasswordInput  value={repeatpassword} getValue={(text)=>this.setState({repeatpassword:text})} id="repeat_password" name="repeat_password" placeholder="Repeat password" required />
                    <div className="input-box">
                 {/* Using the PhoneInput component */}
                    <label>Mobile Number</label>
                    <PhoneInput country={'ae'} value={phone} onChange={(e)=> console.log("e",e)} inputStyle={{ width: '100%' , marginBottom: '10px'}} />
    </div>


                        <div className="col-12 regisBtn">
                            
                                <button  className="registration-btn btn btn-primary" style={{marginBottom: '20px'}} onClick={this.signup} >
                                    Complete Registration 
                                </button>
                            
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>

    </>
  );
}
}


const mapStateToProps = state => {
  return {
    appData: state.appData,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    MERCHANT_SIGNUP: (data) => dispatch(MERCHANT_SIGNUP(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
