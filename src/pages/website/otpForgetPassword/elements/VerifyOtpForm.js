import React from 'react';
import { Link } from 'react-router-dom';
import OtpInput from './OtpInput';

export default function VerifyOtpForm({ id }) {
  return (
    <form id="addform" className="verify_otp_login_form">
      <input type="hidden" name="Id" id="Id" value={id} />
      <div className="verification-code">
        <OtpInput />

        <div className="otp-time">
          <span className="pe-4">(00:52)</span>
        </div>
      </div>

      <div className="resend_code_box">
        <span>Did not receive the code?</span>
        <Link to="#" className="resend_code_link">
          Resend Code
        </Link>
      </div>

      <div className="row">
        <div className="col-12 verify-btn-group">
          <Link to="/newPassword" style={{ color: 'white', textDecoration: 'none' }}>
            <button type="submit" className="btn btn-primary verify-btn">
              Verify
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
