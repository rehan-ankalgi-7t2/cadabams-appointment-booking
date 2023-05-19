import { FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './time-slot-widget.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateTimeSlot } from '../../features/timeSlotWidgetSlice'

import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../navigation/Nav-btn-group.css'
import { Link } from 'react-router-dom';
import axios from 'axios'


const TimeSlotWidget = () => {
  
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.calendarWidget)
  const [timeSlotList, setTimeSlotList] = useState([])
  const [timeSlot, setTimeSlot] = useState('')
  const { doctorID } = useSelector((state) => state.app) 

  /*
    @func getFormatDate
    @desc convert date format from "Fri May 19 2023" to "2023-05-19" (yyyy-mm-dd)
  */
  const getFormattedDate = (dateStr) => {
    var date = new Date(dateStr)
    var startDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    var nextDate = date.setDate(date.getDate() + 1);
    var stopDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    
    return [startDate, stopDate]
  }
  
  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value)
  }

  useEffect(() => {

    const oauthParams = {
      consumer_key: 'dB0ewUazGroc9HkAQs08YC0SkeIOGc3C',
      consumer_secret: 'TNPaIh2CCKvtjnZuIO4TtsDJKG1nHq3m',
      token: 'edUBoYYVdSR0Fx8DVg9Jm5YfLKkEbjtX',
      token_secret: 'RBNj8FVHhG9b0xMjWV15dNcoT1RtHXgc',
      timestamp: Math.floor(Date.now() / 1000),
      nonce: Math.random().toString(36).substring(2),
    };

    const requestData = {
      url: `https://dev-cadambams-crm.p7devs.com/restapi/1.0/object/slot.booking?domain=[('doctor_id','=',${doctorID}),('availability','=','open'),('start_datetime','>=','${getFormattedDate(selectedDate)[0]}'), ('stop_datetime','<=','${getFormattedDate(selectedDate)[0]}')]&fields=['doctor_id','start_datetime','stop_datetime','id']`,
      method: 'get',
      params: {
        // your API parameters
      },
    };

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
        setTimeSlotList(slotsData["slot.booking"])
      })
      .catch(error => {
        // handle error
        console.log("Error is --------------", error)
      });
    
    }, [selectedDate, doctorID])
  
  
  useEffect(() => {
    dispatch(updateTimeSlot({timeSlot}))
  }, [timeSlot, dispatch])

  return (
    <div className='time-slot'>
        <h1>{selectedDate}</h1>
        <div className='slot-wrapper'>
        <FormControl>
            <RadioGroup defaultValue="female" onChange={handleTimeSlotChange} className='time-slots__container' name="radio-buttons-group">
                {timeSlotList.map((slot) => (
                    <FormControlLabel key={slot.id} className='time-slot__btns' value={slot.start_datetime.split(" ")[1].slice(0,5)} control={<Radio />} label={slot.start_datetime.split(" ")[1].slice(0,5)} />
                ))}
            </RadioGroup>
        </FormControl>
        </div>
        <div className='navigation-btn__group'>
          <Link className='navigation-link-btn' to={`/calendar?doctorId=${doctorID}`}>
            <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>}>Previous</Button>
          </Link>
          <Link className='navigation-link-btn' to={`/consultation-mode?doctorId=${doctorID}`}>
            <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>}>Next</Button>
          </Link>
        </div>
    </div>
  )
}

export default TimeSlotWidget