import React, {useState} from 'react'
import WhatappInputbox from '../../../../../components/CommonComponent/WhatappInputbox';

export default function BusinessFormHoursSection(props) {
    const { daysState } = props; 

    const sundayState = daysState.sunday.state;
    const updateSunday = daysState.sunday.update; 

    const mondayState = daysState.monday.state;
    const updateMonday = daysState.monday.update;

    const tuesdayState = daysState.tuesday.state;
    const updateTuesday = daysState.tuesday.update;

    const wednesdayState = daysState.wednesday.state;
    const updateWednesday = daysState.wednesday.update;

    const thursdayState = daysState.thursday.state;
    const updateThursday = daysState.thursday.update;

    const fridayState = daysState.friday.state;
    const updateFriday = daysState.friday.update;

    const saturdayState = daysState.saturday.state;
    const updateSaturday = daysState.saturday.update;



  return (
    <>
      <div className="row form-input-box hour_operation">
      <div className="col-md-4 order-sm-1 col-lg-4 col-sm-12 ">
        <label htmlFor="inputhours" className="inputhours mt-2">Hours of Operation</label>
        <div className="row ">
            <div className="col-12 day-box day-box1">
                <span>Sunday </span>
                <label className="switch">
                    <input type="checkbox" checked={sundayState.status} onClick={()=> updateSunday(!(sundayState.status), sundayState.openTime, sundayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>
            </div>

            {sundayState.status && (
                <div className="col-12">
                
                <div className="hour-box hour-box1">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="sunday_from" placeholder="7:00 AM" onChange={(e)=> updateSunday(sundayState.status, e.target.value, sundayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                        To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="sunday_to" placeholder="10:30 PM"  onChange={(e)=> updateSunday(sundayState.status, sundayState.openTime, e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>

        <div className="row ">

        <div className="col-12 day-box day-box2">
            <span>Monday </span>
            <label className="switch">
            <input type="checkbox" checked={mondayState.status} onClick={()=> updateMonday(!(mondayState.status), mondayState.openTime, mondayState.closeTime)}  />
            <span className="slider round"></span>
        </label>

        
        </div>

        {mondayState.status && (
            <div className="col-12">
                <div className="hour-box hour-box2">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="monday_from" placeholder="7:00 AM" onChange={(e)=> updateMonday(mondayState.status, e.target.value, mondayState.closeTime )}/>
                        </div>
                        <div className="col-2 text-center to-text">
                        To
                        </div>
                        <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="monday_to" placeholder="10:30 PM" onChange={(e)=> updateMonday(mondayState.status, e.target.value, mondayState.closeTime )}/>
                        </div>
                    </div>
                </div>
            </div>
        )}
        


        </div>

        <div className="row ">

            <div className="col-12 day-box day-box3">
                <span>Tuesday </span>
                <label className="switch">
                    <input type="checkbox"  checked={tuesdayState.status} onClick={()=> updateTuesday(!(tuesdayState.status), tuesdayState.openTime, tuesdayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>

            </div>

            {tuesdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box3">
                    <div className="row">
                    <div className="col-5">
                        <input type="time" className="form-control" name="tuesday_from" placeholder="7:00 AM"/>
                    </div>
                    <div className="col-2 text-center to-text">
                        To
                    </div>
                    <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="tuesday_to" placeholder="10:30 PM"/>
                    </div>
                    </div>
                </div>
                </div>
            )}

            


        </div>

        <div className="row">

            <div className="col-12 day-box day-box4">
                <span>Wednesday </span>
                <label className="switch">
                    <input type="checkbox" checked={wednesdayState.status} onClick={()=> updateWednesday(!(wednesdayState.status), wednesdayState.openTime, wednesdayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>

            
            </div>

            {wednesdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box4">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="wednesday_from" placeholder="7:00 AM"/>
                        </div>
                        <div className="col-2 text-center to-text">
                            To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="wednesday_to" placeholder="10:30 PM"/>
                        </div>
                    </div>
                </div>
            </div>
            )}
            


        </div>

        <div className="row ">
            <div className="col-12 day-box day-box5">
                <span>Thursday </span>
                <label className="switch">
                    <input type="checkbox" checked={thursdayState.status} onClick={()=> updateThursday(!(thursdayState.status), thursdayState.openTime, thursdayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>
            </div>

            {thursdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box5">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="thursday_from" placeholder="7:00 AM"/>
                        </div>
                        <div className="col-2 text-center to-text">
                            To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="thursday_to" placeholder="10:30 PM" />
                        </div>
                    </div>
                </div>
            </div>
            )}

            
        </div>

        <div className="row ">

            <div className="col-12 day-box day-box6">
                <span>Friday </span>
                <label className="switch">
                    <input type="checkbox"  checked={fridayState.status} onClick={()=> updateFriday(!(fridayState.status), fridayState.openTime, fridayState.closeTime)}  />
                    <span className="slider round"></span>
                </label>
            </div>


            {fridayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box6">
                    <div className="row">
                    <div className="col-5">
                        <input type="time" className="form-control" name="friday_from" placeholder="7:00 AM"/>
                    </div>
                    <div className="col-2 text-center to-text">
                        To
                    </div>
                    <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="friday_to" placeholder="10:30 PM"/>
                    </div>
                    </div>
                </div>
            </div>
            )}

            
        </div>

        <div className="row">

            <div className="col-12 day-box day-box7">
                <span>Saturday

                </span>
                <label className="switch">
                    <input type="checkbox"  checked={saturdayState.status} onClick={()=> updateSaturday(!(saturdayState.status), saturdayState.openTime, saturdayState.closeTime)}/>
                    <span className="slider round"></span>
                </label>
            </div>


            {saturdayState.status && (
                <div className="col-12">
                <div className="hour-box hour-box7">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="saturday_from" placeholder="7:00 AM"/>
                        </div>
                        <div className="col-2 text-center to-text">
                            To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="saturday_to" placeholder="10:30 PM"/>
                        </div>
                    </div>
                </div>
            </div>
            )}

            
        </div>

        <div className="row rating-row">
            <div className="col-md-12 col-sm-12">
            <p className="m-0">Rating</p>
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            <i className="fa-regular fa-star" aria-hidden="true"></i>
            </div>
        </div>
      </div>

      <div className="col-md-4 order-sm-2 col-lg-4 col-sm-12 whatapp_row ">
               <WhatappInputbox/>
      </div>

      <div className="col-md-4 order-sm-3 col-lg-4 col-sm-12  black-div ">
      </div>
    </div>
    </>
  )
}
