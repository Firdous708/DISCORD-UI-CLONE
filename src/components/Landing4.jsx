import React from 'react'
import '../styles/landing4.css';
import Justchilling from '../../assets/just_chiling_landing.svg';
import Tinystars from '../../assets/tiny_stars_landing.svg';
import DownloadIcon from '../../assets/download-svgrepo-com.svg';
export default function Landing4() {
  return (
    <div className='landing4container'>
      <div className='landing4container-txt'>
        <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p>Low-latency voice and video feels 
          like you're in the same room. Wave
           hello over video, watch friends 
           stream their<br/><span id='span4' /> games, or gather up 
           and have a drawing session with 
           screen share.</p>
      </div>
      <img src={Justchilling} />

      <div className='landing4container-txt2' style={{
        background: `url(${Tinystars})`,
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: '30px',
        width: '400px',
        padding: '20px'
        
      }}>
        <h2>Ready to start your journey?</h2>
        <button id = "ready-to-join" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60px',
          width: '350px',
          backgroundColor: '#5865f2',
          fontSize: '18px',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
        }}>
          <img src={DownloadIcon} style={{
            height: '30px',
            transform: 'translateY(-3px)',
            marginRight: '10px',
          }} />
         <span>Download for Windows</span> 
        </button>

      </div>
      
    </div>
  )
}
