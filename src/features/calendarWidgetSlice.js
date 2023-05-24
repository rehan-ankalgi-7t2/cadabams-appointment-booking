import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
let formatDate = date.toDateString();
console.log(`date generated in calendar slice: ${formatDate}`)

const initialState = {
    selectedDate: formatDate,
    isDateSelected: false
}

const calendarWidgetSlice = createSlice({
    name: 'calendarWidget',
    initialState,
    reducers: {
        updateCalendarWidgetDate: (state, action) => {
            state.selectedDate = action.payload.finalAppointmentDate
            state.isDateSelected = action.payload.finalAppointmentDate !== '' ? true : false
        },
        updateDateSelectionStatus: (state, action) => {
            // state.isDateSelected = action.payload
        }
    }
})

export const { updateCalendarWidgetDate, updateDateSelectionStatus } = calendarWidgetSlice.actions

export default calendarWidgetSlice.reducer