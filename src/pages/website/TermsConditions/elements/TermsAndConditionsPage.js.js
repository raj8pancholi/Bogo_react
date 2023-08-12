import React from 'react';
import TermsConditionHeader from './TermsConditionHeader';
import OfferingSection from './OfferingSection';
import MerchantObligationsSection from './MerchantObligationsSection';
import PaymentSection from './PaymentSection';

function TermsAndConditionsPage() {
    return (
        <>
            <TermsConditionHeader />
            <OfferingSection />
            <MerchantObligationsSection />
            <PaymentSection />
        </>
    );
}

export default TermsAndConditionsPage;
