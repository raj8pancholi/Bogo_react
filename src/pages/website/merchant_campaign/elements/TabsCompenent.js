import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



// Import Components
import InputBoxComponent from '../../../../components/CommonComponent/InputBoxComponent.js'
import ComparerOffer from '../elements/tabcomponents/CompareOffer.js'
import SingleSelector from './tabcomponents/SingleSelector';
import DaysInput from '../elements/tabcomponents/DaysInput.js';
import ExcludeWeekends from './tabcomponents/ExcludeWeekends';
import Weekends from '../elements/tabcomponents/Weekends.js';
import ExcludePublicHolidays from './tabcomponents/ExcludePublicHolidays';
import TextAreaLabel from '../../../../components/CommonComponent/TextAreaLabel'
// import { colors } from 'react-select/dist/declarations/src/theme.js';





export default function TabsCompenent() {

    // Days Check box
    const [daysSelection, setDaysSelection] = useState({
        all: false,
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        Thursday: false,
        friday: false,
        saturday: false,
      });
    
      const handleDayChange = (day) => {
        if (day === 'all') {
          if (!daysSelection.all) {
            // Select all days
            setDaysSelection({
              all: true,
              sunday: true,
              monday: true,
              tuesday: true,
              wednesday: true,
              Thursday: true,
              friday: true,
              saturday: true,
            });
          } else {
            // Unselect all days
            setDaysSelection({
              all: false,
              sunday: false,
              monday: false,
              tuesday: false,
              wednesday: false,
              Thursday: false,
              friday: false,
              saturday: false,
            });
          }
        } else {
          setDaysSelection((prevSelection) => ({
            ...prevSelection,
            [day]: !prevSelection[day],
            all: false, // Unselect "All" if any other checkbox is unchecked
          }));
        }
      };
    
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



    
    

    // Active TAb //


    const [selectedTab, setSelectedTab] = useState(1);

    const buttonOption = (id) => {
      setSelectedTab(id);
    };


  return (
    <div>
    <div className="offer-type">

    <ul id="tabs-nav">
          <li className={`offer-box ${selectedTab === 1 ? 'activebox' : ''}`}  onClick={() => buttonOption(1)}>
            <a href="#tab1" >
              <h3>BUY ONE <br/>
                GET ONE</h3>
            </a>
            
          </li>
          <li className={`offer-box ${selectedTab === 2 ? 'activebox' : ''}`} onClick={() => buttonOption(2)} >
            <a href="#tab2">
              <h3>BUY X <br/>
                GET Y</h3>
            </a>
            
          </li>
          <li className={`offer-box ${selectedTab === 3 ? 'activebox' : ''}`} onClick={() => buttonOption(3)} >
            <a href="#tab3">
              <h3>BUY BUNDLE <br/>
                GET UNIT</h3>
            </a>
            
          </li>
    </ul>



    {/* Offer form input 1 */}
    {selectedTab === 1 && (
          <div className=''>
            <ComparerOffer/> 
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div class="offer_form_section1">
                      <form method="" action="" class=" offer_input_box offer_input_box1">

                          <InputBoxComponent label="What should they buy?" type="text" id="" name="" value="" required="required" placeholder="Example: Sushi Platter" />

                          <InputBoxComponent label="What will they get?" type="text" id="" name="" value="" required="required" placeholder="AED" />

                          <InputBoxComponent label="Estimated Savings?" type="text" id="" name="" value="" required="required" placeholder="AED" />

                          <SingleSelector id="subcategory" label='Select Branch' />

                          

                          <div className="row mt-3">
                              <div className="days-input-row">
                                  <label>Day of the week</label>
                                  <div className="checkbox-container">
                                  {days.map(({ day, label }) => (
                                      <DaysInput
                                      key={day}
                                      day={day}
                                      id={day}
                                      label={label}
                                      selected={daysSelection[day]}
                                      onChange={handleDayChange}
                                      />
                                  ))}
                                  </div>
                              </div>
                          </div>

                          <Weekends/>

                          <ExcludePublicHolidays/>

                          <ExcludeWeekends />

                          <div class="row">
                              <h4 class="modificatin-notification">
                                  Campaign modifications take 24 hours to take effect.
                              </h4>
                          </div>


                          <TextAreaLabel label='Fine Print' placeholder='' rows='5'/>

                          <div className="input-box mt-2">
                            <div className='d-flex justify-content-between align-center maxRedemption_group'>
                              <label htmlFor="">Maximum redemptions</label>
                              <span style={{color: "#F1C62E"}}> <i className="fa-regular fa-gem" style={{position: "inherit", color: "#F1C62E"}}></i> Gold Feature</span>
                            </div>
                            
                            <input type="text" name="" id="" placeholder="example:500" class="form-control" required="" value=""/>
                          </div>


                          <div class="row review_submit_btn_row">
                              <div class="next-btn-box review_submit_btn_box tab-pane active" >
                                  <button type="button" class="btn btn-primary btnNext review_submit_btn">
                                      <Link to="/review_campaign">Review and Submit</Link>
                                  </button>
                              </div>
                          </div>

                          
                          

                      </form>
                  </div>
            </div>
          </div>

          
    )}

    {/* Offer form input 2 */}
    {selectedTab === 2 && (
      <div className=''>
            <ComparerOffer/>         
            <div class="offer_form_section1">
                <form method="" action="" class=" offer_input_box offer_input_box1">

                    <InputBoxComponent label="What should they buy?" type="text" id="" name="" value="" required="required" placeholder="Example: Sushi Platter" />

                    <InputBoxComponent label="What will they get?" type="text" id="" name="" value="" required="required" placeholder="AED" />

                    <InputBoxComponent label="Estimation Saving" type="text" id="" name="" value="" required="required" placeholder="AED" />

                    <SingleSelector id="subcategory" label='Select Branch' />

                    <div className="row mt-3">
                        <div className="days-input-row">
                            <label>Day of the week</label>
                            <div className="checkbox-container">
                            {days.map(({ day, label }) => (
                                <DaysInput
                                key={day}
                                day={day}
                                label={label}
                                selected={daysSelection[day]}
                                onChange={handleDayChange}
                                />
                            ))}
                            </div>
                        </div>
                    </div>

                    <Weekends/>

                    <ExcludePublicHolidays/>

                    <ExcludeWeekends/>

                    <div class="row">
                        <h4 class="modificatin-notification">
                            Campaign modifications take 24 hours to take effect.
                        </h4>
                    </div>


                    {/* <div class="row fine-print-row">
                        <label for="">Fine Print</label>
                        <div class="fine_print_box">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder=""></textarea>
                        </div>
                    </div> */}

                    <TextAreaLabel label='Fine Print' placeholder='' rows='5'/>

                    <div className="input-box mt-2">
                      <div className='d-flex justify-content-between align-center maxRedemption_group'>
                        <label htmlFor="">Maximum redemptions</label>
                        <span style={{color: "#F1C62E"}}> <i className="fa-regular fa-gem" style={{position: "inherit", color: "#F1C62E"}}></i> Gold Feature</span>
                      </div>
                      
                      <input type="text" name="" id="" placeholder="example:500" class="form-control" required="" value=""/>
                    </div>


                    <div class="row review_submit_btn_row">
                        <div class="next-btn-box review_submit_btn_box tab-pane active" >
                            <button type="button" class="btn btn-primary btnNext review_submit_btn">
                                <Link to="/review_campaign">Review and Submit</Link>
                            </button>
                        </div>
                    </div>

                    
                    

                </form>
            </div>
      </div>
    )}

    {/* Offer form input 2 */}
    {selectedTab === 3 && (
      <div className=''>
          <ComparerOffer/> 
          <div class="offer_form_section1">
            <form method="" action="" class=" offer_input_box offer_input_box1">

                <InputBoxComponent label="What should they buy?" type="text" id="" name="" value="" required="required" placeholder="Example: Sushi Platter" />

                <InputBoxComponent label="What will they get?" type="text" id="" name="" value="" required="required" placeholder="AED" />

                <InputBoxComponent label="Estimation Saving" type="text" id="" name="" value="" required="required" placeholder="AED" />

                <SingleSelector id="subcategory" label='Select Branch' />

                <div className="row mt-3">
                    <div className="days-input-row">
                        <label>Day of the week</label>
                        <div className="checkbox-container">
                        {days.map(({ day, label }) => (
                            <DaysInput
                            key={day}
                            day={day}
                            label={label}
                            selected={daysSelection[day]}
                            onChange={handleDayChange}
                            />
                        ))}
                        </div>
                    </div>
                </div>

                <Weekends/>

                <ExcludePublicHolidays/>

                <ExcludeWeekends/>

                <div class="row">
                    <h4 class="modificatin-notification">
                        Campaign modifications take 24 hours to take effect.
                    </h4>
                </div>


                <TextAreaLabel label='Fine Print' placeholder='' rows='5'/>

                <div className="input-box mt-2">
                  <div className='d-flex justify-content-between align-center maxRedemption_group'>
                    <label htmlFor="">Maximum redemptions</label>
                    <span style={{color: "#F1C62E"}}> <i className="fa-regular fa-gem" style={{position: "inherit", color: "#F1C62E"}}></i> Gold Feature</span>
                  </div>
                  
                  <input type="text" name="" id="" placeholder="example:500" class="form-control" required="" value=""/>
                </div>


                <div class="row review_submit_btn_row">
                    <div class="next-btn-box review_submit_btn_box tab-pane active" >
                        <button type="button" class="btn btn-primary btnNext review_submit_btn">
                            <Link to="/review_campaign">Review and Submit</Link>
                        </button>
                    </div>
                </div>

                
                

            </form>
          </div>
      </div>
    )}




    </div>
    </div>
  )
}
