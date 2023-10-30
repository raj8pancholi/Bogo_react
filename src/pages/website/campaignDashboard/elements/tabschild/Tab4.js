import moment from 'moment/moment';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab4({campaign}) { 

    const today = new Date();

  return ( 
        <div id="tab4" className="tab-content1">
           {campaign?.map((item, i)=>{

                const startDate = new Date(item.untilDate);
                const endDate = new Date(item.endDate);
                const isActive = today >= startDate && today <= endDate;
                return isActive && item.isPublished? <div className="row">
                    <div className="col-6">
                            <div className="offerLabel">
                                <div className="offerlabelbox">{item.campaignType}</div>
                            </div>
                            <div className="voucher_redim_row">
                                <Link to="/redemtionHisory" className="voucher_redim_box">
                                <span>Vouchers Redeemed</span>
                                <h4>{item.noOfRedeem}</h4>
                                </Link>
                            </div>
                            <div className="influencer_appli"></div>
                    </div>
                    <div className="col-6">
                        <div className="edtiteable-row">
                            <div className="editeable_box">
                                <div className="campaign_louch_date">
                                    <h6 className="me-1">Launched: </h6>
                                    <h6>{startDate ? moment(startDate).format("D MMM YYYY"):''}</h6>
                                </div>
                                <div className="editBox">
                                    <div className="dropdown MangeOfferEditRow">
                                        <button
                                            className="btn  dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Manage Offer
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                            <Link className="dropdown-item" to={`/ambassdors_compaign/${item.id}`}>
                                                <i className="fa-solid fa-pencil mr-1"></i>
                                                Edit Application
                                            </Link>
                                            </li>
                                            <li>
                                            <Link className="dropdown-item" to="/">
                                                <i className="fa-regular fa-circle-xmark mr-1"></i>
                                                Close This Campaign
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null;
          } ) }
           </div>
          
  )
}
