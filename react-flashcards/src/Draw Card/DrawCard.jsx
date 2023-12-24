import React from 'react'
import { useState } from 'react'
import '../Draw Card/DrawCard.css'

const DrawCard = () => {

    const [index,setIndex]=useState(0);
    function handleClick(){
        setIndex(index+1);
    }
  return (
    <div className='container'>
        <button className='Btn' onClick={handleClick}>Next</button>
    </div>
  )
}

export default DrawCard