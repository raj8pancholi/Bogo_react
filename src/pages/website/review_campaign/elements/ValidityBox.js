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
                <li>S    11:00 - 23:00</li>
                <li>M    11:00 - 23:00</li>
                <li>T    11:00 - 23:00</li>
                <li>W    11:00 - 23:00</li>
                <li>T    11:00 - 23:00</li>
                <li>F    Not available</li>
                <li>S    Not available</li>
              </ul>
        </div>

        {/* Fine Prient */}
        <FinePrint />
    </div>
  );
}
