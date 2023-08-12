import React from 'react'

function TimeSection() {


  return (
    <>
      <div className="time_address_box">

        <div className="hours_box">
          <strong>  Hours: </strong>
          <div className="day_boxes">
            <span>Monday</span>
            <span> 12pm-2am</span>
          </div>
          <div className="day_boxes">
            <span>Tuesday</span>
            <span> 12pm-2am</span>
          </div>
          <div className="day_boxes">
            <span>Wednesday</span>
            <span> 12pm-2am</span>
          </div>
          <div className="day_boxes">
            <span>Thursday</span>
            <span> 12pm-2am</span>
          </div>
          <div className="day_boxes">
            <span>Friday</span>
            <span> 12pm-2am</span>
          </div>
          <div className="day_boxes">
            <span>Saturday</span>
            <span> 12pm-2am</span>
          </div>
          <div className="day_boxes">
            <span>Sunday</span>
            <span> 12pm-2am</span>
          </div>
        </div>
        <div className="address_box mt-2">
          <p>
            <strong>Address: </strong>
            1st floor, Emirates Towers Hotel,  Trade Centre 2
            Dubai - United Arab Emirates
          </p>
          <p><strong>Postal Code: </strong> 54620</p>

        </div>

      </div>

    </>
  )
}

export default TimeSection
