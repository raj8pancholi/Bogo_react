import React from 'react';



// Import Header and Footer
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header.js'


// Import Components
import Heading from './elements/Heading';
import PlanBox from './elements/PlanBox';
import PaymentForm from './elements/PaymentForm';





export default function MerchantSubscriptionPage() {
  return (
    <>

    {/* Header */}
    <Header/>
    
      <Heading />
      <div className="choose-plan-section">
        <div className="container">
          {/* plan Type */}
          <div className="plan_type_box">
            <PlanBox
              imageSrc="/images/dimand-silver.png"
              title="Silver"
              price="100 AED per month, or 1,000 AED per year"
            />
            <PlanBox
              imageSrc="/images/diamond 2 (1).png"
              title="Gold"
              price="150 AED per month, or 1,500 AED per year"
            />
          </div>
          {/* ... other content ... */}

          <div className="payment-haeding">
            <h1 >Payment Method</h1>
          </div>

          <PaymentForm />
        </div>
      </div>
      


    {/* Footer */}
    <Footer/>
    </>
  );
}
