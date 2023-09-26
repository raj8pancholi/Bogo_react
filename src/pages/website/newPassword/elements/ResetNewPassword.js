import React from 'react';
import { Link } from 'react-router-dom';

const ResetNewPassword = () => {
  return (
    <div className="forget_pass_row">
      <h4>Reset Password</h4>
      <form id="addform" className="forget_pass_form">
        <div className="row">
          <div className="col-12">
            <label htmlFor="email">New Password</label>
            <input type="text" className="form-control user_login_email" placeholder="New Password" />
          </div>

          <div className="col-12">
            <div className="user_login_btn-box">
              <Link to="/dashboard" className="user_login_btn btn">Submit</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetNewPassword;
