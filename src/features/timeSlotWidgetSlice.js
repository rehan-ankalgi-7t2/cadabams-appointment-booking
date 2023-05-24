import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTimeSlot: '',
    isSlotSelected: false
}

const timeSlotWidgetSlice = createSlice({
    name: 'timeSlotWidget',
    initialState,
    reducers: {
        updateTimeSlot: (state, action) => {
            state.selectedTimeSlot = action.payload.timeSlot
            // console.log(state.selectedTimeSlot)
        },
        updateSlotSelectionStatus: (state, action) => {
            state.isSlotSelected = action.payload
        }
    }
})

export const { updateTimeSlot, updateSlotSelectionStatus } = timeSlotWidgetSlice.actions

export default timeSlotWidgetSlice.reducer