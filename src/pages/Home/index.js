import React from "react";
import Header from "../../Layout/Header";
import Bottom from "../../Layout/Bottom/BottomNavigation";
import CityList from "../../components/Cities/CityList";
import Search from "../../components/Search";
import OffersAndDeals from "../../components/OffersAndDeals";
import SolicalContactAppFooter from "../../Layout/Bottom/SolicalContactAppFooter";
import { Hidden } from "@material-ui/core";
import Login from '../../components/LoginAndRegistration/Login';
import ProfileUpdate from '../../components/LoginAndRegistration/ProfileUpdate'
import Drawer from '@material-ui/core/Drawer';
import ProfileCard from '../../components/LoginAndRegistration/SideDrawerComponent/SideProfile'
import MyBookings from '../../components/LoginAndRegistration/SideDrawerComponent/MyBookings'
import MidComp from '../../Layout/MidComp/MidComp';
import Slideshow from '../../components/OffersAndDeals/Slider'
class Home extends React.Component{

   constructor(props){
     super(props);

     this.state = {
       isLoggedIn : false,
       isLoginOpen : false,
       isDrawerOpen : false,
       isProfileUpdateOpen : false
     }

     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
     this.openDrawer = this.openDrawer.bind(this);
     this.closeDrawer = this.closeDrawer.bind(this);
     this.openProfileUpdate = this.openProfileUpdate.bind(this);
     this.closeProfileUpdate = this.closeProfileUpdate.bind(this);
     this.loggedIn        = this.loggedIn.bind(this);
     this.logOut         = this.logOut.bind(this);


   }
   closeProfileUpdate(){
    this.setState({isProfileUpdateOpen:false})   
   }

   openProfileUpdate(){
    this.setState({isProfileUpdateOpen:true})   
   }

   openModal(){
     this.setState({isLoginOpen:true})   
   }

   closeModal(){
    this.setState({isLoginOpen:false})
   }

   openDrawer(){
    this.setState({isDrawerOpen:true})
   }
   closeDrawer(){
    this.setState({isDrawerOpen:false})
   }

   loggedIn(){
    // debugger;
       this.setState({isLoginOpen:false, isLoggedIn: true});
   }

   logOut(){
      this.setState({isLoginOpen:true, isLoggedIn: false});
   }

  render(){

     const {isLoginOpen, isDrawerOpen, isProfileUpdateOpen, isLoggedIn} = this.state;

     const LoginCmp         = isLoginOpen? <Login 
                                              display={isLoginOpen} 
                                              closeModal={this.closeModal} 
                                              loggedIn={this.loggedIn} 
                                            />: '';

     const profileUpdateCmp = isProfileUpdateOpen? <ProfileUpdate 
                                                     display={isProfileUpdateOpen} 
                                                     closeModal={this.closeProfileUpdate}
                                                  />:''
      
      return (
        <>
         
        <Header 
            openLoginWindow ={this.openModal} 
            openDrawer      ={this.openDrawer}
            openProfileUpdate ={this.openProfileUpdate}
            isLoggedIn = {isLoggedIn}
            logOut = {this.logOut}
        /> 
          <div className="header-css">
            <Search />
          </div>

          <Drawer anchor={"left"} open={isDrawerOpen} width={400} onClose={this.closeDrawer}>
              <ProfileCard/>       
          </Drawer>

          <Slideshow/>
          <MidComp/>
          <SolicalContactAppFooter />
          <Bottom />
              {profileUpdateCmp}
              {LoginCmp}
        </>
      )
  }
}

export default Home;
