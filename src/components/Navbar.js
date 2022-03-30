import React from 'react';
import{Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import EqualizerIcon from '@material-ui/icons/Equalizer';
function Navbar(){

    return(
        <div className='navbar'>
              <div className='profile'>
                 <span>
                     AUTOMATION
                 </span>

              </div>
              <div className='nav'>
                  <div className='home'>
                      
                      <Link to='/' style={{textDecoration:'none'}} className
                      ='home'>< HomeIcon style={{ color: 'white' }} fontSize="large"></HomeIcon><span className='navtit'>HOME</span></Link>
                  </div>
                  <div className='rooms' >
                      
                  <Link to='/rooms' style={{textDecoration:'none'}} className='home'><MeetingRoomIcon style={{ color: 'white' }} fontSize="large">

                    </MeetingRoomIcon>
                      <span className='navtit'>ROOMS</span></Link>
                  </div>
                  <div className='stats'>
                     
                  <Link to='/stats' style={{textDecoration:'none'}} className='home'> 
                  <EqualizerIcon style={{ color: 'white' }} fontSize="large"> 

                    </EqualizerIcon>
                      <span className='navtit'>Applications</span></Link>
                  </div>
                  

              </div>
        </div>
    )
}
export default Navbar;