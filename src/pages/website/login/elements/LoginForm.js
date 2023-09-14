import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector from react-redux
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../../../redux/slice/authSlice';

// Import components
import RegisterGroupBox from './RegisterGroupBox'

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };



    // Dispatch the loginUser action when the form is submitted

    const dispatch = useDispatch(); // Get the dispatch function from Redux
    const navigate = useNavigate(); // Get the history object from React Router

   
    const error = useSelector((state) => state.auth.error); // Get the error state from Redux

    const handleSubmit = async(e) => {
       try{

            e.preventDefault(); // Prevent the default form submission behavior
            // Dispatch the loginUser action with the user's email and password
            const loginStatus = await dispatch(loginUser({ email, password })).unwrap();
            console.log("loginStatus", loginStatus);
            navigate('/dashboard');
                 

       }catch(error){
            console.log(error);
       }
    };



  return (
    <>
        <div className="col-md-6">
            <div className="login-group-box">
                <h4>Login</h4>
                
                <form  className="user_login_form" onSubmit={handleSubmit}> 
                <div className="row">
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control user_login_email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div className="col-6">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control user_login_pass"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                    <i
                        toggle="#password-field"
                        // className="fa-solid fa-eye-slash eyes-toggle-login_password"
                        className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password eyes-toggle-login_password`}
                        onClick={togglePasswordVisibility}
                    ></i>
                    </div>
                    <div className="user_login_forget_pass">
                    {error && <span className="error-message">Incorrect Email and Password</span>}
                    <Link to="/loginForgetPassword" className="forgot-password">
                        Forgot Password?
                    </Link>
                    </div>
                    <div className="user_login_btn-box">
                        <button type="submit" className="user_login_btn btn" >
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
