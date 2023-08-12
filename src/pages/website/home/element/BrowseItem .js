import React from 'react'

export default function BrowseItem ({imageSrc, title, description, animation}) {
  return (
    <div>
      <div className={`browse_inner_section ${animation}`}>
        <img src={imageSrc} alt={title} className="img-fluid" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
