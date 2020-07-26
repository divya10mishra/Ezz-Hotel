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
  MobileCityView:{
    display: 'none',
    [theme.breakpoints.down('sm')]:{
      display:"inline",
      overflowX: "auto",
      minWidth:" 200px"
    }
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
  //  debugger;
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
    cityList=<CityList/>
    signInHeader = <div className={classes.signInHeaderStyle}>
      <PersonIcon onClick={handleClick} style={{ marginTop: "2px" }} />
      <p
        onClick={handleClick}
        className="login-sign-para" 
      >Sign In</p> |
       <PersonIcon className="SignUpPerson"/>
      <p className="login-sign-para">Sign Up</p>
    </div>

  }

  return (
    <>
      <Grid container>
        <AppBar position="fixed" className="m-3">
          <Grid   className={classes.myHeader} >
            <Toolbar className="row">  
              <Grid item xs={12} sm={3}>
                <a href="#" className="logo-btn">
                <span className={classes.localContainer}>EZZ | Hotel</span>
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
           <IconButton color="inherit">     
                  <span>
                  {myProfile}
                  </span>
                <span>    
                  {signInHeader}
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
