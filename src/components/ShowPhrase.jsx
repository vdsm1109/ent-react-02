import React from 'react'

const ShowPhrase = ({frase}) => {
  return (
    <div className='rectangle'>
      <p>{frase.phrase}</p>
      <p>Fuente: {frase.author}</p>
    </div>
  )
}

export default ShowPhrase
