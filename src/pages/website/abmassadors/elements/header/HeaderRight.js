import React, { useState } from 'react'
import Select from 'react-select'


//import components
import InputBox from '../InputBoxComponent'
import MobileInput from '../../../../../components/CommonComponent/MobileInputbox'
import SocialMediaInput from './SocialMediaInput'
import Recapture from '../../../../../components/CommonComponent/Recapture'


const HeaderRight = () => {

    // select box
    const colourOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      const MyComponent = () => (
        <Select closeMenuOnSelect={false}
        defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={colourOptions}
        styles={{
        // Add a custom style to set the height of the input
        control: (provided) => ({
          ...provided,
          minHeight: '40px !important',
        }),
      }}
        />
      )



    // password type change

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    // confirm password type change

    const [ConfirmpasswordVisible, ConfirmsetPasswordVisible] = useState(false);

    const toggleConfirmPasswordVisibility = () => {
        ConfirmsetPasswordVisible(!ConfirmpasswordVisible);
    };



    return(

        <div className="brand-header-right-section">
            <div className="interest-heading-box">
                <h1>
                <img src="/images/interest-icon.png" alt="" className="img-fluid" />
                Submit your interest
                </h1>
            </div>
            <div className="interest-form-box">
                <form id="addformBrand" className="interst-form">
                <div className="row">
                    <div className="col-12">
                    <div className="input-box selectpicker1">
                        <label htmlFor="sub-category">Type of Influencer:</label>
                        {/* <select className="selectpicker form-control multi-select-input" multiple aria-label="Default select example" data-live-search="true" name="typeo_ofInfluencer">
                    
                        <option value=" ">demo1</option>
                        <option value=" ">demo2</option>
                        <option value=" ">demo3</option>
                        <option value=" ">demo4</option>
                        </select> */}
                        <MyComponent />

                    </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12">
                    <div className="input-box full-name-box">
                        <label htmlFor>Full Name</label>
                        <input type="text" name="name" id="name" className="form-control" required />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <InputBox label="Email address" type="email" name="email" id="email" required />
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                    <div className="input-box">
                        <div className="row">
                        <label htmlFor="inputcity">Social media</label>
                        <div className="col-12 media-select">
                            <div className="apto-dropdown-wrapper">
                            <div className="apto-trigger-dropdown" onClick={()=> setSocialMedia(!socialMedia)}>
                                <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-messenger" className="svg-inline--fa fa-facebook-messenger fa-w-14 fa-network" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" title="messenger">
                                <path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z" />
                                </svg>
                                <i className="fas fa-caret-down" />
                            </div>
                            <div className="dropdown-menu-box social-media-icon-btn" data-selected="messenger">
                                <button type="button" value="messenger" tabIndex={0} className="dropdown-item">
                                <svg style={{"color":"blue"}} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="blue" />
                                </svg>
                                Facebook
                                </button>
                                <button type="button" value="whatsapp" tabIndex={0} className="dropdown-item">
                                <svg viewBox="0 0 200 200">
                                    <defs>
                                    <linearGradient id="gradient1" x1=".8" y1=".8" x2={0}>
                                        <stop offset={0} stopColor="#c92bb7" />
                                        <stop offset={1} stopColor="#3051f1" />
                                    </linearGradient>
                                    <radialGradient id="gradient2" cx=".2" cy={1} r="1.2">
                                        <stop offset={0} stopColor="#fcdf8f" />
                                        <stop offset=".1" stopColor="#fbd377" />
                                        <stop offset=".25" stopColor="#fa8e37" />
                                        <stop offset=".35" stopColor="#f73344" />
                                        <stop offset=".65" stopColor="#f73344" stopOpacity={0} />
                                    </radialGradient>
                                    <rect id="logoContainer" x={0} y={0} width={200} height={200} rx={50} ry={50} />
                                    </defs>
                                    <use xlinkHref="#logoContainer" fill="url(#gradient1)" />
                                    <use xlinkHref="#logoContainer" fill="url(#gradient2)" />
                                    <rect x={35} y={35} width={130} height={130} rx={30} ry={30} fill="none" stroke="#fff" strokeWidth={13} />
                                    <circle cx={100} cy={100} r={32} fill="none" stroke="#fff" strokeWidth={13} />
                                    <circle cx={140} cy={62} r={9} fill="#fff" />
                                </svg>
                                Instagram
                                </button>
                                <button type="button" value="telegram" tabIndex={0} className="dropdown-item">
                                <svg style={{"color":"red"}} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="red" />
                                </svg>
                                Youtube
                                </button>
                                <button type="button" value="telegram" tabIndex={0} className="dropdown-item">
                                <svg id="changeColor " fill="#DC7633" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={200} zoomAndPan="magnify" viewBox="0 0 375 374.999991" height={200}>
                                    <defs>
                                    &lt; path id="pathAttribute" d="M 8.917969
                                    7.773438 L 367.417969 7.773438 L 367.417969
                                    366.273438 L 8.917969 366.273438 Z M 8.917969
                                    7.773438 " /&gt;
                                    </defs>
                                    <g>
                                    <path id="pathAttribute" d="M 344.105469 366.273438 L 32.230469 366.273438 C 19.386719 366.273438 8.917969 355.808594 8.917969 342.960938 L 8.917969 31.085938 C 8.917969 18.242188 19.386719 7.773438 32.230469 7.773438 L 344.105469 7.773438 C 356.949219 7.773438 367.417969 18.242188 367.417969 31.085938 L 367.417969 342.960938 C 367.417969 355.808594 356.949219 366.273438 344.105469 366.273438 " fillOpacity={1} fillRule="nonzero" fill="#000000" />
                                    </g>
                                    <g id="inner-icon" transform="translate(90,80) ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height={200} width={200}>
                                        <rect width={256} height={256} fill="none" />
                                        <path d="M168,106a95.9,95.9,0,0,0,56,18V84a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.3V89.1A68,68,0,1,0,168,156Z" fill="#ffffff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={12} id="mainIconPathAttribute" />
                                    </svg>
                                    </g>
                                </svg>
                                Tiktok
                                </button>
                                <button type="button" value="telegram" tabIndex={0} className="dropdown-item">
                                <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                    .st0 {\n                                      fill: #ffffff;\n                                    }\n                                    .st1 {\n                                      fill: #3a559f;\n                                    }\n                                    .st2 {\n                                      fill: #f4f4f4;\n                                    }\n                                    .st3 {\n                                      fill: #ff0084;\n                                    }\n                                    .st4 {\n                                      fill: #0063db;\n                                    }\n                                    .st5 {\n                                      fill: #00aced;\n                                    }\n                                    .st6 {\n                                      fill: #ffec06;\n                                    }\n                                    .st7 {\n                                      fill: #ff0000;\n                                    }\n                                    .st8 {\n                                      fill: #25d366;\n                                    }\n                                    .st9 {\n                                      fill: #0088ff;\n                                    }\n                                    .st10 {\n                                      fill: #314358;\n                                    }\n                                    .st11 {\n                                      fill: #ee6996;\n                                    }\n                                    .st12 {\n                                      fill: #01aef3;\n                                    }\n                                    .st13 {\n                                      fill: #fffeff;\n                                    }\n                                    .st14 {\n                                      fill: #f06a35;\n                                    }\n                                    .st15 {\n                                      fill: #00adef;\n                                    }\n                                    .st16 {\n                                      fill: #1769ff;\n                                    }\n                                    .st17 {\n                                      fill: #1ab7ea;\n                                    }\n                                    .st18 {\n                                      fill: #6001d1;\n                                    }\n                                    .st19 {\n                                      fill: #e41214;\n                                    }\n                                    .st20 {\n                                      fill: #05ce78;\n                                    }\n                                    .st21 {\n                                      fill: #7b519c;\n                                    }\n                                    .st22 {\n                                      fill: #ff4500;\n                                    }\n                                    .st23 {\n                                      fill: #00f076;\n                                    }\n                                    .st24 {\n                                      fill: #ffc900;\n                                    }\n                                    .st25 {\n                                      fill: #00d6ff;\n                                    }\n                                    .st26 {\n                                      fill: #ff3a44;\n                                    }\n                                    .st27 {\n                                      fill: #ff6a36;\n                                    }\n                                    .st28 {\n                                      fill: #0061fe;\n                                    }\n                                    .st29 {\n                                      fill: #f7981c;\n                                    }\n                                    .st30 {\n                                      fill: #ee1b22;\n                                    }\n                                    .st31 {\n                                      fill: #ef3561;\n                                    }\n                                    .st32 {\n                                      fill: none;\n                                      stroke: #ffffff;\n                                      stroke-width: 2;\n                                      stroke-miterlimit: 10;\n                                    }\n                                    .st33 {\n                                      fill: #0097d3;\n                                    }\n                                    .st34 {\n                                      fill: #01308a;\n                                    }\n                                    .st35 {\n                                      fill: #019cde;\n                                    }\n                                    .st36 {\n                                      fill: #ffd049;\n                                    }\n                                    .st37 {\n                                      fill: #16a05d;\n                                    }\n                                    .st38 {\n                                      fill: #4486f4;\n                                    }\n                                    .st39 {\n                                      fill: none;\n                                    }\n                                    .st40 {\n                                      fill: #34a853;\n                                    }\n                                    .st41 {\n                                      fill: #4285f4;\n                                    }\n                                    .st42 {\n                                      fill: #fbbc05;\n                                    }\n                                    .st43 {\n                                      fill: #ea4335;\n                                    }\n                                  " }} />
                                    <path className="st6" d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z" />
                                    <g>
                                        <path className="st0" d="M16.1,28.5c-0.7,0-1.4-0.1-2.1-0.3c-0.8-0.3-1.6-0.7-2.2-1.1c-0.7-0.4-1.5-0.6-2.4-0.6l-0.1,0 c-0.2,0-0.4,0-0.7-0.1l-0.2,0c-0.7-0.1-1.6-0.4-1.8-1.6c-0.1,0-0.2-0.1-0.3-0.1l-0.5-0.2c-0.4-0.2-0.8-0.3-1.2-0.5 c-1-0.5-1.1-1.3-1.1-1.6c0-0.3,0.1-1.1,1.1-1.7c1.2-0.6,2-1.3,2.6-2c0.5-0.5,0.8-1.1,1-1.7c-0.2-0.1-0.3-0.2-0.4-0.3 c-0.3-0.2-0.5-0.4-0.8-0.5c-0.3-0.2-0.5-0.4-0.8-0.7c-0.7-0.7-0.8-1.6-0.4-2.5c0.4-0.8,1.1-1.3,2-1.3c0.1,0,0.2,0,0.3,0 c0.2,0,0.4,0.1,0.6,0.1c0-0.7,0-1.4,0.1-2.1c0.2-2.5,1.6-4.4,3.9-5.5C14,3.6,14.7,3.5,16,3.5c2.3,0,4.2,0.8,5.7,2.4 c1,1,1.5,2.3,1.7,3.7c0.1,0.7,0.1,1.4,0.1,2.2c0.2,0,0.5-0.1,0.7-0.1c0,0,0,0,0,0c1,0,1.8,0.6,2.1,1.4c0.3,0.9,0.1,1.9-0.6,2.5 c-0.4,0.3-0.7,0.6-1.1,0.9l-0.3,0.2c-0.1,0.1-0.3,0.2-0.4,0.3c0,0-0.1,0-0.1,0.1c0.4,1,1,1.9,2,2.6c0.3,0.2,0.7,0.5,1.1,0.7 c0.2,0.1,0.5,0.3,0.7,0.4c1,0.6,1,1.4,0.9,1.8c-0.1,0.6-0.6,1.2-1.2,1.5c-0.6,0.2-1.2,0.5-1.8,0.7c-0.2,0.9-0.9,1.6-1.9,1.6l-0.1,0 c-0.2,0-0.4,0.1-0.7,0.1l-0.2,0c-1,0-1.9,0.3-2.7,0.9C18.7,28.1,17.4,28.5,16.1,28.5z" />
                                        <path d="M16,4C16,4,16,4,16,4c2.2,0,3.9,0.8,5.3,2.2c0.9,1,1.4,2.1,1.6,3.5c0.1,0.9,0.1,1.8,0.1,2.8c0.1,0,0.1,0,0.2-0.1 c0.4-0.1,0.7-0.2,1.1-0.2c0,0,0,0,0.1,0c0.7,0,1.3,0.4,1.5,1.1c0.3,0.7,0.1,1.5-0.5,1.9c-0.4,0.3-0.7,0.6-1.1,0.8L24,16.3 c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1,0,0.1c0.4,1.2,1.1,2.2,2.2,3 c0.3,0.3,0.7,0.5,1.1,0.7c0.2,0.1,0.5,0.3,0.7,0.4c0.7,0.4,0.8,0.9,0.7,1.3c-0.1,0.5-0.4,0.9-0.9,1.1c-0.7,0.3-1.4,0.6-2.1,0.8 c-0.1,0.9-0.7,1.5-1.5,1.5c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0.1-0.6,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0c-1.1,0-2.1,0.3-3,0.9 c-1.1,0.7-2.3,1.1-3.5,1.1c-0.6,0-1.3-0.1-2-0.3c-0.8-0.2-1.5-0.7-2.1-1c-0.8-0.5-1.6-0.7-2.6-0.7c0,0-0.1,0-0.1,0 c-0.2,0-0.4,0-0.6,0l-0.2,0c-0.8-0.1-1.3-0.4-1.5-1.5c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1L6,24c-0.4-0.1-0.8-0.3-1.1-0.5 C4.1,23.2,4,22.6,4,22.3c0-0.3,0.1-0.8,0.8-1.2c1.2-0.7,2.1-1.3,2.8-2.1c0.6-0.7,1-1.4,1.2-2.1c0,0,0,0,0,0 c-0.3-0.2-0.5-0.4-0.8-0.5c-0.3-0.2-0.5-0.3-0.7-0.5c-0.2-0.2-0.5-0.4-0.7-0.7c-0.5-0.5-0.6-1.3-0.3-1.9c0.3-0.6,0.9-1,1.5-1 c0.1,0,0.2,0,0.2,0c0.4,0.1,0.8,0.2,1.1,0.3c0,0,0,0,0,0c0-0.9,0-1.8,0-2.7c0.2-2.3,1.5-4.1,3.6-5.1C14.1,4.1,14.7,4,16,4 C16,4,16,4,16,4 M16,3L16,3l-0.1,0c-1.3,0-2.1,0.1-3.5,0.8C9.9,5,8.4,7.1,8.2,9.7c0,0.5-0.1,1-0.1,1.5c-0.1,0-0.2,0-0.4,0 c-1,0-1.9,0.6-2.4,1.6c-0.5,1-0.3,2.2,0.5,3.1c0.3,0.3,0.6,0.6,0.9,0.8C7,16.8,7.2,17,7.5,17.2c0,0,0.1,0.1,0.1,0.1 c-0.2,0.4-0.5,0.8-0.8,1.2c-0.6,0.7-1.4,1.3-2.5,1.9C3.1,20.9,3,21.9,3,22.4c0,0.9,0.5,1.6,1.4,2c0.4,0.2,0.9,0.4,1.2,0.5l0.5,0.2 c0,0,0.1,0,0.1,0c0.5,1.4,1.7,1.7,2.2,1.7l0.2,0C8.8,26.9,9,27,9.3,27l0.1,0c0.8,0,1.5,0.2,2.1,0.6c0.6,0.4,1.4,0.9,2.3,1.1 c0.8,0.2,1.5,0.3,2.3,0.3c1.4,0,2.8-0.4,4.1-1.3c0.8-0.5,1.6-0.8,2.5-0.8l0.1,0l0,0l0,0c0.3,0,0.5,0,0.7-0.1c0.1,0,0.1,0,0.1,0 c1.1-0.1,1.9-0.8,2.3-1.7c0.6-0.2,1.1-0.4,1.6-0.6c0.8-0.3,1.4-1.1,1.5-1.9c0.1-0.4,0.1-1.5-1.2-2.3c-0.2-0.2-0.5-0.3-0.7-0.4 c-0.4-0.2-0.7-0.4-1-0.7c-0.8-0.6-1.3-1.3-1.7-2c0.1,0,0.1-0.1,0.2-0.1l0.3-0.2c0.4-0.3,0.8-0.6,1.1-0.9c0.9-0.7,1.2-1.9,0.8-3 c-0.4-1.1-1.4-1.8-2.5-1.8l-0.1,0c-0.1,0-0.1,0-0.2,0c0-0.6-0.1-1.1-0.1-1.7c-0.2-1.5-0.8-2.9-1.8-4C20.5,3.9,18.5,3,16,3L16,3 L16,3z" />
                                    </g>
                                    </g>
                                </svg>
                                Snapchat
                                </button>
                            </div>
                            </div>
                            <input type="text" name="Social_media" id className="form-control media-url" required />
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
                <SocialMediaInput/>
                <div className="row">
                    <div className="col-12">
                        <MobileInput/>
                        {/* <InputBox label="Mobile Number" type="text" name="mobile" id="mobile_code" placeholder="Phone Number" required /> */}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                    <div className="input-box password-input-box">
                        <label htmlFor>Create Password</label>
                        <input type={passwordVisible ? 'text' : 'password'} className="form-control use_registration_password" id="password" name="password" placeholder="Create Password" />
                        <i
                            className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="input-box password-input-box">
                        <label htmlFor>Repeat Password</label>
                        <input type={ConfirmpasswordVisible ? 'text' : 'password'}  className="form-control use_registration_Rpassword" id="repeat_password" name="repeat_password" placeholder="Repeat password" />
                        <i
                            className={`fa-solid ${ConfirmpasswordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                            onClick={toggleConfirmPasswordVisibility}
                        />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    {/* <div className="robot-box">
                        <span className="msg-error error" />
                        <div id="recaptcha" className="g-recaptcha" data-sitekey="6Ld0lZEUAAAAAJAK1wPWcVxwOlc1qgFcSIcU1das" data-callback="aaa" />
                    </div> */}
                    <Recapture/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <button type="submit" className="btn interest-form-btn">
                        Submit
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
    );
}



export default HeaderRight;