import React from 'react'
import '../styles/landing2.css';
import Chillin from '../../assets/hanging_out_easy_landing.svg';

export default function Landing2() {
  return (
    <div className='landing2container'>
      <div className='landing2container-txt'>
        <h1>Where hanging<br/> out is easy</h1>
        <p>Grab a seat in a voice channel
          when you're<br/> free. Friends in your
          server can see you're<br/> around and 
          instantly pop in to talk without<br/>
          having a call.
        </p>
      </div>
      <img src={Chillin} style={{
        height: '450px'
      }} />

    </div>
  )
}
