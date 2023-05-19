import { configureStore } from '@reduxjs/toolkit'
import widgetReducer from '../../features/widgetSpinSlice'
import userDetailsFormReducer from '../../features/userDetailsFormSlice'
import calendarWidgetReducer from '../../features/calendarWidgetSlice'
import timeSlotWidgetReducer from '../../features/timeSlotWidgetSlice'
import consultationModeWidgetReducer from '../../features/consultationModeWidgetSlice'
import appReducer from '../../features/appSlice'

export default configureStore({
    reducer: {
        widget: widgetReducer,
        userDetailsForm: userDetailsFormReducer,
        calendarWidget: calendarWidgetReducer,
        timeSlotWidget: timeSlotWidgetReducer,
        consultationModeWidget: consultationModeWidgetReducer,
        app: appReducer
    },
})