// import { Instagram } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function Invite_cardApplied_component() {



    // SweetAlertModal
    const handleAcceptClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Accepted',
            text: 'You clicked the Accept button!.',
        });
    };
    
    const handleRejectClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Rejected',
            text: 'You clicked the Reject button!.',
        });
    };






    const listData = [
        {}, {}, {}, {}, {}, {}, {}, {}, {},

    ]
    return (
        <>
            {listData.map((slide, id) => (
                <div className="influencer_card" key={id}>
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
                                        <div className="accept_reject_box">
                                            <span className="accept" id="success"  onClick={handleAcceptClick}>Accept</span>
                                            <span className="reject" id="error" onClick={handleRejectClick}>Reject</span>
                                        </div>

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
        </>
    )
}

export default Invite_cardApplied_component

