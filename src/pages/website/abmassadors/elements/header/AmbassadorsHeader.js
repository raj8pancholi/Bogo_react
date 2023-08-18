import React from 'react'
// import { Link } from 'react-router-dom'
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

import '../../abmassadors.css';

const AmbassdoresHeader = () => {
    return(
        <div className="ambassadors-header-section">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <HeaderLeft />
                </div>
                <div className="col-md-6">
                    <HeaderRight />
                    
                </div>
            </div>
            </div>
        </div>
    );
}


export default AmbassdoresHeader