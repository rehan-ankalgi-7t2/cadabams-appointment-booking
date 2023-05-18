import React from 'react'
import './booking-success-page.css'

const BookingSuccessPage = () => {
  return (
    <div className='booking-sucess-page'>
        <h1>Booking Successfull!</h1>
        <h2>{`Thank you ${sessionStorage.getItem("firstName")}`}</h2>
    </div>
  )
}

export default BookingSuccessPage