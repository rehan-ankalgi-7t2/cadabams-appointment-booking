import { configureStore } from '@reduxjs/toolkit'
import widgetReducer from '../../features/widgetSpinSlice'
import userDetailsFormReducer from '../../features/userDetailsFormSlice'
import calendarWidgetReducer from '../../features/calendarWidgetSlice'
import timeSlotWidgetReducer from '../../features/timeSlotWidgetSlice'
import consultationModeWidgetReducer from '../../features/consultationModeWidgetSlice'

export default configureStore({
    reducer: {
        widget: widgetReducer,
        userDetailsForm: userDetailsFormReducer,
        calendarWidget: calendarWidgetReducer,
        timeSlotWidget: timeSlotWidgetReducer,
        consultationModeWidget: consultationModeWidgetReducer
    },
})