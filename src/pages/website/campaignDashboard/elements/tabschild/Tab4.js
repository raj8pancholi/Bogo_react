import moment from 'moment/moment';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab4({vouchers}) { 

    const today = new Date();

//   return ( 
//     <div id="tab5" className="tab-content1">

    
//     {vouchers?.map((item, i)=>( 

        



//         item.isPublished ?  
//         <div className="row">
//             <div className="col-6 d-flex flex-column justify-content-between">
//                 <div className="offerLabel">
//                     <div className="offerlabelbox">{item.voucherType}</div>
//                 </div>
//                 <div className="campaign_offer_type">
//                     <div className="offerType1">
//                     <h6 className="me-1">Buy:</h6>
//                     <h6>{item.toBuy}</h6>
//                     </div>
//                     <div className="offerType2">
//                     <h6 className="me-1">Get:</h6>
//                     <h6>{item.toGet}</h6>
//                     </div>
                    
//                 </div>
//                 <div className="campaign_louch_date">
//                     <h6 className="me-1">Launched: </h6>
//                     {/* <h6>{startDate ? moment(startDate).format("D MMM YYYY"):''}</h6> */}
//                     <h6>date</h6>
//                 </div>    
//             </div>
//             <div className="col-6">
//             {/* <div className="completed_redem_row">
//                 <div className="completed_redem_box">
//                 <Link
//                     to="/redemtionHisory"
//                     className="com_voucher_redim_box"
//                 >
//                     <span>Vouchers Redeemed</span>
//                     <small>{item.noOfRedeem}</small>
//                 </Link>
//                 </div>
//             </div> */}
//             <div className="edtiteable-row">
//                 <div className="editeable_box">
                    
//                     <div className="editBox">
//                         <div className="dropdown MangeOfferEditRow">
//                             <button
//                                 className="btn  dropdown-toggle"
//                                 type="button"
//                                 id="dropdownMenuButton1"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 Manage Offer
//                             </button>
//                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                 <li>
//                                 <Link className="dropdown-item" to="/invite_influencer">
//                                     <i className="fa-solid fa-eye mr-1"></i>
//                                     Review Applications
//                                 </Link>
//                                 </li>
//                                 <li>
//                                 <Link className="dropdown-item" to={`/ambassdors_compaign/${item.id}`}>
//                                     <i className="fa-solid fa-pencil mr-1"></i>
//                                     Edit Application
//                                 </Link>
//                                 <Link className="dropdown-item" >
//                                     <i className="fa-regular fa-circle-xmark mr-1"></i>
//                                     Close This Campaign
//                                 </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="voucher_redim_row">
//                         <Link to="/redemtionHisory" className="voucher_redim_box">
//                         <span>Vouchers Redeemed</span>
//                         <h4>{item.noOfRedeem}</h4>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>  : null) ) }

//     </div>
          
//   )

return (
    <div id="tab5" className="tab-content1">
      {vouchers?.map((item, i) => {
        
        // Move the variable declarations outside of the map function
        const startDate = new Date(item.untilDate);
        const endDate = new Date(item.endDate);

        console.log("startDate", startDate, today);
        console.log("endDate", endDate, today);
        const isActive = today >= startDate && today <= endDate;

        return item.isPublished && item.isActive ? (
          <div className="row" key={i}>
            <div className="col-6 d-flex flex-column justify-content-between">
              <div className="offerLabel">
                <div className="offerlabelbox">{item.voucherType}</div>
              </div>
              <div className="campaign_offer_type">
                <div className="offerType1">
                  <h6 className="me-1">Buy:</h6>
                  <h6>{item.toBuy}</h6>
                </div>
                <div className="offerType2">
                  <h6 className="me-1">Get:</h6>
                  <h6>{item.toGet}</h6>
                </div>
              </div>
              <div className="campaign_louch_date">
                <h6 className="me-1">Launched: </h6>
                <h6>{startDate ? moment(startDate).format("D MMM YYYY") : ''}</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="edtiteable-row">
                <div className="editeable_box">
                  <div className="editBox">
                    <div className="dropdown MangeOfferEditRow">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Manage Offer
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        
                        <li>
                          <Link className="dropdown-item" to={`/merchant_campaign/${item.id}`}>
                            <i className="fa-solid fa-pencil mr-1"></i>
                            Edit Application
                          </Link>
                          <Link className="dropdown-item">
                            <i className="fa-regular fa-circle-xmark mr-1"></i>
                            Close This Campaign
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="voucher_redim_row">
                    <Link to="/redemptionHistory" className="voucher_redim_box">
                      <span>Vouchers Redeemed</span>
                      <h4>{item.noOfRedeem}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
