import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    widgetNumber: 0
}

const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        spinLeft: (state) => {
            state.widgetNumber <= 0 ? state.widgetNumber = 0 : state.widgetNumber -= 1
        },
        spinRight: (state) => {
            state.widgetNumber >= 4 ? state.widgetNumber = 4 : state.widgetNumber += 1
        },
        setWidgetNumber: (state, action) => {
            state.widgetNumber =  action.payload.newWidget
        }
    }
})


export const { spinLeft, spinRight, setWidgetNumber } = widgetSlice.actions

export default widgetSlice.reducer