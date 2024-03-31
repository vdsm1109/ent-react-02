import React from 'react'
import arrayPhrase from '../utils/phrases.json'
import HRandom from '../utils/HRandom'
import arrayImg from '../utils/arrayImg.json'

const Btn = ({setContent, setBgImg}) => {
     
  const handlePhrase = () => {
    setContent(HRandom(arrayPhrase));
    setBgImg(HRandom(arrayImg))
  }

  return (
    
      <button className='btn' onClick={handlePhrase}>
       Siguente
       </button>
    
  )
}

export default Btn
