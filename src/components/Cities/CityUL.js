import React from "react";
import "../../shared/app-constants";
import { citiList } from "../../shared/app-constants";
import { makeStyles, IconButton } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
const useStyles = makeStyles((theme) => ({
  cityTypography: {
    color: theme.palette.secondary.light,
    fontSize: ".8rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: 1,
  },
  cityList: {
    overflowX: "scroll",
    width: "100%",
    overflowY: "hidden",
    display: "flex",
    flexFlow: "row nowrap",
    margin: "0 auto",
    height: "90px",
    marginLeft:"10px"
  },
  location: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: "10px",
  },
}));
function CityList() {
  const classes = useStyles();
  return (
    <div class="menu-item">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="nav-menu text-center">
                                                <nav class="mainmenu">
                                                    <ul id="desktopCity">
                                                        <li class=""><a href="./index.html">Delhi</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Mahipalpur</a></li>
                                                                <li><a href="#">Karol Bagh</a></li>
                                                                <li><a href="#">Paharganj</a></li>
                                                                <li><a href="#">New Delhi Railway Station</a></li>
                                                                <li><a href="#">Dwarka, New Delhi</a></li>
                                                                <li><a href="#">Dwarka Sector 9</a></li>
                                                                <li><a href="#">Rohini</a></li>
                                                                <li><a href="#">Indira Gandhi International Airport</a>
                                                                </li>
                                                                <li><a href="#">New Delhi</a></li>
                                                                <li><a href="#">Saket</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="">Gurgaon</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Huda City Center Metr</a></li>
                                                                <li><a href="#">DLF Phase 3</a></li>
                                                                <li><a href="#">Sector 14</a></li>
                                                                <li><a href="#">Mg Road</a></li>
                                                                <li><a href="#">Medanta Hospital</a></li>
                                                                <li><a href="#">Gurgaon Bus Stand</a></li>
                                                                <li><a href="#">Sector 29</a></li>
                                                                <li><a href="#">Sector 49</a></li>
                                                                <li><a href="#">Gurgaon Sohna Road</a></li>
                                                                <li><a href="#">Iffco Chowk</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./about-us.html">Noida</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Sector 62</a></li>
                                                                <li><a href="#">Sector 18</a></li>
                                                                <li><a href="#">Greater Noida</a></li>
                                                                <li><a href="#">Pari Chowk</a></li>
                                                                <li><a href="#">Sector 15</a></li>
                                                                <li><a href="#">Noida City Centre</a></li>
                                                                <li><a href="#">Sector 51</a></li>
                                                                <li><a href="#">Sector 66</a></li>
                                                                <li><a href="#">Sector 16</a></li>
                                                                <li><a href="#">Gaziabad</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./pages.html">Mumbai</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Andheri East</a></li>
                                                                <li><a href="#">Vashi</a></li>
                                                                <li><a href="#">Thane</a></li>
                                                                <li><a href="#">Andheri</a></li>
                                                                <li><a href="#">Panvel</a></li>
                                                                <li><a href="#">Dadar</a></li>
                                                                <li><a href="#">Andheri West</a></li>
                                                                <li><a href="#">Bandra</a></li>
                                                                <li><a href="#">CBD Belapur</a></li>
                                                                <li><a href="#">Navi Mumbai</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./blog.html">Bangalore</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Koramangala</a></li>
                                                                <li><a href="#">Indiranagar</a></li>
                                                                <li><a href="#">Hsr Layout</a></li>
                                                                <li><a href="#">Madiwala</a></li>
                                                                <li><a href="#">Marathahalli</a></li>
                                                                <li><a href="#">White Filed</a></li>
                                                                <li><a href="#">Bellandur</a></li>
                                                                <li><a href="#">KR puram</a></li>
                                                                <li><a href="#">Jayanagar</a></li>
                                                                <li><a href="#">Mg Road</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./contact.html">Goa</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Baga Beach North Goa</a></li>
                                                                <li><a href="#">Panjim</a></li>
                                                                <li><a href="#">Madgaon</a></li>
                                                                <li><a href="#">Vasco Da Gama</a></li>
                                                                <li><a href="#">South Goa</a></li>
                                                                <li><a href="#">Madgaon Railway Station</a></li>
                                                                <li><a href="#">Dabolim Airport</a></li>
                                                                <li><a href="#">Porvorim</a></li>
                                                                <li><a href="#">Mapusa</a></li>
                                                                <li><a href="#">Calangute</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./contact.html">Chennai</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Chennai Central Railway Station</a></li>
                                                                <li><a href="#">Ecr East Coast Road</a></li>
                                                                <li><a href="#">T Nagar</a></li>
                                                                <li><a href="#">Anna Nagar</a></li>
                                                                <li><a href="#">Koyambedu</a></li>
                                                                <li><a href="#">Chennai International Airport</a></li>
                                                                <li><a href="#">Velachery</a></li>
                                                                <li><a href="#">Vadapalani</a></li>
                                                                <li><a href="#">Sholinganallur</a></li>
                                                                <li><a href="#">Thoraipakkam</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./contact.html">Hyderabad</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Secunderabad Railway Station</a></li>
                                                                <li><a href="#">Gachibowli</a></li>
                                                                <li><a href="#">Madhapur</a></li>
                                                                <li><a href="#">LB Nagar</a></li>
                                                                <li><a href="#">Ameerpet</a></li>
                                                                <li><a href="#">Banjara Hills</a></li>
                                                                <li><a href="#">Rajiv Gandhi International Airport</a>
                                                                </li>
                                                                <li><a href="#">Kukatpally</a></li>
                                                                <li><a href="#">Kondapur</a></li>
                                                                <li><a href="#">Begumpet</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="./contact.html">Kolkata</a>
                                                            <ul class="dropdown">
                                                                <li><a href="#">Howrah Railway Station</a></li>
                                                                <li><a href="#">New Town</a></li>
                                                                <li><a href="#">Salt Lake City</a></li>
                                                                <li><a href="#">Park Street</a></li>
                                                                <li><a href="#">Kolkata International Airport</a></li>
                                                                <li><a href="#">Sealdah Railway Station</a></li>
                                                                <li><a href="#">Sector 5 Salt Lake City</a></li>
                                                                <li><a href="#">Dum Dum</a></li>
                                                                <li><a href="#">Dum Dum Airport 1 No. Gate</a></li>
                                                                <li><a href="#">Park Circus</a></li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  );
}
export default CityList;