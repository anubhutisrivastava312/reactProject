import React from 'react'
import Prescription from './assets/Prescription.jpeg'

function card () {
  return (
    <div className='Card'>
      <h2>Hi this side Pizza!!</h2>
      <img className="card-img" src={Prescription} alt='profile picture'></img>
      <p>Helllooo i watch doraemon!!</p>
    </div>
  )
}

export default card
