import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import MyBookings from './components/LoginAndRegistration/SideDrawerComponent/MyBookings';
//import Home from "./containers/Home";
import Home from './pages/Home'
export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/booking" exact component={MyBookings} />
      <Route path="/home" exact component={Home} />
      <Route path="/" exact component={Home} />
   
    </Switch>
    </BrowserRouter>
  );
}