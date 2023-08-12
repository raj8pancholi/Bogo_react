import React from 'react';

const TabComponent = ({ id, label, isActive, onClick }) => (
  <li className={`nav-item ${isActive ? 'focus-active' : ''}`}>
    <a className={`nav-link ${isActive ? 'active' : ''}`} data-toggle="tab" href={`#${id}`} role="tab" onClick={onClick}>
      {label}
    </a>
  </li>
);

export default TabComponent;
