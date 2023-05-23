import React from 'react'
import '../styles/landing3.css';
import Fandom from '../../assets/fandom_landing.svg';

export default function Landing3() {
  return (
    <div className='landing3container'>
      <img src={Fandom} style={{
        height: '450px',
      }} />
      <div className='landing3container-txt'>
        <h1>From few to a<br/> fandom</h1>
        <p>Get any community running with moderation<br/> tools and custom
          member access. Give<br/> members special powers, set up private<br/>
          channels, and more.
        </p>
      </div>
    </div>
  )
}
