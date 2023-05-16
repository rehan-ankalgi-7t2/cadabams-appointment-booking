import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTimeSlot: ''
}

const timeSlotWidgetSlice = createSlice({
    name: 'timeSlotWidget',
    initialState,
    reducers: {
        updateTimeSlot: (state, action) => {
            state.selectedTimeSlot = action.payload.timeSlot
            // console.log(state.selectedTimeSlot)
        }
    }
})

export const { updateTimeSlot } = timeSlotWidgetSlice.actions

export default timeSlotWidgetSlice.reducer