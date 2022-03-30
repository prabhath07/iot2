import React from 'react'
import Navbar from './Navbar'

function Stats(){
return(
    <div className='App'>
<Navbar/>
<div className='main'>
<div className='alexa'>
       <img src='https://www.mobilityindia.com/wp-content/uploads/2019/09/AMAZON-ALEXA-LOGO-19-09-19.jpg'>
       </img>
       <span>
        Open prime Video
       </span>
       <span>
           Alexa Mute
       </span>
       <span>
           Alexa PLay a song
       </span>
</div>
<div className='alexa'>
<img src= 'https://tiimg.tistatic.com/fp/1/006/427/surveillance-safety-cctv-camera-369.jpg'/>
<span>
        Start surveillance
       </span>
       <span>
           Rotate Camera
       </span>
       <span>
Power ON/OFF
       </span>
</div>
<div className='alexa'>
<img src= 'https://cdn.trendhunterstatic.com/thumbs/plant-app.jpeg'/>
<span>
Start Watering
       </span>
       <span>
         Stop watering
       </span>
       <span>
          Test Humidity of soil
       </span>

</div>
</div>
    

    </div>
)
}
export default Stats;