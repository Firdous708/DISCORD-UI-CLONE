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
            
              <a href="#">Download</a>
              <a href="#">Nitro</a>
              <a href="#">Status</a>
            
          </div>
          <div className='company'>
            <p>Company</p>
            
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Brand</a>
              <a href="#">Newsroom</a>
            
          </div>
          <div className='resources'>
            <p>Resources</p>
            
              <a href="#">College</a>
              <a href="#">Support</a>
              <a href="#">Safety</a>
              <a href="#">Blog</a>
              <a href="#">Feedback</a>
              <a href="#">Build</a>
              <a href="#">StreamKit</a>
              <a href="#">Creators</a>
              <a href="#">Community</a>
              <a href="#">Official 3rd Party Merch</a>
            
          </div>
          <div className='policies'>
            <p>Policies</p>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Guidelines</a>
            <a href="#">Acknowledgements</a>
            <a href="#">Liscenes</a>
            <a href="#">Moderation</a>
            <a href="#">Company Information</a>
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
