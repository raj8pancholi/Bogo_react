import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab5() {
  return (
    <>
        <div id="tab5" className="tab-content1">
            <div className="row">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">Buy1 Get1</div>
                </div>
                <div className="campaign_offer_type">
                    <div className="offerType1">
                    <h6 className="me-1">Buy1:</h6>
                    <h6>sushi Platter</h6>
                    </div>
                    <div className="offerType2">
                    <h6 className="me-1">Get1:</h6>
                    <h6>sushi Platter</h6>
                    </div>
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="completed_redem_row">
                    <div className="completed_redem_box">
                    <Link
                        to="/voucherRedeem"
                        className="com_voucher_redim_box"
                    >
                        <span>Vouchers Redeemed</span>
                        <small>45</small>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            {/*  */}
            <div className="row mt-3">
                <div className="col-6">
                <div className="offerLabel">
                    <div className="offerlabelbox">Buy1 Get1</div>
                </div>
                <div className="campaign_offer_type">
                    <div className="offerType1">
                    <h6 className="me-1">Buy1:</h6>
                    <h6>sushi Platter</h6>
                    </div>
                    <div className="offerType2">
                    <h6 className="me-1">Get1:</h6>
                    <h6>sushi Platter</h6>
                    </div>
                </div>
                <div className="influencer_appli"></div>
                </div>
                <div className="col-6">
                <div className="completed_redem_row">
                    <div className="completed_redem_box">
                    <Link
                        href="/voucherRedeem"
                        className="com_voucher_redim_box"
                    >
                        <span>Vouchers Redeemed</span>
                        <small>45</small>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
