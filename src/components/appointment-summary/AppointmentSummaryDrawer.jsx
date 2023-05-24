import { React, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import ListIcon from '@mui/icons-material/List';

import './appointment-summary.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const drawerWidth = 320;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { fullName, phoneNumber } = useSelector((state) => state.userDetailsForm)
  const { selectedDate } = useSelector((state) => state.calendarWidget)
  const { selectedTimeSlot } = useSelector((state) => state.timeSlotWidget)
  const { consultationMode } = useSelector((state) => state.consultationModeWidget)
  const { doctorID } = useSelector((state) => state.app)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='app-bar' color="white" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {/* <MenuIcon /> */}
            <ListIcon/>
          </IconButton>
          <Typography href="/" variant="h6" noWrap component="div">
            <Link to={`/?doctorId=${doctorID}`}>Appointment Summary</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        {/* only edit this below part don't touch the rest */}

        <div className='appointment__summary'>
        <h1>Appointment <br/> booking</h1>
        <h2>Booking for:</h2>
        <span className='user__name'>{fullName}</span>
        <br/>
        <span className='user__Phone-no'>{`+91 ${phoneNumber}`}</span>

        <Divider/>

        <h2>Date</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{`${selectedDate}`}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}> <Link to={`/calendar?doctorId=${doctorID}`}>Change</Link> </Button>
        </div>
        <Divider/>

        <h2>Time</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{selectedTimeSlot}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>
              <Link to={`/select-slot?doctorId=${doctorID}`}>Change</Link>
            </Button>
        </div>
        <Divider/>

        <h2>Consultation Mode</h2>
        <div className='appointment__field-data-wrapper'>
            <span>{consultationMode}</span>
            <Button variant='outlined' size='small' endIcon={<EditIcon/>}>
              <Link to={`/?doctorId=${doctorID}`}>Change</Link>
            </Button>
        </div>
        <Divider/>

        <h2>Map Link</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.24135837003!2d77.56056525878716!3d12.8896976182102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1678966528913!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='Map'></iframe>
    </div>

      </Drawer>
      <Main open={open}>

      </Main>
    </Box>
  );
}