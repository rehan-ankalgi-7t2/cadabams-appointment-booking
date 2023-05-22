import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './user-details-form.css'

import { populateStateWithUserDetails } from '../../features/userDetailsFormSlice'
import { spinRight } from '../../features/widgetSpinSlice';

import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../navigation/Nav-btn-group.css'
import { Link } from 'react-router-dom';

const UserDetailsForm = () => {

  const dispatch = useDispatch()

  const { doctorID } = useSelector((state) => state.app)

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  useEffect(() => {
    setFullName(sessionStorage.getItem("fullName"))
    setPhoneNumber(sessionStorage.getItem("phoneNumber"))
    setEmailAddress(sessionStorage.getItem("emailAddress"))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(populateStateWithUserDetails({fullName, phoneNumber, emailAddress}))
    dispatch(spinRight())
  }

  return (
    <div className='user-details__form'>
        <form action="" onSubmit={handleSubmit}>
            <h1>Please share your details</h1>
            <label htmlFor="full-name">Full Name *</label><br/>
            <input type="text" name="full-name" id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder='Enter your first name'/>
            
            <label htmlFor="phone-number">Phone Number *</label><br/>
            <input type="tel" name="phone-number" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder='Enter your phone number'/>
            
            <label htmlFor="email-address">Email Address *</label><br/>
            <input type="email" name="email-address" id="email-address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required placeholder='Enter your email address'/>

            <input type="submit" value="submit" />
        </form>
        <div className='navigation-btn__group'>
          <Link className='navigation-link-btn' to={`/?doctorId=${doctorID}`}>
            <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>}>Previous</Button>
          </Link>
          <Link className='navigation-link-btn' to={`/calendar?doctorId=${doctorID}`}>
            <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>}>Next</Button>
          </Link>
        </div>
    </div>
  )
}

export default UserDetailsForm