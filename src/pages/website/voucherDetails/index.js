import React from 'react'

// import Header and Footer
import Headers from '../../../partials/header/Header';  
import Footer from '../../../partials/footer/Footer';


// Import components

import VoucheHeader from './elements/VoucheHeader'
import MainSection from './elements/MainSection'
import Header1 from '../../../partials/header/Header1';
import { useSelector } from 'react-redux';

function VoucherDetails() {
const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  
const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData);  


    return (
        <>
        {/* Header */}
        <Header1/>

            <section className="voucher_previews_section">

                <VoucheHeader selectedBusinessData={selectedBusinessData}/>
                <MainSection allBusinessData={allBusinessData}  selectedBusinessData={selectedBusinessData} />

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

