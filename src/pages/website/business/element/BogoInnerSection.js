import React from 'react'

export default function BogoInnerSection({imgSrc, text}) {
  return (
    <>
        <div className="bogo_inner_section">
            <img src={imgSrc} alt="" className="img-fluid" />
            <p>{text}</p>
        </div>
    </>
  )
}
