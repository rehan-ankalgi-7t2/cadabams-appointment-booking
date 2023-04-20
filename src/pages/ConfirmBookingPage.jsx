import React, { useState } from 'react'
import './styles/confirm-booking-page.css'
import { useDispatch, useSelector } from 'react-redux'

import { Divider, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { setWidgetNumber } from '../features/widgetSpinSlice'
import { Link } from 'react-router-dom'



const ConfirmBookingPage = () => {

  const { fullName, phoneNumber } = useSelector((state) => state.userDetailsForm)
  const { selectedDate } = useSelector((state) => state.calendarWidget)
  const { selectedTimeSlot } = useSelector((state) => state.timeSlotWidget)
  const { consultationMode } = useSelector((state) => state.consultationModeWidget)

  return (
    <div className='confirm-booking-page'>
      <div className='confirm-booking-page__summary'>
        <h1>Appointment <br/> booking</h1>
        <h2>Booking for:</h2>
        <span className='user__name'>{fullName}</span>
        <br/>
        <span className='user__Phone-no'>{`+91 ${phoneNumber}`}</span>

        <Divider/>

        <h2>Date</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{`${selectedDate}`}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>
              <Link></Link>
            </Button>
        </div>
        <Divider/>

        <h2>Time</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{selectedTimeSlot}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>Change</Button>
        </div>
        <Divider/>

        <h2>Consultation Mode</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{consultationMode}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>Change</Button>
        </div>
        <Divider/>

        <h2>Map Link</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.24135837003!2d77.56056525878716!3d12.8896976182102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1678966528913!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='Map'></iframe>
      </div>

      <div className='confirm-booking-page__content'>
        <h1>Kindly confirm your booking details</h1>
        <Button className='proceed-to-payment__btn'><Link to="/booking-successful">Proceed To Payment</Link></Button>
      </div>
    </div>
  )
}

export default ConfirmBookingPage