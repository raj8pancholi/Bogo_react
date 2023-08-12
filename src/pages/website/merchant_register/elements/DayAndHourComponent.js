import React from 'react';

const DayAndHourComponent = ({ day, checked, fromName, toName }) => (
  <div className={`col-12 day-box day-box-${day.toLowerCase()}`}>
    <span>{day}</span>
    <label className="switch">
      <input type="checkbox" checked={checked} />
      <span className="slider round" />
    </label>
    <div className={`hour-box hour-box-${day.toLowerCase()}`}>
      <div className="row">
        <div className="col-5">
          <input type="time" className="form-control" name={fromName} placeholder="7:00 AM" />
        </div>
        <div className="col-2 text-center to-text">To</div>
        <div className="col-5">
          <input type="time" className="form-control" name={toName} placeholder="10:30 PM" />
        </div>
      </div>
    </div>
  </div>
);

export default DayAndHourComponent;
