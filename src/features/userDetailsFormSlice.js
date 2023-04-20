import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    fullName: '',
    phoneNumber: '',
    emailAddress: ''
}

const userDetailsFormslice = createSlice({
    name: 'userDetailsForm',
    initialState,
    reducers: {
        populateStateWithUserDetails: (state, action) => {
            state.fullName = action.payload.fullName
            state.phoneNumber = action.payload.phoneNumber
            state.emailAddress = action.payload.emailAddress

            sessionStorage.setItem("fullName", action.payload.fullName)
            sessionStorage.setItem("phoneNumber", action.payload.phoneNumber)
            sessionStorage.setItem("emailAddress", action.payload.emailAddress)
        }
    }
})


export const { populateStateWithUserDetails } = userDetailsFormslice.actions

export default userDetailsFormslice.reducer