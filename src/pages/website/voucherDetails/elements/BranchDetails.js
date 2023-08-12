import React from 'react'

function BranchDetails() {
    const branchCardData = [
        { image: "/images/directory_img/dir_card_icon1.jpg" },
        { image: "/images/directory_img/dir_card_icon2.jpg" },
        { image: "/images/directory_img/dir_card_icon1.jpg" },
        { image: "/images/directory_img/dir_card_icon2.jpg" },
        { image: "/images/directory_img/dir_card_icon1.jpg" },
        { image: "/images/directory_img/dir_card_icon2.jpg" },
    ]
    return (
        <>
            {branchCardData.map((slide, id) => (
                <div className="col-md-6 mt-2">
                    <span className="card p-3 card_row">
                        <div className="row">
                            <div className="col-3">
                                <div className="card_img">
                                    <img src={slide.image} alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card_details">
                                    <h5>Tasty Treats</h5>
                                    <span>JLT</span>
                                    <span>Coffee, Desserts | $</span>
                                    <span className="loacation"> <i className="fa-solid fa-location-dot text-primary"></i> <small>0.3km</small></span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card_rating_row">
                                    <div className="rating_icon">
                                        <i className="fa-solid fa-star text-primary" ></i>
                                        <span>5.0</span>
                                    </div>
                                    <div className="card_icon_row">
                                        <img src="/images/directory_img/dir_card_icon3.png" alt="" className="img-fluid" />
                                        <img src="/images/directory_img/dir_card_icon6.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            ))}

        </>
    )
}

export default BranchDetails
