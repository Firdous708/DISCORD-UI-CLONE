import React from 'react'
import '../styles/landing1.css';
import Inviteonly from '../../assets/invite_only_landing.svg';


export default function Landing1() {
  return (
    <div className='landing1container'>
        
        <img src={Inviteonly} style={{
            height: '450px'
        }} />
        
        <div className='text-container'>
            <h1>Create an <br/>
            invite-only <br/>
            place where<br/>
            you belong</h1>
            <p>
                Discord servers are organized into <br/>
                topic-based channels where you can <br/>
                collaborate, share and just talk about<br/>
                your day without clogging up a group<br/>
                chat.
            </p>
        </div>
    </div>
  )
}
