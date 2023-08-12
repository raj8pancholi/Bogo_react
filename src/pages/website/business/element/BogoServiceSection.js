import React from 'react'
import BogoInnerSection from './BogoInnerSection'

export default function BogoServiceSection() {
  return (
    <>
        <div className="bogo_service_section">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <BogoInnerSection
                    imgSrc="/images/undraw_Mobile_payments_re_7udl 1.png"
                    text="Register your business as a BOGO Merchant Partner"
                    />
                </div>
                <div className="col-md-4">
                    <BogoInnerSection
                    imgSrc="/images/undraw_Email_campaign_re_m6k5 1.png"
                    text="Launch customizable Buy One Get One campaigns"
                    />
                </div>
                <div className="col-md-4">
                    <BogoInnerSection
                    imgSrc="/images/undraw_prioritise_tgdh 1.png"
                    text="Choose a deal format that works for your business"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 bogo-img-gallery">
                <div
                    className="bogo_inner_section right-position bogo-img-gallery"
                    
                >
                    <img
                    src="/images/undraw_publish_post_vowb 1.png"
                    alt=""
                    className="img-fluid"
                    />
                    <p>Set your campaign availability and win new customers</p>
                </div>
                </div>
                <div className="col-md-6 bogo-img-gallery">
                <div className="bogo_inner_section bogo-img-gallery" >
                    <img
                    src="/images/undraw_Social_influencer_re_beim 1 (1).png"
                    alt=""
                    className="img-fluid"
                    />
                    <p>Boost your audience online with BOGO Brand Ambassadors</p>
                </div>
                </div>
            </div>
            </div>
        </div> 
    </>
  )
}
