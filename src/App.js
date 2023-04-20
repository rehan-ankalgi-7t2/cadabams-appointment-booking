import './App.css';

import AppointmentSummaryDrawer from './components/AppointmentSummaryDrawer';
import NavButtonsGroup from './components/NavButtonsGroup';

import { useSelector } from 'react-redux';
import UserDetailsForm from './components/UserDetailsForm';
import CalendarWidget from './components/CalendarWidget';
import TimeSlotWidget from './components/TimeSlotWidget';
import ConsultationModeWidget from './components/ConsultationModeWidget';
import ConfirmBookingPage from './pages/ConfirmBookingPage'
import BookingSuccessPage from './pages/BookingSuccessPage'
import { Route, Routes } from 'react-router-dom';

function App({children}) {

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
