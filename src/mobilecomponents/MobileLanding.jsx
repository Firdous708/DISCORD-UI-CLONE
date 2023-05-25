import React, {useState} from 'react'
import '../MobileStyling/MobileLanding.css';
import InviteOnly from '../../assets/invite_only_landing.svg';
import JustChillin from '../../assets/hanging_out_easy_landing.svg';
import FandomLanding from '../../assets/fandom_landing.svg';
import JustChilingO from '../../assets/just_chiling_landing.svg';
import TinyStars from '../../assets/tiny_stars_landing.svg';
import DiscordLogo from '../../assets/discord_main_logo.svg';

export default function MobileLanding() {
    const countries = ['Kashmir', 'Pakistan', 'Afghanistan', 'UK', 'Indonesia', 'Saudi Arabia'];
    const [selectedCountry, setSelectedCountry] = useState('Kashmir');
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    }

  return (
    <div
      className="mobilelandingcontainer"
      style={{
        marginTop: "662px",
        display: "grid",
        //    padding: '50px 20px',
      }}
    >
      <div
        className="landing1mobilecontainer"
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "40px",
        }}
      >
        <img src={InviteOnly} style={{}} />
        <h3>Create an invite-only place where you belong</h3>
        <p>
          Discord servers are organized into topic-based channels
          <br />
          where you can collaborate, share, and just talk about your day without
          clogging
          <br />
          up a group chat.
        </p>
      </div>
      <div
        className="landing2mobilecontainer"
        style={{
          backgroundColor: "#f6f6f6",
          paddingTop: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "40px",
        }}
      >
        <img src={JustChillin} />
        <h3>Where hanging out is easy</h3>
        <p>
          Grab a seat in a voice channel when you’re free. Friends in your
          <br />
          server can see you’re around and instantly pop in to talk without
          <br />
          having to call.
        </p>
      </div>
      <div
        className="landing3mobilecontainer"
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "40px",
        }}
      >
        <img src={FandomLanding} />
        <h3>From few to a fandom</h3>
        <p>
          Get any community running with moderation tools and custom
          <br />
          member access. Give members special powers, set up private
          <br />
          channels, and more.
        </p>
      </div>
      <div
        className="landing4mobilecontainer"
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "40px",
        }}
      >
        <h3>RELIABLE TECH FOR STAYING CLOSE</h3>
        <p>
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <img src={JustChilingO} />
      </div>
      <div
        className="landing4mobilecontainer"
        style={{
          backgroundImage: `url(${TinyStars})`,
          backgroundRepeat: "no-repeat",
          //    paddingTop: '40px',
          //    paddingLeft: '20px',
          //    paddingRight: '20px',
          paddingBottom: "40px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <h1>Ready to start your journey?</h1>
        <button
          style={{
            height: "60px",
            width: "400px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#5865f2",
            fontSize: "18px",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Download for Windows
        </button>
      </div>

      <div
        className="footer4mobilecontainer"
        style={{
          backgroundColor: "#2f3136",
          paddingTop: "40px",
          paddingLeft: "40px",
          paddingRight: "20px",
          paddingBottom: "40px",
          marginTop: "20px",
        }}
      >
        <div id="ftc1">
          <select value={selectedCountry} onChange={handleCountryChange} className='mobileSelect'>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div id="ftc2" style={{
            display: 'flex',
            flexdirection: 'row',
            columnGap: '150px',
            color: '#5865f2',
            marginTop: '40px',

        }}>
            <div id='ftc2Product' style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <p>Product</p>
                <a href="#" id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Download</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Nitro</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Status</a>
            </div>
            <div id='ftc2Company' style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <p>Company</p>
                <a href="" id='mobileLandingatags' style={{marginTop: '10px', color: '#ffffff', fontWeight: 'normal', fontSize: '15px',}}>About</a>
                <a href="" id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Jobs</a>
                <a href="" id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Brand</a>
                <a href="" id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Newsroom</a>
            </div>
        </div>
        <div id="ftc3" style={{
            display: 'flex',
            flexdirection: 'row',
            columnGap: '135px',
            color: '#5865f2',
            marginTop: '20px',

        }}>
            <div id='ftc3Resources' style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <p>Resources</p>
                <a href="#" id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>College</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Support</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Safety</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Blog</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Feedback</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Build</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>StreamKit</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Creators</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Community</a>
                <a href="#" id='mobileLandingatags'style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Official</a>
            </div>
            <div id='ftc2Company' style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <p>Policies</p>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px', color: '#ffffff', fontWeight: 'normal', fontSize: '15px',}}>Terms</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Privacy</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Cookie Settings</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Guidelines</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Acknowledgements</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Liscenses</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Moderation</a>
                <a href=""  id='mobileLandingatags' style={{marginTop: '10px',color: '#ffffff', fontWeight: 'normal',fontSize: '15px',}}>Company Information</a>
            </div>
        </div>
        <hr style={{ backgroundColor: '#404eed', height: '2px', border: 'none', margin: '40px 0px' }} />;
        <div id="ftc4" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <img src={DiscordLogo} />
            <button id = 'footersignupbutton' style={{
                backgroundColor: '#404eed',
                height: '40px',
                width: '100px',
                border: 'none',
                borderRadius: '20px',
                color: '#ffffff',
                fontSize: '15px',
                cursor: 'pointer',
            }}>
                Signup
            </button>
        </div>
      </div>
    </div>
  );
}
