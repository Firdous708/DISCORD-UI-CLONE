import React, {useState} from 'react'
import DiscordLogo from '../../assets/discord_main_logo.svg';
import '../styles/MobileNavigation.css';
import MobileNavIcon from '../../assets/mobilenavicon.svg';
import CloseIcon from '../../assets/crossnewicon.svg';
import BlackDiscordLogo from '../../assets/blackdiscordlogo.svg';
import DownloadIcon from '../../assets/download-svgrepo-com.svg';
import LeftbgLandingHeader from '../../assets/left_bg_landing_header.svg';

 

export default function MovileNavigation() {
    const [active, setActive] = useState('sidebar');
    const handleOpen = () => {
        setActive('sidebar-active');
    }
    const handleClose = () => {
        setActive('sidebar');
    }
  return (
    <div className='mobilenavcontainer'>
    <div className='mobilenav'>
        <img src={DiscordLogo} style={{
            height: '30px'
        }} />
        <div className='leftmenu'>
            <button id = "loginbutton">Login</button>
        <button id="menu-button" onClick={handleOpen}>
        <img src={MobileNavIcon} style={{
            height: '40px'
        }} />
        </button>
        </div>

    </div>
    <div className= {active}>
       <div className='sidebar-top'>
        <img src={BlackDiscordLogo} />
        <button id='close-sidebar-button' style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer'
        }} onClick={handleClose}>
            <img src={CloseIcon} style={{
                height: '40px',
            }}/>

        </button>
       </div>

       <div className='sidebar-body'>
         <a href="#" id='sidebarA'>Home</a>
         <a href="#" id='sidebarA'>Download</a>
         <a href="#" id='sidebarA'>Nitro</a>
         <a href="#" id='sidebarA'>Discover</a>
         <a href="#" id='sidebarA'>Safety</a>
         <a href="#" id='sidebarA'>Mod Academy</a>
         <a href="#" id='sidebarA'>Support</a>
         <a href="#" id='sidebarA'>Blog</a>
         <a href="#" id='sidebarA'>Careers</a>
       </div>
    </div>
    <div className='mobilenav-body' style={{
          backgroundColor: '#404eed',
          marginTop: '0',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'left',
          position: 'absolute',
          zIndex: '-1',
          height: '600px',
          padding: '30px',


    }}>
        <h1 style={{
            color: '#f6f6f6',
            fontSize: '40px',
        }}>IMAGINE A PLACE....</h1>
        <p style={{
            fontSize: '15px',
            color: '#f6f6f6',
            
        }}>...where you can belong to a school club a gaming
            group or a <br/> worldwide art community. Where 
            just you and a handful of friends<br/> can spend time
            together. A place that makes it easy to talk every day<br/>
            and hang out more often.
        </p>
        <button id='dfwmbutton' style={{
            height: '60px',
            width: '300px',
            borderRadius: '20px',
            border: 'none',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: '10px',
            fontSize: '15px',
            marginTop: '20px',
            cursor: 'pointer',
            boxShadow: '0 0 10px',
        }}>
            <img src={DownloadIcon} style={{
                height: '20px',
                width: '20px',
            }}/>Download for Windows
        </button>
        <button id='odiybmbutton' style={{
                        height: '60px',
                        width: '300px',
                        borderRadius: '20px',
                        border: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        columnGap: '10px',
                        fontSize: '15px',
                        backgroundColor: '#202225',
                        color: '#ffffff',
                        marginTop: '30px',
                        cursor: 'pointer',
                        boxShadow: '0 0 10px grey',
        }}>
            Open Discord in your browser
        </button>

        <img src={LeftbgLandingHeader} style={{
            height: '200px',
        }}/>

    </div>
    </div>
  )
}
