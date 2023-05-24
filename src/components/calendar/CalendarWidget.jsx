import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './calendar-widget.css'
import { updateCalendarWidgetDate, updateDateSelectionStatus } from '../../features/calendarWidgetSlice'

import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../navigation/Nav-btn-group.css'
import { Link } from 'react-router-dom';



const CalendarWidget = () => {

  const dispatch = useDispatch();
  const { doctorID } = useSelector((state) => state.app)
  const { isDateSelected } = useSelector((state) => state.calendarWidget);

  const handleDateChange = (newDate) => {
    var date = new Date(newDate)
    var finalAppointmentDate = date.toDateString();
    dispatch(updateCalendarWidgetDate({ finalAppointmentDate }));
    dispatch(updateDateSelectionStatus(true))
  }
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='calendar__widget'>
            <h1>Select appointment date</h1>
            <DateCalendar
              onChange={(newValue) => handleDateChange(newValue.$d)}
              />
            <div className='navigation-btn__group'>
              <Link className='navigation-link-btn' to={ isDateSelected ? `/?doctorId=${doctorID}` : `/calendar?doctorId=${doctorID}`}>
                <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>}>Previous</Button>
              </Link>
              <Link className='navigation-link-btn' to={ isDateSelected ? `/select-slot?doctorId=${doctorID}` : `/calendar?doctorId=${doctorID}`}>
                <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>}>Next</Button>
              </Link>
            </div>
        </div>
    </LocalizationProvider>
  )
}

export default CalendarWidget