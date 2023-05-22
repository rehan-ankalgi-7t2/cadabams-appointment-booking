import React from 'react'
import './booking-success-page.css'
import Lottie from 'lottie-react'
import SuccessAnimation from '../../assets/lottie/success-lottie.json'

const BookingSuccessPage = () => {
  return (
    <div className='booking-sucess-page'>
      <div className='booking-success-page-lottie'>
        <Lottie 
        animationData={SuccessAnimation} loop={false}></Lottie>
      </div>
        <h1>Booking Successfull!</h1>
        <h2>{`Thank you`}</h2>
    </div>
  )
}

export default BookingSuccessPage