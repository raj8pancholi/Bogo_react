import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab4() {
  return (
    <>
        <div id="tab4" className="tab-content1">
            <div className="row">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">Giveaway</div>
                </div>
                <div className="voucher_redim_row">
                    <Link to="/redemtionHisory" className="voucher_redim_box">
                    <span>Vouchers Redeemed</span>
                    <h4>45</h4>
                    </Link>
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="edtiteable-row">
                    <div className="editeable_box">
                    <div className="campaign_louch_date">
                        <h6 className="me-1">Launched: </h6>
                        <h6>Apr 23, 2021</h6>
                    </div>
                    <div className="invite_review_edit">
                        <ul>
                        <li>
                            <Link to="/invite_influencer"> Manage Offer</Link>
                        </li>
                        <li>
                            <Link to="/abmassdors_compaign">Applications</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="influence_invit">
                        <h6>12 influencer application(s)</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/*  */}
            <div className="row mt-4">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">Giveaway</div>
                </div>
                <div className="voucher_redim_row">
                    <Link to="/redemtionHisory" className="voucher_redim_box">
                    <span>Vouchers Redeemed</span>
                    <h4>45</h4>
                    </Link>
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="edtiteable-row">
                    <div className="editeable_box">
                    <div className="campaign_louch_date">
                        <h6 className="me-1">Launched: </h6>
                        <h6>Apr 23, 2021</h6>
                    </div>
                    <div className="invite_review_edit">
                        <ul>
                        <li>
                            <Link to="/invite_influencer">Manage Offer</Link>
                        </li>
                        <li>
                            <Link to="/abmassdors_compaign">Applications</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="influence_invit">
                        <h6>12 influencer application(s)</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </>
  )
}
