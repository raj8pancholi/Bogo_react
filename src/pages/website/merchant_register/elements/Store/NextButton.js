import React from 'react'

export default function NextButton({ onNextClick }) {
  return (
    <>
    <div className="row">
      <div className="col-12 tab-content">
        <div className="next-btn-box tab-pane active" id="tabs-1">
          <button type="button" className="btn btn-primary btnNext" onClick={onNextClick}>
            Next
          </button>
        </div>
      </div>
    </div> 
    </>
  )
}
