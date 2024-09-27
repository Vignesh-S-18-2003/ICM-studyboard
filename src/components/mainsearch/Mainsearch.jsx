import React from 'react'

function Mainsearch() {
  return (
    <div className='main2'>
    <form>        <div className='main-inputs'>
      <input type="text" placeholder='Enter your Course'  required/>
      <input type="text" placeholder='Enter your Study Level' />
      <input type="text" placeholder='Enter your Destination' />
    </div>
    <div className='main-btn'>
      <input type='submit'/>
    </div>
    
    </form>
  </div>
  )
}

export default Mainsearch
