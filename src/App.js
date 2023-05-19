import { React, useEffect } from 'react';
import './App.css';
import AppointmentSummaryDrawer from './components/appointment-summary/AppointmentSummaryDrawer';
import NavButtonsGroup from './components/navigation/NavButtonsGroup';
import UserDetailsForm from './components/user-details-form/UserDetailsForm';
import CalendarWidget from './components/calendar/CalendarWidget';
import TimeSlotWidget from './components/time-slot/TimeSlotWidget';
import ConsultationModeWidget from './components/consultattion-mode/ConsultationModeWidget';
import ConfirmBookingPage from './pages/confirm-booking-page/ConfirmBookingPage'
import BookingSuccessPage from './pages/booking-success-page/BookingSuccessPage'
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateDoctorID } from './features/appSlice';

function App({children}) {
  let [searchParams, setsearchParams] = useSearchParams();
  // sessionStorage.setItem("doctorId", searchParams.get("doctorId"))
  let doctorId = searchParams.get("doctorId")
  const dispatch = useDispatch()
  dispatch(updateDoctorID({ doctorId }))

  return (
    
    <>
      {children}
      <AppointmentSummaryDrawer/>
      <main>
        <div className='App__multistepform'>
          <Routes>
            <Route path='/' element={<UserDetailsForm/>}/>
            <Route path='/calendar' element={<CalendarWidget/>}/>
            <Route path='/select-slot' element={<TimeSlotWidget/>}/>
            <Route path='/consultation-mode' element={<ConsultationModeWidget/>}/>
            <Route path='/confirm-booking-details' element={<ConfirmBookingPage/>}/>
            <Route path='/booking-successful' element={<BookingSuccessPage/>}/>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
