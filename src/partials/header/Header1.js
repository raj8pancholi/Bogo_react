import React from 'react'
import {Link} from 'react-router-dom'

// Import Css
import './Header1.css'


export default function Header1() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg" style={{"background-color":"#88c641"}}>
  <div className="container">
    <Link className="navbar-brand text-white" to="/">
        <img src="/images/Bogo-White 2.png" alt='' />
    </Link>
    <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto w-100 justify-content-end align-items-center">
        {/* <li class="nav-item active">
        <Link class="nav-link" to="/website/index">How it Works </Link>
      </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brand_ambassadors">Brand Ambassadors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">BOGO for Business</Link>
        </li>
        <li className="nav-item">
          <div className="btn-group">
            <button className="btn btn-primary dropdown-toggl navbar-drop-btn" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
              Dashboard
            </button>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
              <li>
                <i className="fa-solid fa-plus" />
                <Link className="dropdown-item" to="/merchant_campaign">Create voucher Campaign</Link>
              </li>
              <li>
                <i className="fa-solid fa-plus" />
                <Link className="dropdown-item" to="/abmassdors_compaign">Create Brand Ambassador</Link>
              </li>
              <li>
                <i className="fa-solid fa-bullhorn" />
                <Link className="dropdown-item" to="/campaignDashboard">Campaigns</Link>
              </li>
              <li>
                {/* <img src="/website/images/shop.png" alt="" class="img-fluid" /> */}
                <i className="fa-solid fa-code-branch" />
                <Link className="dropdown-item" to="/voucherDetails">Add  Branch</Link>
              </li>
              <li>
                {/* <img src="/website/images/shop.png" alt="" class="img-fluid" /> */}
                <i className="fa-solid fa-gear" />
                <Link className="dropdown-item" to="/account">Account</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="d-flex navbuttons">
            <a href='/' className="nav-link">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
