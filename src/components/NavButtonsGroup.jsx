import { Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './styles/Nav-btn-group.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { spinLeft, spinRight} from '../features/widgetSpinSlice'

const NavButtonsGroup = () => {

  const dispatch = useDispatch()

  return (
    <div className='navigation-btn__group'>
        <Button color='primary' variant='outlined' className='navigation__btn' startIcon={<NavigateBeforeIcon/>} onClick={() => dispatch(spinLeft())}>Previous</Button>
        <Button color='primary' variant='outlined' className='navigation__btn' endIcon={<NavigateNextIcon/>} onClick={() => dispatch(spinRight())}>Next</Button>
    </div>
  )
}

export default NavButtonsGroup