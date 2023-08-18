import React, {useState} from 'react'

export default function BusinessFormHoursSection() {

    // Hours Script
    const [showSundayBox, setShowSundayBox] = useState(false);
    const [showMondayBox, setShowMondayBox] = useState(false);
    const [showTuesdayBox, setShowTuesdayBox] = useState(false);
    const [showWednesdayBox, setShowWednesdayBox] = useState(false);
    const [showThursdayBox, setShowThursdayBox] = useState(false);
    const [showFridayBox, setShowFridayBox] = useState(false);
    const [showSaturdayBox, setShowSaturdayBox] = useState(false);






  return (
    <>
      <div className="row form-input-box hour_operation">
      <div className="col-md-5 col-lg-4 col-sm-12">
        <label htmlFor="inputhours" className="inputhours">Hours of Operation</label>
        <div className="row ">
            <div className="col-12 day-box day-box1">
                <span>Sunday </span>
                <label className="switch">
                    <input type="checkbox" onClick={()=> setShowSundayBox(!showSundayBox)}  />
                    <span className="slider round"></span>
                </label>
            </div>

            {showSundayBox && (
                <div className="col-12">
                
                <div className="hour-box hour-box1">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="sunday_from" placeholder="7:00 AM"/>
                        </div>
                        <div className="col-2 text-center to-text">
                        To
                        </div>
                        <div className="col-5 pr-0">
                            <input type="time" className="form-control" name="sunday_to" placeholder="10:30 PM"/>
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
            <input type="checkbox" onClick={()=> setShowMondayBox(!showMondayBox)} />
            <span className="slider round"></span>
        </label>

        
        </div>

        {showMondayBox && (
            <div className="col-12">
                <div className="hour-box hour-box2">
                    <div className="row">
                        <div className="col-5">
                            <input type="time" className="form-control" name="monday_from" placeholder="7:00 AM"/>
                        </div>
                        <div className="col-2 text-center to-text">
                        To
                        </div>
                        <div className="col-5 pr-0">
                        <input type="time" className="form-control" name="monday_to" placeholder="10:30 PM"/>
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
                    <input type="checkbox" onClick={()=> setShowTuesdayBox(!showTuesdayBox)}/>
                    <span className="slider round"></span>
                </label>

            </div>

            {showTuesdayBox && (
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
                    <input type="checkbox" onClick={()=> setShowWednesdayBox(!showWednesdayBox)} />
                    <span className="slider round"></span>
                </label>

            
            </div>

            {showWednesdayBox && (
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
                    <input type="checkbox" onClick={()=> setShowThursdayBox(!showThursdayBox)}/>
                    <span className="slider round"></span>
                </label>
            </div>

            {showThursdayBox && (
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
                    <input type="checkbox" onClick={()=> setShowFridayBox(!showFridayBox)}/>
                    <span className="slider round"></span>
                </label>
            </div>


            {showFridayBox && (
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
                    <input type="checkbox" onClick={()=> setShowSaturdayBox(!showSaturdayBox)} value="false"/>
                    <span className="slider round"></span>
                </label>
            </div>


            {showSaturdayBox && (
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

      <div className="col-md-3 col-lg-4 col-sm-12 black-div"></div>

      <div className="col-md-4 col-lg-4 col-sm-12">
        
      </div>
    </div>
    </>
  )
}
