import React from 'react';
import InputBox from './InputBox ';
import RobotBox from './RobotBox';

const BrochureForm = () => {
  return (
    <form id="AddFormEmail" className="brouchure-form">
      <div className="row">
        <div className="col-12">
          <InputBox label="Full Name" type="text" id="username" name="username" required />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <InputBox label="Email address" type="email" id="useremail" name="useremail" required />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <RobotBox />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button type="submit" className="btn brochure-btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BrochureForm;
