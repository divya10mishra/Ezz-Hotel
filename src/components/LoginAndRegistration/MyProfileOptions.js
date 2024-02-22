import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom'

export default function MyProfileOption(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openProfileUpdate = ()=>{
    setAnchorEl(null);
    props.openProfile();
  }

  const logOut = () =>{
    setAnchorEl(null);
    sessionStorage.removeItem('user');
    props.logout();
  }

  return (
      
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
       Welcome,{props.personName}
      </Button>
      <div style={{top:"60px"}}>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={openProfileUpdate}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/booking">My Booking</NavLink></MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
       
      </Menu>
      </div>
    </div>
  );
}
