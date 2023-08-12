import React, { useState } from 'react';

export default function Weekends() {
  const [excludeWeekends, setExcludeWeekends] = useState(false);

  const handleSwitchChange = () => {
    setExcludeWeekends((prevValue) => !prevValue);
  };

  return (
    <div className="row">
      <div className="offday_row">
        <label htmlFor="">Exclude weekends</label>
        <label className="switch">
          <input
            type="checkbox"
            id="switchButton"
            checked={excludeWeekends}
            onChange={handleSwitchChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
