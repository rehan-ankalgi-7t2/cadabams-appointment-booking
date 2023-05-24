import React from 'react'
import './confirm-booking-page.css'
import { useSelector } from 'react-redux'

import { Divider, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import rehabCentersData from '../../utils/rehabCenters.json'



const ConfirmBookingPage = () => {

  const { fullName, phoneNumber } = useSelector((state) => state.userDetailsForm)
  const { selectedDate } = useSelector((state) => state.calendarWidget)
  const { selectedTimeSlot } = useSelector((state) => state.timeSlotWidget)
  const { consultationMode } = useSelector((state) => state.consultationModeWidget)
  const { doctorID } = useSelector((state) => state.app)
  const { treatmentCenter, location } = useSelector((state) => state.consultationModeWidget)

  return (
    <div className='confirm-booking-page'>
      <div className='confirm-booking-page__summary'>
        <h1>Kindly confirm your booking details</h1>
        <h2>Booking for:</h2>
        <span className='user__name'>{fullName}</span>
        <br/>
        <span className='user__Phone-no'>{`+91 ${phoneNumber}`}</span>

        <Divider/>

        <h2>Date</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{`${selectedDate}`}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>
              <Link to={`/calendar?doctorId=${doctorID}`}>Change</Link>
            </Button>
        </div>
        <Divider/>

        <h2>Time</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{selectedTimeSlot}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>
              <Link to={`/select-slot?doctorId=${doctorID}`}>Change</Link>
            </Button>
        </div>
        <Divider/>

        <h2>Consultation Mode</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{consultationMode}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>
              <Link to={`/consultation-mode?doctorId=${doctorID}`}>Change</Link>
            </Button>
        </div>
        <Divider/>

        <h2>Map Link</h2>
        <iframe src={
          location === "Bangalore" && treatmentCenter === "Jayaprakash Nagar (JP Nagar)" ? rehabCentersData.Bangalore[0].mapLink
          : location === "Bangalore" && treatmentCenter === "Indiranagar" ? rehabCentersData.Bangalore[1].mapLink
          : location === "Hyderabad" ? rehabCentersData.Hyderabad[0].mapLink
          : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0266357912915!2d77.58442637598827!3d12.90600878740338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1513b91d8bb9%3A0x6b0b777280a26610!2sCadabams%20Hospitals!5e0!3m2!1sen!2sin!4v1684848897180!5m2!1sen!2sin`
        } height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='Map'></iframe>
      </div>

      <div className='navigation-btn__group'>
        <Button className='proceed-to-payment__btn' endIcon={<NavigateNextIcon/>}><Link to="/booking-successful">Complete booking process</Link></Button>
      </div>
    </div>
  )
}

export default ConfirmBookingPage
