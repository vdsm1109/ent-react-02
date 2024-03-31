import React from 'react'

const ShowPhrase = ({frase}) => {
  return (
    <div className='rectangle'>
      <p className='text'>{frase.phrase}</p>
      <p className='text'>Fuente: {frase.author}</p>
    </div>
  )
}

export default ShowPhrase
