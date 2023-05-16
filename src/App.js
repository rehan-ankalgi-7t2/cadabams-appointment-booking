import './App.css';

import AppointmentSummaryDrawer from './components/appointment-summary/AppointmentSummaryDrawer';
import NavButtonsGroup from './components/navigation/NavButtonsGroup';

import { useSelector } from 'react-redux';
import UserDetailsForm from './components/user-details-form/UserDetailsForm';
import CalendarWidget from './components/calendar/CalendarWidget';
import TimeSlotWidget from './components/time-slot/TimeSlotWidget';
import ConsultationModeWidget from './components/consultattion-mode/ConsultationModeWidget';
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
