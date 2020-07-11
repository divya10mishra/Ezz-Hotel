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


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
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
    signInHeader = <div style={{ display: "flex", marginTop: "20px" }}>
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
      <div className="container">
        <AppBar position="fixed">
          <div className="row" id="myHeader">
            <Toolbar>
              <div className="col-sm-2">
                <IconButton
                  edge="start"
                  className="menuButton"
                  color="inherit"
                  aria-label="menu"
                  onClick={openDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className="col-sm-3">
                <a href="#" className="logo-btn">
                <span>EZZ |</span><br></br><span>Hotel</span> 
                </a>
              </div>

              <div className="col-sm-5">
                <span id="DesktopCityView">{cityUL}</span>
                <span id="MobileCityView">
                  {cityList}
                </span>
              </div>
              <div className="col-sm-2">
                <IconButton color="inherit" className="loginSignUpContainer">

                  {myProfile}

                  {signInHeader}

                </IconButton>
              </div>
            </Toolbar>
          </div>

        </AppBar>
      </div>


    </>
  );
};

export default Header;
