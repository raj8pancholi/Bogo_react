import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'




// Import Components
import InputTextRow from './InputTextRow'
import TextAreaLabel from '../../../../components/CommonComponent/TextAreaLabel'
import HashtagRow from './HashtagRow';
import PromoCodeRow from './PromoCodeRow';
import SingleSelector from './SingleSelector';
import ExclusiveBtnModal from './ExclusiveBtnModal';

export default function ExclusiveOffer() {



  // date picker
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };


  // Date Picker 2
  const [dateStart, setDateStart] = useState(null);

  const handleDateOpen = (id) =>{
    setDateStart(id)
  };





  // select box
  const colourOptions = [
    { value: 'demo1', label: 'demo1' },
    { value: 'demo2', label: 'demo2' },
    { value: 'demo3', label: 'demo3' }
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

  





    // social media options
    const socialMediaOptions = [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        // Add more options as needed
    ];


    // Audience Size options
    const audienceSize = [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        // Add more options as needed
    ];




  return (
    <>
      <div className="">
            <InputTextRow label="Price" name="Price" type="text" placeholder="e.g. 3-course meal and cocktails for 2 people" required={true}/>

            <InputTextRow label="Exclusive Offers" name="ExsOffers" type="text" placeholder="AED" required={true}/>

            <InputTextRow label="Estimation saving" name="saving" type="text" placeholder="AED" required={true}/>

            


            <div className="row ">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label for="">Allow Guest  (+1)
                  </label>
                  <label className="switch">
                    <input type="checkbox" id="switchButton"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>


            {/* multi selector  */}
            <MyComponent />


            <TextAreaLabel label='Campaign Requirement' rows="5" placeholder="Tell the influencer what you’re looking for"  />


            <div className="row mt-3 ">
              <div className="col-8">
                <div className="input-box">
                  <label htmlFor=" " className="label_text">Content</label>
                </div>
              </div>
              <div className="col-4">
                <ul className="jst_cont_end">
                  <li>
                    <div className="input-box ">
                      <label htmlFor="" className="text-center ">Photo</label>
                      <label className="switch">
                        <input type="checkbox" id="switchButton"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="input-box ">
                      <label htmlFor="" className="text-center">Video</label>
                      <label className="switch mr-0">
                        <input type="checkbox" id="switchButton"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <HashtagRow label='Add Hashtag'/>

            <PromoCodeRow label='Add Promo Code' />


            <SingleSelector label="Preffered Social Media Platform" defautlOptions='Select platforms that apply' options={socialMediaOptions} />

            <SingleSelector label="Audience Size" defautlOptions='One' options={audienceSize} />

            <div class="row mt-3">
              <div class="col-12">
                <div class="input-box">
                  <label for="" >Campaign timeline</label>
                </div>
              </div>
            </div>   

            <div className="row mt-3">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label for="" >Accept applications until</label>
                  <div className="select_datebox">
                   
                    {startDate ? (
                      <label for=""  className="selectDate" >{startDate.toDateString()}</label>
                      ) : (
                        <div>
                          <label onClick={() => document.getElementById('datepicker-trigger').click()}>Select date</label>
                          <DatePicker
                            id="datepicker-trigger"
                            selected={startDate}
                            minDate={new Date()}
                            onChange={handleDateChange}
                            popperPlacement="bottom-end"
                            onFocus={() => document.getElementById('datepicker-trigger').click()}
                          />
                        </div>
                      )}
                  </div>

                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="input-box jst_cont_btw">
                  <label htmlFor="" >Campaign completion date</label>
                  <div className="select_datebox">
                    
                    {dateStart ? (
                      <label htmlFor="" className="selectDate">{dateStart.toDateString()}</label>
                    ):(
                      <div>
                        <label onClick={() => document.getElementById('datepicker-trigger').click()}>Select date</label>
                        <DatePicker
                              id="datepicker-trigger"
                              selected={dateStart}
                              minDate={new Date()}
                              onChange={handleDateOpen}
                              popperPlacement="bottom-end"
                              onFocus={() => document.getElementById('datepicker-trigger').click()}
                        />
                      </div>
                      
                    )}
                    
                  </div>

                </div>
              </div>
            </div>


            <div className="row review_submit_btn_row">
              <div className="next-btn-box review_submit_btn_box tab-pane active">
                  <ExclusiveBtnModal/>
              </div>
            </div>


      </div>
    </>
  )
}
