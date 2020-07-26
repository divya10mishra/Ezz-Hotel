import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/Typography";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CityList from "../../components/Cities/CityList";
import CityUL from "../../components/Cities/CityUL";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import { home } from "../../shared/app-constants";
import MyProfileOption from '../../components/LoginAndRegistration/MyProfileOptions'
import { Grid, Paper, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
<<<<<<< HEAD
=======
  root: {
  },
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]:{
      display:'inline-block',
      paddingLeft:' 20px',
    }
  },
  DesktopCityView:{
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
  },
<<<<<<< HEAD
  MobileCityView:{
    display: 'none',
    [theme.breakpoints.down('sm')]:{
      display:"inline",
      overflowX: "auto",
      minWidth:" 200px"
    }
=======
  title: {
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
  },
  myHeader:{
    padding:'20px 0px 20px 0px',
    [theme.breakpoints.down('sm')]:{
      padding:'5px 0px 5px 0px',
    }
  },
  signInHeaderStyle:{
    display: "flex", 
    marginTop: "20px",
    [theme.breakpoints.down('sm')]:{
      display: "none"
    }
  }
}));

const Header = (props) => {
  let myProfile = '';
  let signInHeader = '';
  let cityUL = '';
  let cityList = '';
  const classes = useStyles();

  const [isDisplayProfile, showProfile] = useState(false);

  const openDrawer = () => {
    props.openDrawer()
  }
  const handleClick = () => {
    props.openLoginWindow();
  }

  const openProfileUpdate = () => {
    props.openProfileUpdate();
  }

  const logOut = () => {
    props.logOut()
  }


  if (props.isLoggedIn || sessionStorage.getItem('user') != null) {

    const user = sessionStorage.getItem('user') != null ? JSON.parse(sessionStorage.getItem('user')) : '';

    myProfile = <div style={{ display: "flex", marginTop: "20px" }}>
      <PersonIcon onClick={openProfileUpdate} style={{ marginTop: "2px" }} />
      <MyProfileOption openProfile={props.openProfileUpdate} personName={user.gFirstName} logout={props.logOut} />
    </div>

  }
  else {
    cityUL = <CityUL />
<<<<<<< HEAD
    cityList=<CityList/>
    signInHeader = <div className={classes.signInHeaderStyle}>
=======
    cityList = <CityList />
    signInHeader = <div className="sign-area-mobile">
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
      <PersonIcon onClick={handleClick} style={{ marginTop: "2px" }} />
      <p
        onClick={handleClick}
        className="login-sign-para"
      >Sign In</p> |
<<<<<<< HEAD
       <PersonIcon className="SignUpPerson"/>
=======
      <PersonIcon className="SignUpPerson" />
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
      <p className="login-sign-para">Sign Up</p>
    </div>
  }

  return (
    <>
      <Grid container>
        <AppBar position="fixed" className="m-3">
<<<<<<< HEAD
          <Grid   className={classes.myHeader} >
            <Toolbar className="row">  
              <Grid item xs={12} sm={3}>
                <a href="#" className="logo-btn">
                <span className={classes.localContainer}>EZZ | Hotel</span>
=======
          <Grid >
            <Toolbar className="row">
              <Grid item xs={12} sm={3}>
                <a href="#" className="logo-btn">
                  <span>EZZ | Hotel</span>
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
                </a>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={openDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>

              <Grid item sm={7} xs={12} justify="center">
                <span className={classes.DesktopCityView} >{cityUL}</span>
                <span className={classes.MobileCityView} >
                  {cityList}
                </span>
              </Grid>
              {/* <Hidden xsDown> */}
              <Grid item sm={2} xs={12}>
<<<<<<< HEAD
           <IconButton color="inherit">     
=======
                <IconButton color="inherit">
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
                  <span>
                    {myProfile}
                  </span>
<<<<<<< HEAD
                <span>    
                  {signInHeader}
=======
                  <span>
                    {signInHeader}
>>>>>>> 2878e9a8f359b6444a2f26e79394a8e0b1982032
                  </span>
                </IconButton>
              </Grid>
              {/* </Hidden> */}
            </Toolbar>
          </Grid>
        </AppBar>
      </Grid>
    </>
  );
};

export default Header;
