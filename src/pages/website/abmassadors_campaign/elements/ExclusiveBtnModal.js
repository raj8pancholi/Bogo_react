import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { Link } from 'react-router-dom';


export default function ExclusiveBtnModal() {


    const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };



  return (
    <>
        <div className="row review_submit_btn_row">
            <div className="next-btn-box review_submit_btn_box tab-pane active">
                <button type="button" onClick={handleOpenModal} className="btn btn-primary btnNext review_submit_btn">
                Review and Submit
                </button>

            </div>
        </div>













      {/* Give modal Info */}
      <Modal show={showModal} className='GiveBtnModalRow' onHide={handleCloseModal}  >
          <Modal.Header closeButton>
              <Modal.Title className='modal-title'>
              Review
              </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="ExclusiveModal-body">
                <div className="row ">
                    <div className="col-12">
                    <div className="input-box ">
                        <label htmlFor="">price</label>
                        <input type="text" name="price" id="" value="price" className="form-control"  placeholder="ADE" readOnly />
                    </div>
                    </div>
                </div>
        
                <div className="row ">
                    <div className="col-12">
                    <div className="input-box ">
                        <label htmlFor="">Estimation saving</label>
                        <input type="text" name="saving" id="" value="saving" className="form-control"  placeholder="AED" readOnly/>
                    </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12">
                    <div className="input-box ">
                        <label htmlFor="">Exclusive Offers</label>
                        <input type="text" name="exoffer" id="" value="exoffer" className="form-control"  placeholder="AED" readOnly/>
                    </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12">
                    <div className="input-box jst_cont_btw">
                        <label >Allow Guest  (+1)</label>
                        <label >
                        No
                        </label>
                    </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-12">
                    <div className="input-box" >
                            
                        <label htmlFor="" >Branch Name</label>
        
                        <div className="preview_branch">
                            <label  className="selectDate" >Demo 1</label>
                            <label  className="selectDate" >Demo 2</label>
                            <label  className="selectDate" >Demo 3</label>
                            <label  className="selectDate" >Demo 4</label>
                        </div>
        
                    </div>
                    </div>
                </div>


                <div className="row fine-print-row_preview mt-2">
                    <div className="col-12">
                    <div className="input-box" >
                        <label htmlFor="">Campaign Requirement</label>
                        <div className="fine_print_box_preview">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio et ipsam dolore dolor. Minus quibusdam itaque voluptas consequuntur expedita asperiores dolorum amet minima laborum numquam obcaecati deserunt, illo eos.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="hastag-row  mt-3">
                    <label htmlFor=" " ><i className="fa-solid fa-hashtag"></i> Hashtag</label>
                    <span>#thebogoapp</span>
                </div>

                <div className="promo_code_preview_row mt-2">
                    <label htmlFor=" "><i className="fa-solid fa-code"></i> Promo Code</label>
                    <span>FROMBOGO</span>
                </div>


                <div className="social_media_preview_row mt-2">
                    <label htmlFor=" "><i className="fa-solid fa-photo-film"></i> SOCIAL MEDIA</label>
                    <div className="social_media_previow_box">
                    <span>TTiktok ,</span>
                    <span>facebook</span>
                    </div>
                </div>


          
            </div>
          </Modal.Body>

          <Modal.Footer className='review_footerBtn_row'>
            <Button type="button" variant="secondary" onClick={handleCloseModal} className="btn " data-bs-dismiss="modal"style={{backgroundColor:'#88c541' , color: 'white'}}>Edit</Button>
            <Button type="button" variant="secondary"  className="btn " data-bs-dismiss="modal"style={{backgroundColor:'#029CAB' , color: 'white'}}><Link to='/invite_influencer' style={{textDecoration:'none', color: '#fff'}}>Save</Link></Button>
          </Modal.Footer>
      </Modal>
    </>
  )
}
