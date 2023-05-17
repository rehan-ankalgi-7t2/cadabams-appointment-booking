import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
let formatDate = date.toDateString();
console.log(`date generated in calendar slice: ${formatDate}`)

const initialState = {
    selectedDate: formatDate
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