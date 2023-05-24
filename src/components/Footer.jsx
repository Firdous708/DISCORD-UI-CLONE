import React, { useState } from 'react';
import '../styles/footer.css';
import Facebookicon from '../../assets/facebookicon.png';
import Instagramicon from '../../assets/instagramicon.png';
import Twittericon from '../../assets/twittericon.png';
import Youtubeicon from '../../assets/youtubeicon.png';
import DiscordMainLogo from '../../assets/discord_main_logo.svg';

export default function Footer() {
  const countries = ['Kashmir', 'Pakistan', 'Arabia', 'Turkey', 'India', 'Bangladesh', 'Indonesia', 'USA', 'Russia'];
  const [selectedCountry, setSelectedCountry] = useState("Kashmir");
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  }

  return (
    <div className='footercontainer'>
      <div className='footertop'>
        <div className='footertop1'>
          <div className='country-dropdown'>
            <select value={selectedCountry} onChange={handleChange}>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className='social'>
            <img src={Facebookicon} style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer'
            }} />
            <img src={Instagramicon} style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer'
            }} />
            <img src={Twittericon} style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer'
            }} />
            <img src={Youtubeicon} style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer'
              
            }} />
          </div>
        </div>
        <div className='footertop2'>
          <div className='product'>
            <p>Product</p>
            
              <a href="#" id='desktopfooterA'>Download</a>
              <a href="#" id='desktopfooterA'>Nitro</a>
              <a href="#" id='desktopfooterA'>Status</a>
            
          </div>
          <div className='company'>
            <p>Company</p>
            
              <a href="#"id='desktopfooterA'>About</a>
              <a href="#"id='desktopfooterA'>Jobs</a>
              <a href="#"id='desktopfooterA'>Brand</a>
              <a href="#"id='desktopfooterA'>Newsroom</a>
            
          </div>
          <div className='resources'>
            <p>Resources</p>
            
              <a href="#"id='desktopfooterA'>College</a>
              <a href="#"id='desktopfooterA'>Support</a>
              <a href="#"id='desktopfooterA'>Safety</a>
              <a href="#"id='desktopfooterA'>Blog</a>
              <a href="#"id='desktopfooterA'>Feedback</a>
              <a href="#"id='desktopfooterA'>Build</a>
              <a href="#"id='desktopfooterA'>StreamKit</a>
              <a href="#"id='desktopfooterA'>Creators</a>
              <a href="#"id='desktopfooterA'>Community</a>
              <a href="#"id='desktopfooterA'>Official 3rd Party Merch</a>
            
          </div>
          <div className='policies'>
            <p>Policies</p>
            <a href="#"id='desktopfooterA'>Terms</a>
            <a href="#"id='desktopfooterA'>Privacy</a>
            <a href="#"id='desktopfooterA'>Cookie Settings</a>
            <a href="#"id='desktopfooterA'>Guidelines</a>
            <a href="#"id='desktopfooterA'>Acknowledgements</a>
            <a href="#"id='desktopfooterA'>Liscenes</a>
            <a href="#"id='desktopfooterA'>Moderation</a>
            <a href="#"id='desktopfooterA'>Company Information</a>
          </div>
        </div>
      </div>
      <hr  style={{
        border: '1px solid #5865f2',
        width: '1200px',
      }}/>
      <div className='footerbottom'>
        <img src={DiscordMainLogo} />
        <button id = "signup">Signup</button>
      </div>
    </div>
  );
}
