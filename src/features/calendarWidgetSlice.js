import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedDate: ''
}

const calendarWidgetSlice = createSlice({
    name: 'calendarWidget',
    initialState,
    reducers: {
        updateCalendarWidgetDate: (state, action) => {
            state.selectedDate = action.payload.finalAppointmentDate
        }
    }
})

export const { updateCalendarWidgetDate } = calendarWidgetSlice.actions

export default calendarWidgetSlice.reducer