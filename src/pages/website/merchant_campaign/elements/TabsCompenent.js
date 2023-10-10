import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'



// Import Components
import InputBoxComponent from '../../../../components/CommonComponent/InputBoxComponent.js'
import ComparerOffer from '../elements/tabcomponents/CompareOffer.js'
import DaysInput from '../elements/tabcomponents/DaysInput.js';
import ExcludeWeekends from './tabcomponents/ExcludeWeekends';
import Weekends from '../elements/tabcomponents/Weekends.js';
import ExcludePublicHolidays from './tabcomponents/ExcludePublicHolidays';
import TextAreaLabel from '../../../../components/CommonComponent/TextAreaLabel';
import HoursSection from '../elements/tabcomponents/HoursSection.js';
// import { colors } from 'react-select/dist/declarations/src/theme.js';





export default function TabsCompenent(props) {
  const {buy, setBuy, get, setGet, estSaving, setEstSaving, branch, setBranch,
    finePrint,setFinePrint, redemption, setRedemption, daysState , setOffers , offers
  } = props


  
  const [inputValue, setInputValue] = useState('');
 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 
   


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


  const [allday, setAllday] = useState(false);  

const updateAllday=(status)=>{
setAllday(status)
 
updateSunday(status, sundayState.openTime, sundayState.closeTime) 
updateMonday(status, mondayState.openTime, mondayState.closeTime) 

} 
    
      const days = [
        { day: 'all', label: 'All' },
        { day: 'sunday', label: 'Sun' },
        { day: 'monday', label: 'Mon' },
        { day: 'tuesday', label: 'Tue' },
        { day: 'wednesday', label: 'Wed' },
        { day: 'Thursday', label: 'Thu' },
        { day: 'friday', label: 'Fri' },
        { day: 'saturday', label: 'Sat' },
      ];



     

 

 
  
  // select box
  const colourOptions = [
    { value: 'Marina', label: 'Marina' },
    { value: 'Dhubai', label: 'Dhubai' },
    { value: 'Marina1', label: 'Marina1' }
  ]


  const MyComponent = () => (
    <Select closeMenuOnSelect={false}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    value={branch}
    onChange={setBranch}
    options={colourOptions}
    styles={{
    // Add a custom style to set the height of the input
    control: (provided) => ({
      ...provided,
      minHeight: '40px !important',
      backgroundColor: '#f7f7f7',
      border: 'none',
    }),
  }}
    />
  )




  // custom Hours
  const [excludeWeekends, setExcludeWeekends] = useState(false);

  const handleSwitchChange = () => {
    setExcludeWeekends((prevValue) => !prevValue);
  };

console.log('sundayState.status', sundayState.status)
  return (
    <div>
    <div className="offer-type">

    <ul id="tabs-nav">
          <li className={`offer-box ${offers === 1 ? 'activebox' : ''}`}  onClick={() => setOffers(1)}>
            <a href="#tab1" >
              <h3>BUY ONE <br/>
                GET ONE</h3>
            </a>
            
          </li>
          <li className={`offer-box ${offers === 2 ? 'activebox' : ''}`} onClick={() => setOffers(2)} >
            <a href="#tab2">
              <h3>BUY X <br/>
                GET Y</h3>
            </a>
            
          </li>
          <li className={`offer-box ${offers === 3 ? 'activebox' : ''}`} onClick={() => setOffers(3)} >
            <a href="#tab3">
              <h3>BUY BUNDLE <br/>
                GET UNIT</h3>
            </a>
            
          </li>
    </ul>



    {/* Offer form input 1 */}

          <div className=''>
            <ComparerOffer/> 
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="offer_form_section1">
                      <form method="" action="" className=" offer_input_box offer_input_box1">

                          <InputBoxComponent label="What should they buy?" type="text" id="" name="" value={buy}
                          required="required" 
                          maxlength="30"
                          placeholder="Example: Sushi Platter" 
                          getValue={setBuy}
                          />

                          <InputBoxComponent label="What will they get?" type="text" id="" name="" value={get} required="required"
                          maxlength="30" placeholder="AED" getValue={setGet} />

                          <InputBoxComponent label="Estimated Savings?" type="number" id="" name="" value={estSaving} required="required"  
                          placeholder="AED" getValue={setEstSaving} />

                          

                          {/* multi selector  */}
                          <div className="row ">
                            <div className="col-12">
                                <div className="input-box">
                                    <label htmlFor=" " className="label_text">Select Branch</label>
                                    <MyComponent  />
                                </div>
                            </div>
                          </div>

                          
                          <div className="row mt-3">
                              <div className="days-input-row">
                                  <label>Day of the week</label>
                                  <div className="checkbox-container">
                                  {/* {days.map(({ day, label }) => (
                                      <DaysInput
                                      key={day}
                                      day={day}
                                      id={day}
                                      label={label}
                                      selected={daysSelection[day]}
                                      onChange={handleDayChange}
                                      checked={sundayState.status}
                                      
                                      onClick={()=> updateSunday(!(sundayState.status), sundayState.openTime, sundayState.closeTime)} 
                                      />
                                  ))} */}

           <DaysInput day='All'  selected={allday} onChange={()=> updateAllday(!allday)} />
           <DaysInput day='Sunday'  selected={sundayState.status} onChange={()=> updateSunday(!(sundayState.status), sundayState.openTime, sundayState.closeTime)} />
           <DaysInput day='Monday'  selected={mondayState.status} onChange={()=> updateMonday(!(mondayState.status), mondayState.openTime, mondayState.closeTime)} /> 
           <DaysInput day='Tuesday'  selected={tuesdayState.status} onChange={()=> updateTuesday(!(tuesdayState.status), tuesdayState.openTime, tuesdayState.closeTime)} /> 
                                  </div>
                              </div>
                          </div>

                          <Weekends/>

                          <ExcludePublicHolidays/>

                          {/* <ExcludeWeekends /> */}
                          <div className="row">
                            <div className="offday_row">
                              <label htmlFor="">Customize Timing</label>
                              <div className='switchBox'>
                                <span> <i className="fa-regular fa-gem" style={{position:'inherit', color:'#F1C62E'}}></i> Gold Feature</span>
                                <label className="switch">
                                  <input
                                    type="checkbox"
                                    id="switchButton"
                                    checked={excludeWeekends}
                                    onChange={handleSwitchChange}
                                  />
                                  <span className="slider round"></span>
                                </label>
                              </div>
                              
                            </div>
                            {excludeWeekends && (
                              <div className="exclude_weekends_row" >
                                <HoursSection daysState={daysState} />
                              </div>
                            )}
                          </div>


                          <div className="row">
                              <h4 className="modificatin-notification">
                                  Campaign modifications take 24 hours to take effect.
                              </h4>
                          </div>


                         
                          <div className="row fine-print-row">
                            <label htmlFor="">Fine Print</label>
                            <div className="fine_print_box">
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" 
                              value={finePrint} 
                              onChange={(e) => setFinePrint(e.target.value)}
                              placeholder=""></textarea>
                            </div>
                          </div>

                          <div className="input-box mt-2">
                            <div className='d-flex justify-content-between align-center maxRedemption_group'>
                              <label htmlFor="">Maximum redemptions</label>
                              <span style={{color: "#F1C62E"}}> <i className="fa-regular fa-gem" style={{position: "inherit", color: "#F1C62E"}}></i> Gold Feature</span>
                            </div>
                            
                            <input type="number" name="" id="" placeholder="example:500" maxlength="30" className="form-control" required="" value={redemption} onChange={(e) => setRedemption(e.target.value)} />
                          </div>


                          <div className="row review_submit_btn_row">
                              <div className="next-btn-box review_submit_btn_box tab-pane active" >
                                  <button type="button" className="btn btn-primary btnNext review_submit_btn">
                                      <Link to="/review_campaign">Review and Submit</Link>
                                  </button>
                              </div>
                          </div>

                          
                          

                      </form>
                  </div>
            </div>
          </div>

  


    </div>
    </div>
  )
}
