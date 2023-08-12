import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <div className="form_privacy_policy_section">
          <p>
            By creating an account, you agree to BOGO’s
            <Link to="/TermsConditions">Terms & Conditions</Link> and{' '}
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
