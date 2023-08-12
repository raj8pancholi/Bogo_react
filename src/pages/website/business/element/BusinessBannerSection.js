import React from 'react'

export default function BusinessBannerSection() {
  return (
    <>
      <div className="business_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bussiness-header-section">
                <h1>Bogo For Business</h1>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="business_outer_section">
                <img
                  src="/images/Splash-BogoLogo-color.png"
                  alt=""
                />
                <ul>
                  <li>
                    <span>✓</span> No Contract Environment – switch your BOGO
                    campaigns ON/OFF as you see fit
                  </li>
                  <li>
                    <span>✓</span> Choose which days of the week you want to run Buy
                    One Get One deals
                  </li>
                  <li>
                    <span>✓</span> No Forced Deal Structure – offer what makes sense
                    for your business
                  </li>
                  <li>
                    <span>✓</span> Subscription-based service – pay us a small monthly
                    fee, run unlimited BOGO campaigns, and pay nothing on each
                    transaction
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="business_outer_last_section">
                <h1>Other Incentive Apps</h1>
                <ul>
                  <li>✗ Lock you into lengthy contracts</li>
                  <li>
                    ✗ Force you to accept discount customers 7 days a week, from open
                    to close, regardless of peak periods or busy seasons
                  </li>
                  <li>✗ Enforce strict rigidity and mandatory deal formats</li>
                  <li>
                    ✗ Charge excessive commission fees on all transactions through the
                    platform
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
