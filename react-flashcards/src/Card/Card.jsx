import React from 'react'
import '../Card/Card.css'

const Card = () => {
  return (
    <div className='card-container'>
        <div className="card">
        <div className="front">
                <div className="eng">This is front</div>
            </div>
            <div className="front back">
            <div className="han">This is back</div> 
            </div>
        </div>
    </div>
  )
}

export default Card