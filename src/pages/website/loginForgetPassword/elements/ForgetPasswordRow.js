import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPasswordRow = () => {
  return (
    <div className="forget_pass_row">
      <h4>Forgot Password?</h4>
      <form id="addform" className="forget_pass_form">
        <div className="row">
          <div className="col-12">
            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control user_login_email" placeholder="Email address" />
          </div>

          <div className="col-12">
            <div className="user_login_btn-box">
              <Link to="/website/pages/forget_password_Otp" className="user_login_btn btn">Submit</Link>
            </div>
          </div>

          <div className="col-12">
            <div className="backtoLogin">
              <Link to="/login">Back To Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordRow;
