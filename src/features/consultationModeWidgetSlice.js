import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    consultationMode: '',
    location: '',
    treatmentCenter: ''
}

const consultationModeWidgetSlice = createSlice({
    name: 'consultationModeWidget',
    initialState,
    reducers: {
        updateConsultationMode: (state, action) => {
            state.consultationMode = action.payload.consultationMode
            state.location = action.payload.location
            state.treatmentCenter = action.payload.treatmentCenter
        }
    }
})

export const { updateConsultationMode } = consultationModeWidgetSlice.actions

export default consultationModeWidgetSlice.reducer