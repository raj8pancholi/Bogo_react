import React from 'react'
import { Link } from 'react-router-dom'

function Invite_cardInvite_component() {
    const InviteListData = [
        {}, {}, {}, {}, {}, {}, {}
    ]
    return (
        <>
            {InviteListData.map((slide, id) => (
                <div className="influencer_card">

                    <div className="card">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="influencer_img">
                                    <img src="/img/cards/influencers_user.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="name_row">
                                        <p>Jane Doe</p>
                                        <span className="invite" data-bs-toggle="modal" data-bs-target="#inviteModal"> + Invite</span>
                                    </div>
                                    <div className="followers">
                                        <h6>1,500</h6>
                                        <h6> +followers</h6>
                                    </div>

                                    <div className="social_media_row">
                                        <ul>
                                            <li><Link to="">Tiktok</Link></li>
                                            <li><Link to="">Instagram </Link></li>
                                            <li><Link to="">Facebook</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* <!-- invite influencer modal start  --> */}
            {/* <!-- The Modal --> */}
            <div className="modal" id="inviteModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <div className="invite_influences_body">
                                <h3>Confirm your selection</h3>
                                <p className="mt-3">
                                    Are you sure you want to pick Jane Doe
                                    as your Brand Ambassador?
                                </p>

                                <div className="d-flex justify-content-between align-center">
                                    <p>Accept more influencers</p>
                                    <div className="switch-button">
                                        <label className="switch">
                                            <input type="checkbox" id="toggleSwitch" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-center">
                                    <p>Close applications</p>
                                    <div className="switch-button">
                                        <label className="switch">
                                            <input type="checkbox" id="toggleSwitch" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button"
                                onclick="window.location.href='/website/pages/deshboard'"
                                className="btn  sureBtn" data-bs-dismiss="modal">Yes, I’m sure</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- compare modal end  --> */}

        </>
    )
}

export default Invite_cardInvite_component

