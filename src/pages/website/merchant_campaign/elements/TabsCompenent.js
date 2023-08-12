import React from 'react'
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
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

    const [activeTab, setActiveTab] = useState("tabs-1");

    const handleTabSelect = (tabId) => {
      setActiveTab(tabId);
    };
  
    // Function to handle clicking the "Next" button
    const handleNextClick = () => {
      setActiveTab("tabs-2"); // Switch to the "Gallery" tab


    };
  
    // Function to handle clicking the "Next" button
    const handleInterNextClick = () => {
      setActiveTab("tabs-3"); // Switch to the "Gallery" tab
    };





  return (
    <div>
    <div className="offer-type">
      <Tabs activeKey={activeTab} className="offerType" onSelect={handleTabSelect} id="controlled-tab-example">

        <Tab eventKey="tabs-1" title={<span>BUY ONE<br />GET ONE</span>}>

        
          <ComparerOffer/> 
          <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="offer_form_section1">
                    <form method="" action="" class=" offer_input_box offer_input_box1">

                        <InputBoxComponent label="Full Name" type="text" id="" name="" value="" required="required" placeholder="Example: Sushi Platter" />

                        <InputBoxComponent label="Estimated Savings?" type="text" id="" name="" value="" required="required" placeholder="AED" />

                        <SingleSelector id="subcategory" label='Sub Category' />

                        

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


        </Tab>

        <Tab eventKey="tabs-2" title={<span>BUY X<br />GET Y</span>} onSelect={handleNextClick} >
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


                    <div class="row review_submit_btn_row">
                        <div class="next-btn-box review_submit_btn_box tab-pane active" >
                            <button type="button" class="btn btn-primary btnNext review_submit_btn">
                                <Link to="/review_campaign">Review and Submit</Link>
                            </button>
                        </div>
                    </div>

                    
                    

                </form>
            </div>
        </Tab>

        <Tab eventKey="tabs-3"  title={<span>BUY BUNDLE<br />GET UNIT</span>} onSelect={handleInterNextClick}>
            <ComparerOffer/> 
            <div class="offer_form_section1">
              <form method="" action="" class=" offer_input_box offer_input_box1">

                  <InputBoxComponent label="What should they buy?" type="text" id="" name="" value="" required="required" placeholder="Example: Sushi Platter" />

                  <InputBoxComponent label="What will they get?" type="text" id="" name="" value="" required="required" placeholder="AED" />

                  <InputBoxComponent label="Estimation Saving" type="text" id="" name="" value="" required="required" placeholder="AED" />

                  <SingleSelector id="subcategory" label='Sub Category' />

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


                  <div class="row review_submit_btn_row">
                      <div class="next-btn-box review_submit_btn_box tab-pane active" >
                          <button type="button" class="btn btn-primary btnNext review_submit_btn">
                              <Link to="/review_campaign">Review and Submit</Link>
                          </button>
                      </div>
                  </div>

                  
                  

              </form>
            </div>
        </Tab>
        
      </Tabs>
    </div>
    </div>
  )
}
