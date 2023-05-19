import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doctorID: null
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateDoctorID: (state, action) => {
            state.doctorID = action.payload.doctorId
            console.log(action.payload.doctorId)
        }
    }
})

export const { updateDoctorID } = appSlice.actions

export default appSlice.reducer