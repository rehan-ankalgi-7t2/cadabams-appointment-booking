import { FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './time-slot-widget.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateTimeSlot } from '../../features/timeSlotWidgetSlice'
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../navigation/Nav-btn-group.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
// import addOAuthInterceptor from 'axios-oauth-1.0a';
// import OAuth from 'oauth-1.0a';
// import CryptoJS from 'crypto-js'

// import HmacSHA1 from 'crypto-js'


const TimeSlotWidget = () => {
  
 
  // const timeSlots = ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM']
  const dispatch = useDispatch();
  
  const [timeSlotList, setTimeSlotList] = useState([])
  const [timeSlot, setTimeSlot] = useState('')
  
  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value)
  }
  // Local KV pairs
  // consumer_key: '3sR7t7r7nNCCugj5hco6OKEdY7o5FsRQ',
  //     consumer_secret: '93ATtaV1LmJuniQMotflMkojoYz0DMKM',
  //     token: 'lEYbTQEnXAOeUJaQQ9sbNfHN221SYFW5',
  //     token_secret: '26q7tqS2DvcKqHdkUM80xFcyBecoARia',


  // Dev KV pairs
  // consumer_key: 'dB0ewUazGroc9HkAQs08YC0SkeIOGc3C',
  // consumer_secret: 'TNPaIh2CCKvtjnZuIO4TtsDJKG1nHq3m',
  // token: 'edUBoYYVdSR0Fx8DVg9Jm5YfLKkEbjtX',
  // token_secret: 'RBNj8FVHhG9b0xMjWV15dNcoT1RtHXgc',

  useEffect(() => {

    const oauthParams = {
      consumer_key: 'dB0ewUazGroc9HkAQs08YC0SkeIOGc3C',
      consumer_secret: 'TNPaIh2CCKvtjnZuIO4TtsDJKG1nHq3m',
      token: 'edUBoYYVdSR0Fx8DVg9Jm5YfLKkEbjtX',
      token_secret: 'RBNj8FVHhG9b0xMjWV15dNcoT1RtHXgc',
      timestamp: Math.floor(Date.now() / 1000),
      nonce: Math.random().toString(36).substring(2),
    };
    // dev
    // `https://dev-cadambams-crm.p7devs.com/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',5314),('availability','=','open')]&fields=['doctor_id','start_datetime','stop_datetime','id']`
    // local
    // http://192.168.1.232:8099/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',5314),('availability','=','open')]&fields=['doctor_id','start_datetime','stop_datetime','id']
    // https://crm.cadabams.com/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',5314),('availability','=','open'),('start_datetime','>=','2023-06-16'), ('stop_datetime','<=','2023-06-16')]&fields=['doctor_id','start_datetime','stop_datetime','id' ]

    const requestData = {
      url: `https://dev-cadambams-crm.p7devs.com/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',5314),('availability','=','open'),('start_datetime','>=','2023-05-16'), ('stop_datetime','<=','2023-05-17')]&fields=['doctor_id','start_datetime','stop_datetime','id']`,
      method: 'get',
      params: {
        // your API parameters
      },
    };
    // local
    // const signature = '93ATtaV1LmJuniQMotflMkojoYz0DMKM&26q7tqS2DvcKqHdkUM80xFcyBecoARia'
    // dev
    // TNPaIh2CCKvtjnZuIO4TtsDJKG1nHq3m&26RBNj8FVHhG9b0xMjWV15dNcoT1RtHXgc

    const signature = 'TNPaIh2CCKvtjnZuIO4TtsDJKG1nHq3m&RBNj8FVHhG9b0xMjWV15dNcoT1RtHXgc'
    const headers = {
      Authorization: `OAuth oauth_consumer_key="${oauthParams.consumer_key}", oauth_token="${oauthParams.token}", oauth_signature_method="PLAINTEXT", oauth_timestamp="${oauthParams.timestamp}", oauth_nonce="${oauthParams.nonce}", oauth_version="1.0", oauth_signature="${encodeURIComponent(signature)}"`,
    };
    
    axios({
      url: requestData.url,
      method: requestData.method,
      headers,
      params: requestData.params,
    })
      .then(response => {
        // handle response
        let slotsData = response.data
        slotsData["slot.booking"].forEach((booking) => {
          timeSlotList.push(booking.start_datetime.split(" ")[1])
        })
        // console.log("Success Response is ------------", response.data["slot.booking"][0].start_datetime.split(" ")[1])
      })
      .catch(error => {
        // handle error
        console.log("Error is --------------", error)
      });
    
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
                {timeSlotList.map((slot) => (
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