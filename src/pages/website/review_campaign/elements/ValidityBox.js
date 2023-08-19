import React from 'react';

// Import Components
import FinePrint from './FinePrint';

export default function ValidityBox() {
  return (
    <div className="validity_row">
      {/* ... validity box components ... */}
        <div className="validity_box">
              <h4>VALIDITY</h4>
              <ul>
                <li>S <span>11:00 - 23:00</span></li>
                <li>M <span>11:00 - 23:00</span></li>
                <li>T <span>11:00 - 23:00</span></li>
                <li>W <span>11:00 - 23:00</span></li>
                <li>T <span>11:00 - 23:00</span></li>
                <li>F <span>Not available</span></li>
                <li>S <span>Not available</span></li>
              </ul>
        </div>

        {/* Fine Prient */}
        <FinePrint />
    </div>
  );
}
