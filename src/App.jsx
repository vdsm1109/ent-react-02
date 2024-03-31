import { useState } from 'react'
import './App.css'
import arrayPhrase from './utils/phrases.json'
import Btn from './components/Btn'
import ShowPhrase from './components/ShowPhrase'
import HRandom from './utils/HRandom.js'
import arrayImg from './utils/arrayImg.json'




function App() {
  const [content, setContent] = useState(HRandom(arrayPhrase))
  const [bgImg, setBgImg] = useState(HRandom(arrayImg))

  const styleChange ={backgroundImage: `url(../fondo${bgImg}.jpg)`}

  return (
    <>
    <div className="container" style={styleChange}>
      <h1 className='title'>Galleta De La Fortuna</h1>
      <ShowPhrase
      frase={content}
      />
      <Btn 
      setContent={setContent}
      setBgImg={setBgImg}
      />
    </div>
    </>
  )
}

export default App
