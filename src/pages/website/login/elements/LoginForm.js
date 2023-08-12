import React, {useState} from 'react'
import { Link } from 'react-router-dom';

// Import components
import RegisterGroupBox from './RegisterGroupBox'

export default function LoginForm() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };



  return (
    <>
        <div className="col-md-6">
            <div className="login-group-box">
                <h4>Login</h4>
                <form action="user_login" className="user_login_form">
                <div className="row">
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control user_login_email"
                        placeholder="Email address"
                    />
                    </div>
                    <div className="col-6">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control user_login_pass"
                        id="exampleFormControlInput1"
                        placeholder="password"
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
                        Forgot password?
                    </Link>
                    </div>
                    <div className="user_login_btn-box">
                    <button className="user_login_btn btn">Login</button>
                    </div>
                </div>
                </form>
            </div>
            <RegisterGroupBox />
        </div>
    </>
  )
}
