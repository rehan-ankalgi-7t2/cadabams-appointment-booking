import React, { useState, useEffect } from 'react'
import { FormControl, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material'
import './consultation-mode-widget.css'
import { Box } from '@mui/system';
import rehabCenters from '../../utils/rehabCenters.json'
import { useDispatch } from 'react-redux';
import { updateConsultationMode } from '../../features/consultationModeWidgetSlice'

import {Button} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../navigation/Nav-btn-group.css'
import { Link } from 'react-router-dom';

const ConsultationModeWidget = () => {

    const [location, setLocation] = useState('');
    const [treatmentCenter, setTreatmentCenter] = useState('');
    const [consultationMode, setConsultationMode] = useState('');
    const [treatmentCenterData, setTreatmentCenterData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        switch (location) {
            case "Bangalore":
                setTreatmentCenterData(rehabCenters.Bangalore)
                break;
            
            case "Hyderabad":
                setTreatmentCenterData(rehabCenters.Hyderabad)
                break;
        
            default:
                break;
        }
        dispatch(updateConsultationMode({ consultationMode, treatmentCenter, location }))
    }, [location, consultationMode, treatmentCenter, dispatch])
    

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    

    const handleCenterChange = (event) => {
        setTreatmentCenter(event.target.value);
    };

    const handleConsultationModechange = (e) => {
        setConsultationMode(e.target.value)
    }

  return (
    <div className='consultation-mode-widget'>
        <h1>Mode of Consultation</h1>
        <div className='consultation-mode__radiogroup'>
            <FormControl fullWidth>
                <RadioGroup className='consultation-mode-btn__container' name="radio-buttons-group" onChange={handleConsultationModechange}>
                    <FormControlLabel className='consultation-mode-btn' value="Online" control={<Radio />} label="Online Consultation"/>
                    <FormControlLabel className='consultation-mode-btn' value="In Person" control={<Radio />} label="In Person Consultation" />
                </RadioGroup>
            
            </FormControl>
        </div>

        { consultationMode === 'In Person' ? (
            <div className='LocationSelectWrapper'>
                <h1>Select location</h1>
                <div className='location__dropdowns'>
                    <Box sx={{ minWidth: 160 }}>
                        <FormControl>
                            <InputLabel color='mintyGreen' id="demo-simple-select-label">Location</InputLabel>
                            <Select
                                className='city-dropdown'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                label="Location"
                                color='success'
                                onChange={handleLocationChange}
                            >
                                <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
                                <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl >
                            <InputLabel color='mintyGreen' id="treatemnt-center-select-label">Treatment Center</InputLabel>
                            <Select
                                className='city-dropdown'
                                labelId="treatemnt-center-select-label"
                                id="treatemnt-center-select"
                                color='success'
                                value={treatmentCenter}
                                label="Treatment center"
                                onChange={handleCenterChange}
                            >
                                {treatmentCenterData.map((data) => (
                                    <MenuItem value={`${data}`}>{data}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
        ) : (
            <span></span>
        ) }

        <div className='navigation-btn__group'>
          <Link className='navigation-link-btn' to="/select-slot">
            <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>}>Previous</Button>
          </Link>
          <Link className='navigation-link-btn' to="/confirm-booking-details">
            <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>}>Confirm Booking</Button>
          </Link>
        </div>
        
    </div>
  )
}

export default ConsultationModeWidget