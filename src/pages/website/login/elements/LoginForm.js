import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {loginUser} from './../../../../redux/slice/authSlice';
import {useDispatch} from 'react-redux';


// Import components
import RegisterGroupBox from './RegisterGroupBox'


export default function LoginForm() {



    const dispatch = useDispatch();





    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };



    // form data
    const [formData, setFormData] = useState({
        email:'',
        password:'',
     });


    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }


    

    // Submit form
    const handlesubmit = async(e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
    }



  return (
    <>
        <div className="col-md-6">
            <div className="login-group-box">
                <h4>Login</h4>
                <form action="user_login" className="user_login_form" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control user_login_email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="col-6">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control user_login_pass"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                    />
                    <i
                        toggle="#password-field"
                        // className="fa-solid fa-eye-slash eyes-toggle-login_password"
                        className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password eyes-toggle-login_password`}
                        onClick={togglePasswordVisibility}
                    ></i>
                    </div>
                    <div className="user_login_forget_pass">
                    <Link to="/loginForgetPassword" className="forgot-password">
                        Forgot Password?
                    </Link>
                    </div>
                    <div className="user_login_btn-box">
                    <button className="user_login_btn btn">
                    Login
                    </button>
                    </div>
                </div>
                </form>
            </div>
            <RegisterGroupBox />
        </div>
    </>
  )
}
