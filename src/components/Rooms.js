import React from 'react';
import Navbar from './Navbar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { color } from '@mui/system';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function Rooms(){

    return(
        <div className='App' >
            <Navbar/>
            <div className='main2'>
                <div className='rw'>
                    <div className='rom'>
                        <div className='rtit'>
                            <span>ROOM1</span>
                            
                        </div>
                        <div className='components'>
                            <FormGroup>
                                <FormControlLabel control={<Switch color='primary'/>} label="Power" />
                                <FormControlLabel control={<Switch color='primary'/>} label="Fan" />
                                <FormControlLabel control={<Switch color='primary'/>} label="Light" />
                             
                             
                             </FormGroup>

                            </div>

                    </div>   
                    <div className='rom' >
                        <div className='rtit'>
                        <span>ROOM2</span>
                        </div>
                            <div className='components'>
                            <FormGroup>
                                <FormControlLabel control={<Switch  color='primary'/>} label="Power" />
                                <FormControlLabel control={<Switch color='primary' />} label="Fan" />
                                <FormControlLabel control={<Switch  color='primary'/>} label="Light" />
                             
                             
                             </FormGroup>

                            </div>
                    </div> 
                </div>
                <div className='rw'>
                    <div className='rom'>
                         <div className='rtit'>
                         <span>ROOM3</span>

                        </div>
                        <div className='components'>
                            <FormGroup>
                                <FormControlLabel control={<Switch color='primary'/>} label="Power" />
                                <FormControlLabel control={<Switch color='primary'/>} label="Fan" />
                                <FormControlLabel control={<Switch color='primary'/>} label="Light" />
                             
                             
                             </FormGroup>

                            </div>
                    </div> 
                    <div className='rom'>
                    <div className='rtit'>
                    <span>ROOM4</span>

                        </div>
                        <div className='components'>
                            <FormGroup>
                                <FormControlLabel control={<Switch color='primary'/>} label="Power" />
                                <FormControlLabel control={<Switch color='primary'/>} label="Fan" />
                                <FormControlLabel control={<Switch color='primary'/>} label="Light" />
                             
                             
                             </FormGroup>

                            </div>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

export default Rooms;