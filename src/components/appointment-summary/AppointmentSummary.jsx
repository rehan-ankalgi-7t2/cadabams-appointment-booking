import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

import React from 'react'
import './appointment-summary.css'

const AppointmentSummary = () => {
  return (
    <div className='appointment__summary'>
        <h1>Appointment <br/> booking</h1>
        <h2>Booking for:</h2>
        <span className='user__name'>Bharat Hegde</span>
        <br/>
        <span className='user__Phone-no'>+91 1234567890</span>

        <h2>Date</h2>
        <div className='appointment__field-data-wrapper'>
            <span>October 8th, 2022</span>
            <Button variant='outlined' endIcon={<EditIcon/>}>Change</Button>
        </div>

        <h2>Time</h2>
        <div className='appointment__field-data-wrapper'>
            <span>1:00 PM</span>
            <Button variant='outlined' endIcon={<EditIcon/>}>Change</Button>
        </div>

        <h2>Consultation Mode</h2>
        <div className='appointment__field-data-wrapper'>
            <span>Online</span>
            <Button variant='outlined' endIcon={<EditIcon/>}>Change</Button>
        </div>

        <h2>Map Link</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.24135837003!2d77.56056525878716!3d12.8896976182102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1678966528913!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        title='Map'></iframe>
    </div>
  )
}

export default AppointmentSummary