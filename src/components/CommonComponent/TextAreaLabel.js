import React from 'react';

export default function TextArea({ label, placeholder, rows }) {
  return (
    <div className="row fine-print-row">
      <label htmlFor="">{label}</label>
      <div className="fine_print_box">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={rows} placeholder={placeholder}></textarea>
      </div>
    </div>
  );
}
