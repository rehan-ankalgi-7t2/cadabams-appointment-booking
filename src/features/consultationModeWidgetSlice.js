import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    consultationMode: '',
    location: '',
    treatmentCenter: '',
    isAllConsultationParamsSelected: false
}

const consultationModeWidgetSlice = createSlice({
    name: 'consultationModeWidget',
    initialState,
    reducers: {
        updateConsultationMode: (state, action) => {
            state.consultationMode = action.payload.consultationMode
            state.location = action.payload.location
            state.treatmentCenter = action.payload.treatmentCenter
            console.log(`mode: ${action.payload.consultationMode}, location: ${action.payload.location}, center: ${action.payload.treatmentCenter}`)

            if(action.payload.consultationMode === "Online"){
                state.isAllConsultationParamsSelected = true
            } else if(action.payload.consultationMode === "In Person"){
                if(action.payload.location && action.payload.treatmentCenter){
                    state.isAllConsultationParamsSelected = true
                }
            } else {
                state.isAllConsultationParamsSelected = false
            }
        },
    }
})

export const { updateConsultationMode } = consultationModeWidgetSlice.actions

export default consultationModeWidgetSlice.reducer