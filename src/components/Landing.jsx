import React from 'react'
import Discordlogo from '../../assets/discord_main_logo.svg';
import Rightbg1 from '../../assets/right_bg_landing_header.svg';
import Rightbg2 from '../../assets/left_bg_landing_header.svg';
import Rightbgmain from '../../assets/center_bg_landing_header.svg';
import '../styles/navigation.css';

export default function Landing() {
  return (
    <>
    <div className='container' style={{
        backgroundColor: '#404eed',
        height: '600px',
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px'
    }}>
        <div className='navigation'>


        <img src={Discordlogo} />

        <div className='navigation-items'>
            <a href='#' className='navigation-items-a'>Download</a>
            <a href='#' className='navigation-items-a'>Nitro</a>
            <a href='#' className='navigation-items-a'>Safety</a>
            <a href='#' className='navigation-items-a'>Support</a>
            <a href='#' className='navigation-items-a'>Blog</a>
            <a href='#' className='navigation-items-a'>Careers</a>
        </div>
        <button id='login'>Login</button>
        
        </div>
        <div className='landing-text'>
            <h1>IMAGINE A PLACE...</h1>
            <p>..Where you can belong to a school club, 
                a gaming group, or a worldwide art community<br/>
                Where only you and a just handful of friends can spend
                time together. A place that makes it<br/><span id='span1'></span> easy to talk
                every day and hang out more often.
            </p>
        </div>
        <div className='landing-buttons'>
            <button id ="landing-button1"><span id = 'arrow'>⬇️</span>Download for Mac</button>
            <button id="landing-button2">Open Discord in your browser</button>
        </div>
        {/* <div className='header-images'>
        <img src = {Rightbg2} id='img1' style={{
            zIndex: '-1'
        }}/>
            <img src={Rightbg1} id='img2' style={{
                zIndex: '-1'
            }}/>
        </div> */}


    </div>
    </>
  )
}
