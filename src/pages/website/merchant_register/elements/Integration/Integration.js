import React, {useState} from 'react'
import {Link} from 'react-router-dom'


// Import Components
import InstagramGalleryItem from './InstagramGalleryItem'




export default function Integration() {


    // script for instgram img show
    const [showGallery, setShowGallery] = useState(false);

  const handleNextClick = () => {
    setShowGallery(!showGallery); // Toggle the showGallery state
  };



  // when click on next button then link new page
  // const nxtpage = () => {
  //   window.location.href = '/website/user/register_user';
  // };




  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="form_left_content_section">
                <h4>Instagram</h4>
                <button className="form_facebook" onClick={handleNextClick} style={{ backgroundColor: '#029CAB' }}>Connect To Instagram</button>
                </div>
            </div>
        </div>

        {showGallery && (
        <div className="insta-gallery-section row">
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
          <InstagramGalleryItem />
        </div>
      )}


        <div className="row g-bussi-row">
        <div className="col-6">
            <div className="form_right_last_content_section g-bussiness">
            <p className="m-0">Google Business</p>
            <h4>ID: 454323933747472</h4>
            </div>
        </div>
        <div className="col-6">
            <div className="form_left_last_content_section">
            <button className="btn from_fackbook_disconnect">Disconnect To Google</button>
            </div>
        </div>
        </div>

        {/* <!-- submit details button --> */}
        <div className="row ">
            <div className="col-12 tab-content">
              <div className="next-btn-box tab-pane active" id="tabs-2">
                  <Link to="/merchant_registration " >
                    <button   type="submit" className="btn btn-primary btnNext integration-btn-next" >
                    Next
                    </button> 
                  </Link>
                  
              </div>
            </div>
        </div>
    </>
  )
}
