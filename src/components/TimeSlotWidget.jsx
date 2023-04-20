import { FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './styles/time-slot-widget.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateTimeSlot } from '../features/timeSlotWidgetSlice'
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './styles/Nav-btn-group.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import addOAuthInterceptor from 'axios-oauth-1.0a';
// import HmacSHA1 from 'crypto-js'


const TimeSlotWidget = () => {
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://crm.cadabams.com/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',5314),('availability','=','open')]&fields=['doctor_id','start_datetime','stop_datetime','id']`,
    headers: { 
        // 'Cookie': 'session_id=fd65f21c120061ce905241be94d10f0fd807cf48',
        'Host': 'crm.cadabams.com',
        'User-Agent': 'PostmanRuntime/7.31.3',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }
  };

  // var baseString = "GET&http%3A%2F%2Fexample.com%2Fwp-json%2Fwp%2Fv2%2Fposts&oauth_consumer_key%3Dkey%26oauth_nonce%3Dnonce%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D123456789%26oauth_token%3Dtoken";
  // var sugnature = HmacSHA1( , `${options.secret}&${options.tokenSecret}`)

  // Create a client whose requests will be signed
  const client = axios.create();

  //  Specify the OAuth options
  const options = {
    algorithm: 'HMAC-SHA1',
    secret: '1TsoADkdRqCcdi6gfZTarAx0pXaey5Pr',
    tokenSecret: 'POwMpxRHniIwmb3ziothQf96LhiNfRvb',
    key: 'j5r7K9FLCRbuli9w4Z4Ddyq6pnYY1ooc',
    token: 'IK4BaunTMgBRk9J9wVLsUZW4eHjPZyYY',
    includeBodyHash: true
  };

  // console.log({ addOAuthInterceptor });
  // // Add interceptor that signs requests
  addOAuthInterceptor(client, options);

  const makeRequest = async () => {
      try {
          const response = await client(config);
          console.log(JSON.stringify(response.data));
          // console.log(requestObj.parameters.oauth_timestamp.toString())
      } catch (error) {
          console.log(error);
      }
  }
  
  const timeSlots = ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM']
  const dispatch = useDispatch();
  
  const [timeSlot, setTimeSlot] = useState('')
  
  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value)
  }

  useEffect(() => {
    makeRequest()
  }, [])
  
  
  useEffect(() => {
    dispatch(updateTimeSlot({timeSlot}))
  }, [timeSlot, dispatch])

  const { selectedDate } = useSelector((state) => state.calendarWidget)

  return (


    <div className='time-slot'>
        <h1>{selectedDate}</h1>
        <div>
        <FormControl>
            <RadioGroup defaultValue="female" onChange={handleTimeSlotChange} className='time-slots__container' name="radio-buttons-group">
                {timeSlots.map((slot) => (
                    <FormControlLabel key={uuidv4()} className='time-slot__btns' value={slot} control={<Radio />} label={slot} />
                ))}
            </RadioGroup>
        </FormControl>
        </div>
        <div className='navigation-btn__group'>
          <Link className='navigation-link-btn' to="/calendar">
            <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>}>Previous</Button>
          </Link>
          <Link className='navigation-link-btn' to="/consultation-mode">
            <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>}>Next</Button>
          </Link>
        </div>
    </div>
  )
}

export default TimeSlotWidget