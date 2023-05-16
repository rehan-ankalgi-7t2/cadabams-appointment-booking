import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './calendar-widget.css'
import { updateCalendarWidgetDate } from '../../features/calendarWidgetSlice'

import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../navigation/Nav-btn-group.css'
import { Link } from 'react-router-dom';



const CalendarWidget = () => {

  const [appointmentDate, setAppointmentDate] = useState(null)
  const dispatch = useDispatch();

  const handleDateChange = (newDate) => {
    var date = new Date(newDate)
    var finalAppointmentDate = date.toDateString();
    setAppointmentDate(finalAppointmentDate)
    dispatch(updateCalendarWidgetDate({ finalAppointmentDate }));
  }
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='calendar__widget'>
            <h1>Select Date</h1>
            <DateCalendar
              onChange={(newValue) => handleDateChange(newValue.$d)}
              />
            <div className='navigation-btn__group'>
              <Link className='navigation-link-btn' to="/">
                <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>}>Previous</Button>
              </Link>
              <Link className='navigation-link-btn' to="/select-slot">
                <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>}>Next</Button>
              </Link>
            </div>
        </div>
    </LocalizationProvider>
  )
}

export default CalendarWidget