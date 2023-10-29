import React, { useEffect } from 'react'

// import Header and Footer
import Headers from '../../../partials/header/Header';  
import Footer from '../../../partials/footer/Footer';


// Import components

import VoucheHeader from './elements/VoucheHeader'
import MainSection from './elements/MainSection'
import Header1 from '../../../partials/header/Header1';
import { useDispatch, useSelector } from 'react-redux';
import { GET_BUSINESS_VOUCHER } from '../../../redux/slices/merchantAuthSlice';

function VoucherDetails() {
const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  
const selectedBusinessData = useSelector((state) => state.merchantAuth.selectedBusinessData);  

const dispatch = useDispatch();

useEffect(() => { 
    dispatch(GET_BUSINESS_VOUCHER(localStorage.getItem('activeBusiness')))
 
}, []);



    return (
        <>
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

