import React from 'react'

// import Header and Footer
import Headers from '../../../partials/header/Header';  
import Footer from '../../../partials/footer/Footer';


// Import components

import VoucheHeader from './elements/VoucheHeader'
import MainSection from './elements/MainSection'

function VoucherDetails() {
    return (
        <>
        {/* Header */}
        <Headers/>

            <section className="voucher_previews_section">

                <VoucheHeader />

                <MainSection />

                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="location_heading">Location:</h3>
                        </div>
                    </div>
                </div>
                

                <div className="location_map">
                </div>
            </section>

        <Footer/>

        </>
    )
}

export default VoucherDetails

