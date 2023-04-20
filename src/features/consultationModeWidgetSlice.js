import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    consultationMode: '',
}

const consultationModeWidgetSlice = createSlice({
    name: 'consultationModeWidget',
    initialState,
    reducers: {
        updateConsultationMode: (state, action) => {
            state.consultationMode = action.payload.consultationMode
        }
    }
})

export const { updateConsultationMode } = consultationModeWidgetSlice.actions

export default consultationModeWidgetSlice.reducer